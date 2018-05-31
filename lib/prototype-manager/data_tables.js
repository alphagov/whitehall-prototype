const moment = require('moment');


class Table {
	constructor (data, opts) {
		// add private properties for each sorting option
		for (let opt in opts.sorting) {
			this[`_${opt}`] = opts.sorting[opt];
		}

		this._rows = this._setRows(data);

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
		const headings = this.metricKeys.map(key => {
			return {
				'key': key,
				'label': this.metricLabels[key]
			};
		});

		return headings;
	}

	get rows () {
		return this._rows;
	}

	get sortBy () {
		return this.sortingKey;
	}

	get sortingKey () {
		return this._sortBy || this.metricKeys[6];
	}

	get sortDirection () {
		return this._sortDirection || 'asc';
	}

	_setRows (data) {
		const rows = [];

		data.forEach(row => {
			let newRow = row.slice();

			newRow.shift();

			rows.push({
				'cells': newRow
			});
		});

		return rows;
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
}

class ContentEstateTable extends Table {
	_setRows (data) {
		const rows = [];

		data.forEach(row => {
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
