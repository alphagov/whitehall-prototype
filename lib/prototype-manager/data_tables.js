const moment = require('moment');
const organisations = require('./organisations');
const columnGroupings = require('./column_groupings');
const dateRanges = require('./date_ranges');
const contentTypes = require('./content_types');


const metricDescriptions = {
  'document_type': "The format in which the content has been published",
  'content_purpose': "The format group",
  'primary_organisation_title': "The organisation that has published the content",
  'first_published_at': "Date the page was first published",
  'public_updated_at': "Date the page was first published",
  'pageviews': "Number of views per page",
  'unique_pageviews': "Number of unique views per page",
  'timeline_of_unique_pageviews': "Chart of daily unique pageviews",
  'pageviews_per_person': "Pageviews divided by unique pageviews",
  'number_of_internal_searches': "Number of internal site searches started from the page",
  'is_this_useful_yes': "Number of users who answered 'Yes' to 'Is this page useful?'",
  'is_this_useful_no': "Number of users who answered 'No' to 'Is this page useful?'",
  'user_satisfaction_score': "Percentage of users who answered 'Yes' rather than 'No' to 'Is this page useful?'",
  'feedex_comments': "Number of anonymous user responses to 'Is there anything wrong with this page?'",
  'number_of_pdfs': "Number of .pdf attachments to a page",
  'number_of_word_files': "Number of .doc, .docx or .docm attachments to a page",
  'readability_score': "Indicates how easily people can understand the page. High score means good readability, low or negative score means poor readability",
  'spell_count': "Number of mis-spelled (or unrecognised) words on a page",
  'simplify_count': "Number of non-plain English words that could have a simpler alternative",
  'passive_count': "Number of times the passive voice is used",
  'title_length': "Number of characters in the page title",
  'word_count': "Number of words on the page",
  'sentence_count': "Number of sentences on the page"
};

function prerenderRows (items) {
  function setCalculatedCells (item) {
    
    item['pageviews_per_person'] = Math.ceil(item['pageviews'] / item['unique_pageviews']) || 0;
    item['timeline_of_unique_pageviews'] = item['unique_pageviews']; // to do
    item['user_satisfaction_score'] = Math.ceil(
      (item['is_this_useful_yes'] / (item['is_this_useful_yes'] + item['is_this_useful_no'])) * 100
    ) || 0;
    item['title_count'] = item['title'].length;

    return item;
  };

  items = items.map(item => {
    for (let field in item) {
      // summarise all time-series fields
      if (Array.isArray(item[field])) {
        item[field] = item[field].reduce((accumulator, currentEntry) => {
          accumulator = (typeof accumulator === 'number') ? accumulator : parseInt(accumulator.value, 10);
          return accumulator + parseInt(currentEntry.value, 10);
        });
      }
    }
    item = setCalculatedCells(item);
    return item;
  });

  return items;
};


class Table {
	constructor (data, opts) {
		// add private properties for each sorting option
		for (let opt in opts.sorting) {
			this[`_${opt}`] = opts.sorting[opt];
		}

		// add private properties for each filtering option
		for (let opt in opts.filtering) {
			this[`_${opt}`] = opts.filtering[opt];
		}

    // cache original data
    this._items = data;

    this.filter();

		this.prerenderRows();

		this.sort();
	}

	get fieldTypes () {
		return {
			'title': 'alphanumeric',
			'base_path': 'alphanumeric',
			'document_type': 'alphanumeric',
			'content_purpose': 'alphanumeric',
			'primary_organisation_title': 'alphanumeric',
			'first_published_at': 'date',
			'public_updated_at': 'date',
			'pageviews': 'numeric',
			'unique_pageviews': 'numeric',
			'timeline_of_unique_pageviews': 'numeric',
			'pageviews_per_person': 'numeric',
			'number_of_internal_searches': 'numeric',
			'is_this_useful_yes': 'numeric',
			'is_this_useful_no': 'numeric',
			'user_satisfaction_score': 'numeric',
			'feedex_comments': 'numeric',
			'number_of_pdfs': 'numeric',
			'number_of_word_files': 'numeric',
			'readability_score': 'numeric',
			'spell_count': 'numeric',
			'simplify_count': 'numeric',
			'passive_count': 'numeric',
			'title_length': 'numeric',
			'word_count': 'numeric',
			'sentence_count': 'numeric'
		};
	}

	get headingLabels () {
		return {
			'title': 'Title',
			'updated_at': 'Last updated',
			'pageviews': 'Pageviews',
			'unique_pageviews': 'Unique pageviews',
			'timeline_of_unique_pageviews': 'Unique views 30 days',
			'pageviews_per_person': 'Pageviews per person',
			'number_of_internal_searches': 'On-page search',
			'is_this_useful_yes': 'User satisfaction: Yes',
			'is_this_useful_no': 'User satisfaction: No',
			'user_satisfaction_score': 'User satisfaction',
			'feedex_comments': 'Feedback comments',
			'number_of_pdfs': 'PDF attachments',
			'number_of_word_files': 'Word doc attachments',
			'readability_score': 'Readability score'
		};
	}

	get headingKeys () {
    return [
			'title',
      'updated_at',
			'pageviews',
			'unique_pageviews',
			'timeline_of_unique_pageviews',
			'pageviews_per_person',
			'number_of_internal_searches',
			'is_this_useful_yes',
			'is_this_useful_no',
			'user_satisfaction_score',
			'feedex_comments',
			'number_of_pdfs',
			'number_of_word_files',
			'readability_score'
    ];
	}

  get selectedColumns () {
    return columnGroupings.getColumnKeysForGroup(this.columnGrouping);
  }

	get headings () {
    const headingKeys = this.headingKeys.filter(key => this.selectedColumns.includes(key));

		return headingKeys.map(key => {
      const sortDirection = (this.sortDirection === 'asc') ? 'desc' : 'asc';

      return {
        'key': key,
        'label': this.headingLabels[key],
        'url': '?' + [
          `sort-by=${key}`,
          `sort-direction=${sortDirection}`,
          `content-type=${this.contentType}`,
          `organisation=${this.organisation}`,
          `topic=${this.topic}`,
          `editor=${this.editor}`,
          `published-date-range=${this.publishedDateRange}`,
          `last-updated-date-range=${this.lastUpdatedDateRange}`,
          `column-grouping=${this.columnGrouping}`,
          `collection-date-range=${this.collectionDateRange}`
        ].join('&')
      };
		});
	}

	get rows () {
    return this._items.map(item => {
      return {
        viewDataUrl: `/manage/content-item/${item['content_id']}?start-date=${this.startDate}&end-date=${this.endDate}`,
        contentId: item['content_id'],
        basePath: item['base_path'],
        cells: this.selectedColumns.map(key => {
          return {
            'key': key,
            'value': item[key]
          };
        })
      };
    });
	}

	get sortBy () {
		return this._sortBy || this.headingKeys[3];
	}

	get sortDirection () {
		return this._sortDirection || 'desc';
	}

  get contentType () {
    return this._contentType || '';
  }

  get startDate () {
    return this._startDate || moment(moment().subtract(1, 'month')).format('YYYY-MM-DD');
  }

  get endDate () {
    return this._endDate || moment().format('YYYY-MM-DD');
  }

  get contentTypes () {
		return this._contentTypes;
  }

  get title () {
    return this._title || '';
  }

  get organisation () {
    return this._organisation || '';
  }

  get columnGrouping () {
    return this._columnGrouping;
  }

  get columnGroupings () {
    return columnGroupings.groupingNames;
  }

  get collectionDateRange () {
    return this._collectionDateRange;
  }

  get collectionDateRanges () {
    return dateRanges.ranges;
  }

  get publishedDateRange () {
    return this._publishedDateRange || 'last_6_months';
  }

  get publishedDateRanges () {
    return dateRanges.ranges;
  }

  get lastUpdatedDateRange () {
    return this._lastUpdatedDateRange || 'last_6_months';
  }

  get lastUpdatedDateRanges () {
    return dateRanges.ranges;
  }

  get status () {
    return this._status || '';
  }

  get statuses () {
    return ["draft", "submitted", "scheduled", "published", "force published", "withdrawn"];
  }

  get topic () {
    return this._topic || '';
  }

  get editor () {
    return this._editor || '';
  }

	_getSortFunction (key, direction) {
		function numericSort (a, b) {
			let varA = parseInt(a[key], 10);
			let varB = parseInt(b[key], 10);

			if (varA < varB) {
				return (direction === 'asc') ? -1 : 1;
			}

			if (varA > varB) {
				return (direction === 'asc') ? 1 : -1;
			}

			return 0;
		};

		function dateSort (a, b) {
			let varA = moment(a[key]);
			let varB = moment(b[key]);

			if (varA.isBefore(varB)) {
				return (direction === 'asc') ? -1 : 1;
			}

			if (varA.isAfter(varB)) {
				return (direction === 'asc') ? 1 : -1;
			}

			return 0;
		};

		function alphanumericSort (a, b) {
			let varA = a[key].toLowerCase();
			let varB = b[key].toLowerCase();

			if (varA < varB) {
				return (direction === 'asc') ? -1 : 1;
			}

			if (varA > varB) {
				return (direction === 'asc') ? 1 : -1;
			}

			return 0;
		};

		if (this.fieldTypes[key] === 'numeric') {
			return numericSort;
		}
		if (this.fieldTypes[key] === 'date') {
			return dateSort;
		}
		else {
			return alphanumericSort;
		}
	}

  filter () {
    const self = this;

    this._items = this._items.filter(item => {
      const cTypes = contentTypes.getContentTypeFromBreadcrumb(self.contentType);
      let isValid = true;

      function isDocumentType (documentType) {
        return cTypes.documentType === documentType;
      };

      function isInSuperGroup(superGroup) {
        return cTypes.superGroup === superGroup;
      };

			function isInDateRange (date, range) {
        // ignore these for now
        if ((range === 'all_time') || (range === 'custom_date_range')) {
          return true;
        }

        const rangeDates = dateRanges.getDatesForRange(range);

				return moment(date).isBetween(rangeDates.startDate, rangeDates.endDate);
			};

      for (let field in item) {
        if (Array.isArray(item[field])) { // time-series field
          item[field] = item[field].filter(entry => {
						return isInDateRange(entry.date, self.collectionDateRange);
          });

          if (item[field].length === 0) {
            isValid = false;
            break;
          }
        }
        else {
          if ((field === 'updated_at') && (this.updatedAtDateRange !== '')) {
						isValid = isInDateRange(item[field].split(' ')[0], self.lastUpdatedDateRange);
          }
          if ((field === 'created_at') && (this.publishedDateRange !== '')) {
						isValid = isInDateRange(item[field].split(' ')[0], self.publishedDateRange);
          }
          if ((field === 'document_type') && (this.contentType !== '')) {
            if (!isDocumentType(item[field])) {
              isValid = false;
            }
          } 
          if ((field === 'content_purpose_supergroup') && (this.contentType !== '')) {
            if (!isInSuperGroup(item[field])) {
              isValid = false;
            }
          } 
          if (!isValid) { break; }
        }
      }

      return isValid;
    });
  }

	prerenderRows () {
    this._items = prerenderRows(this._items);
	}

	sort () {
		const sortFunction = this._getSortFunction(this.sortBy, this.sortDirection);

		this._items.sort(sortFunction);		
	}
}

module.exports = {
	'Table': Table,
  'prerenderRows': prerenderRows,
  'metricDescriptions': metricDescriptions
};
