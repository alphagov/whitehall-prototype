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
    this._data = data;

    // set the rows to be sorted/filtered
		this.rows = this._setRows();

    // derive the content types from the items in the data
    this.contentTypes = this._setContentTypes();

    // filter rows
    this.filter();

		// perform initial sort
		this.sort();
	}

	get metricKeys () {
		return [
			'title',
			'document_type',
			'first_published_at',
			'public_updated_at',
			'pageviews',
			'unique_pageviews'
		];
	}

	get metricTypes () {
		return {
			'title': 'alphanumeric',
			'document_type': 'alphanumeric',
			'first_published_at': 'date',
			'public_updated_at': 'date',
			'pageviews': 'numeric',
			'unique_pageviews': 'numeric'
		};
	}

	get metricLabels () {
		return {
			'title': 'Title',
			'document_type': 'Content type',
			'first_published_at': 'First published',
			'public_updated_at': 'Last updated',
			'pageviews': 'Page views',
			'unique_pageviews': 'Unique pageviews'
		};
	}

	get headings () {
    const self = this;

		const headings = this.metricKeys.map(key => {
      let sortDirection = 'asc';

      if ((self.sortBy === key) && (self.sortDirection === 'asc')) {
        sortDirection = 'desc';
      }

			return {
				'key': key,
				'label': this.metricLabels[key],
        'url': `?sort-by=${key}&sort-direction=${sortDirection}&start-date=${self.startDate}&end-date=${self.endDate}&content-type=${self.contentType}`
			};
		});

		return headings;
	}

	get rows () {
		return this._rows;
	}

  set rows (rows) {
    this._rows = rows;
  }

	get sortBy () {
		return this.sortingKey;
	}

	get sortingKey () {
		return this._sortBy || this.metricKeys[5];
	}

	get sortDirection () {
		return this._sortDirection || 'asc';
	}

  get contentType () {
    return this._contentType || '';
  }

  get startDate () {
    return this._startDate || '';
  }

  get endDate () {
    return this._endDate || '';
  }

  get contentTypes () {
    return this._contentTypes;
  }

  set contentTypes (types) {
    this._contentTypes = types;
  }

	_setRows () {
		const rows = [];

		this._data.forEach(row => {
			let newRow = row.slice();

			newRow.shift();

			rows.push({
				'cells': newRow
			});
		});

		return rows;
	}

  _setContentTypes () {
    const allTypes = this.rows.map(row => row.cells[this.metricKeys.indexOf('document_type')]);
    const uniqueTypes = [];

    allTypes.forEach(type => { if (!uniqueTypes.includes(type)) { uniqueTypes.push(type); } });

    return uniqueTypes;
  }

	_metricType (metricIdx) {
		return this.metricTypes[this.metricKeys[metricIdx]];
	}

	_getSortFunction (metricIdx, direction) {
		function numericSort (a, b) {
			let varA = parseInt(a.cells[metricIdx], 10);
			let varB = parseInt(b.cells[metricIdx], 10);

			if (varA < varB) {
				return (direction === 'asc') ? -1 : 1;
			}

			if (varA > varB) {
				return (direction === 'asc') ? 1 : -1;
			}

			return 0;
		};

		function dateSort (a, b) {
			let varA = moment(a.cells[metricIdx]);
			let varB = moment(b.cells[metricIdx]);

			if (varA.isBefore(varB)) {
				return (direction === 'asc') ? -1 : 1;
			}

			if (varA.isAfter(varB)) {
				return (direction === 'asc') ? 1 : -1;
			}

			return 0;
		};

		function alphanumericSort (a, b) {
			let varA = a.cells[metricIdx].toLowerCase();
			let varB = b.cells[metricIdx].toLowerCase();

			if (varA < varB) {
				return (direction === 'asc') ? -1 : 1;
			}

			if (varA > varB) {
				return (direction === 'asc') ? 1 : -1;
			}

			return 0;
		};

		if (this._metricType(metricIdx) === 'numeric') {
			return numericSort;
		}
		if (this._metricType(metricIdx) === 'date') {
			return dateSort;
		}
		else {
			return alphanumericSort;
		}
	}

	sort () {
		const metricIdx = this.metricKeys.indexOf(this.sortingKey);
		const sortFunction = this._getSortFunction(metricIdx, this.sortDirection);

		this.rows.sort(sortFunction);
	}

  filter () {
    const self = this;

    function isAfterStartDate (cells) {
      const itemDate = moment(cells[self.metricKeys.indexOf('public_updated_at')]);

      return itemDate.isAfter(self._startDate);
    };

    function isBeforeEndDate (cells) {
      const itemDate = moment(cells[self.metricKeys.indexOf('public_updated_at')]);

      return itemDate.isBefore(self._endDate);
    };

    function isContentType (cells) {
      const itemContentType = cells[self.metricKeys.indexOf('document_type')];

      return itemContentType === self._contentType;
    };

    const filters = [];

    if (this._startDate) {
      filters.push(isAfterStartDate); }
    if (this._endDate) { 
      filters.push(isBeforeEndDate); }
    if (this._contentType) {
      filters.push(isContentType); }

    if (filters.length) {

      this.rows = this.rows.filter(row => {
        let isValid = true;

        for (let i = 0, j = filters.length; i < j; i++) {
          isValid = filters[i](row.cells);
          if (!isValid) { break; }
        }

        return isValid;
      });

    }
  }
}

class ContentEstateTable extends Table {
	_setRows () {
		const rows = [];

		this._data.forEach(row => {
			let newRow = row.slice();
			let contentId = newRow.shift();

			rows.push({
				'cells': newRow,
				'contentId': contentId
			});
		});

		return rows;
	}

	sort () {
		const metricIdx = this.metricKeys.indexOf(this.sortingKey);
		const sortFunction = this._getSortFunction(metricIdx, this.sortDirection);

		this.rows.sort(sortFunction);
	}
};

module.exports = {
	'ContentEstateTable': ContentEstateTable
};
