const moment = require('moment');

function filterTimeSeriesByYear(timeSeries, endDateString) {
  const endDate = moment(endDateString);
  const startDate = moment(endDateString).subtract(1, 'year');

  return timeSeries.filter(item => {
    const itemDate = moment(item.date);

    return itemDate.isBetween(startDate, endDate);
  });
};

function getValueAYearAgo(timeSeries, dateString) {
  const dateAYearAgo = moment(dateString).subtract(1, 'year');
  const timeSeriesDates = timeSeries.map(item => item.date);
};

module.exports = {
  'filterTimeSeriesByYear': filterTimeSeriesByYear
};
