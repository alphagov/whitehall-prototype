const path = require('path');
const fs = require('fs');

const csv = require('csv');
const moment = require('moment');
const args = require('minimist')(process.argv.slice(2));

if (!('f' in args)) {
  console.log('Provide a file to work on');
}

const jsonFile = fs.readFileSync(path.resolve(__dirname, args.f));
const itemData = JSON.parse(jsonFile);
const timeSeriesFields = [
	'pageviews',
	'unique_pageviews',
	'number_of_internal_searches',
	'is_this_useful_yes',
	'is_this_useful_no',
	'feedex_comments'
];

function getDaysToAdd (lastCollectionDate) {
  const today = moment();
  const diff = moment.duration(today.valueOf() - lastCollectionDate.valueOf());

  return Math.floor(diff.asDays());
};

function updateDate (date, daystoAdd) {
	let entryDate = moment(date);

	entryDate.add(daysToAdd, 'days');

	return entryDate.format('YYYY-MM-DD');
};

function getLastCollectionDate () {
  const timeSeries = itemData[0][timeSeriesFields[0]];
  let lastCollectionDate = null

  timeSeries.forEach(entry => {
    const entryDate = moment(entry.date);

    if ((lastCollectionDate === null) || entryDate.isAfter(lastCollectionDate)) {
      lastCollectionDate = entryDate;
    }
  });

  return lastCollectionDate;
}

const lastCollectionDate = getLastCollectionDate();
const daysToAdd = getDaysToAdd(lastCollectionDate);

// update all entries
itemData.forEach((item, idx) => {
  for (let field in item) {
    if (timeSeriesFields.includes(field)) {
			item[field].forEach(entry => {
				entry.date = updateDate(entry.date, daysToAdd);
			});
    }
  }
});

fs.writeFileSync(path.resolve(__dirname, args.f), JSON.stringify(itemData, undefined, 2), { 'encoding': 'utf8' });
console.log(`Date adjustments complete, results in ${args.f}`);
