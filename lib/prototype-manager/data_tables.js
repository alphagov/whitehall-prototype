const moment = require('moment');


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
			'base_path': 'Page',
			'document_type': 'Content type',
			'content_purpose': 'Content purpose',
			'primary_organisation_title': 'Publishing organisation',
			'first_published_at': 'First published',
			'public_updated_at': 'Last updated',
			'pageviews': 'Pageviews',
			'unique_pageviews': 'Unique pageviews',
			'timeline_of_unique_pageviews': 'Timeline of unique pageviews',
			'pageviews_per_person': 'Pageviews per person',
			'number_of_internal_searches': 'On-page searches',
			'is_this_useful_yes': 'User satisfaction: Yes',
			'is_this_useful_no': 'User satisfaction: No',
			'user_satisfaction_score': 'User satisfaction score',
			'feedex_comments': 'Feedback comments',
			'number_of_pdfs': 'PDF attachments',
			'number_of_word_files': 'Word doc attachments',
			'readability_score': 'Readability score',
			'spell_count': 'Spelling errors',
			'simplify_count': 'Difficult voice',
			'passive_count': 'Passive voice',
			'title_length': 'Title count',
			'word_count': 'Word count',
			'sentence_count': 'Sentence count'
		};
	}

	get headingKeys () {
    return [
			'title',
			'base_path',
			'document_type',
			'content_purpose',
			'primary_organisation_title',
			'first_published_at',
			'public_updated_at',
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
			'readability_score',
			'spell_count',
			'simplify_count',
			'passive_count',
			'title_length',
			'word_count',
			'sentence_count'
    ];
	}

	get headings () {
		return this.headingKeys.map(key => {
      const sortDirection = (this.sortDirection === 'asc') ? 'desc' : 'asc';

      return {
        'key': key,
        'label': this.headingLabels[key],
        'url': `?sort-by=${key}&sort-direction=${sortDirection}&start-date=${this.startDate}&end-date=${this.endDate}&content-type=${this.contentType}`
      };
		});
	}

	get rows () {
    return this._items.map(item => {
      return {
        contentId: item['content_id'],
        cells: this.headingKeys.map(key => {
          return item[key];
        })
      };
    });
	}

	get sortBy () {
		return this._sortBy || this.headingKeys[8];
	}

	get sortDirection () {
		return this._sortDirection || 'asc';
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
		return [
			'policy_paper',
			'impact_assessment',
			'corporate_report',
			'research',
			'guidance' 
    ];
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
      let isValid = true;

      function isDocumentType (documentType) {
        return self.contentType === documentType;
      };

			function isInDateRange (date) {
				const startDate = moment(self.startDate);
				const endDate = moment(self.endDate);

				return moment(date).isBetween(startDate, endDate);
			};

      for (let field in item) {
        if (Array.isArray(item[field])) { // time-series field
          item[field] = item[field].filter(entry => {
						return isInDateRange(entry.date);
          });

          if (item[field].length === 0) {
            isValid = false;
            break;
          }
        }
        else {
          if ((field === 'document_type') && (this.contentType !== '')) {
            if (!isDocumentType(item[field])) {
              isValid = false;
              break;
            }
          } 
        }
      }

      return isValid;
    });
  }

	prerenderRows () {
		function setCalculatedCells (item) {
      
			item['pageviews_per_person'] = Math.ceil(item['pageviews'] / item['unique_pageviews']) || 0;
			item['timeline_of_unique_pageviews'] = item['unique_pageviews']; // to do
			item['user_satisfaction_score'] = Math.ceil(
				(item['is_this_useful_yes'] / (item['is_this_useful_yes'] + item['is_this_useful_no'])) * 100
			) || 0;
			item['title_count'] = item['title'].length;

      return item;
		};

		this._items = this._items.map(item => {
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
	}

	sort () {
		const sortFunction = this._getSortFunction(this.sortBy, this.sortDirection);

		this._items.sort(sortFunction);		
	}
}

module.exports = {
	'Table': Table
};
