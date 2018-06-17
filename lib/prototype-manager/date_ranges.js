const moment = require('moment');


class DateRanges {
  constructor () {
    this._ranges = {
      'last_7_days': {
        'startDate': moment().subtract(7, 'days'),
        'endDate': moment(),
      },
      'last_30_days': {
        'startDate': moment().subtract(30, 'days'),
        'endDate': moment(),
      },
      'last_6_months': {
        'startDate': moment().subtract(6, 'months'),
        'endDate': moment(),
      },
      'last_year': {
        'startDate': moment().subtract(1, 'year'),
        'endDate': moment(),
      },
      'all_time': {},
      'custom_date_range': {}
    };
  }

  get ranges () {
    return Object.keys(this._ranges);
  }

  getDatesForRange (range) {
    return this._ranges[range];
  }
};

module.exports = new DateRanges();
