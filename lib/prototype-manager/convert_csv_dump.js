const fs = require('fs');
const path = require('path');
const csv = require('csv');

const csvFile = fs.readFileSync(path.resolve(__dirname, './raw_data_dump.csv'), { 'encoding': 'utf8' });
const args = require('minimist')(process.argv.slice(2));
const itemsArray = [];
const itemsMap = {};

let headers;

const fields = [
  'title',
  'content_id',
  'latest',
  'document_type',
  'first_published_at',
  'public_updated_at',
  'pageviews',
  'unique_pageviews'
];

function fieldIdx (field) {
  return fields.indexOf(field);
};

const newFields = [
  'content_id',
  'title',
  'document_type',
  'first_published_at',
  'public_updated_at',
  'pageviews',
  'unique_pageviews'
];

function newFieldIdx (field) {
  return newFields.indexOf(field);
};

// return false if added 
function addItem (row) {
  let idIdx = fieldIdx('content_id');

  if (!(row[idIdx] in itemsMap)) {
    let item = row.slice(0);
    let newRow = [];
    
    newFields.forEach(field => {
      newRow.push(item[fieldIdx(field)]);
    });

    itemsMap[row[idIdx]] = itemsArray.length;
    itemsArray.push(newRow);

    return true;
  }

  return false;
};

function getItemForRow (row) {
  let id = row[fieldIdx('content_id')];

  return itemsArray[itemsMap[id]];
};

function updateItem (item, key, value) {
  let item_id = item[newFieldIdx('content_id')];
  let item_idx = itemsMap[item_id];

  itemsArray[item_idx][newFieldIdx(key)] = value;
};

function addPageviews(row) {
  let item = getItemForRow(row);
  let key = 'pageviews';
  let newValue = (parseInt(item[newFieldIdx(key)], 10) + parseInt(row[fieldIdx(key)], 10)).toString();

  updateItem(item, key, newValue);
}

function addUniquePageviews(row) {
  let item = getItemForRow(row);
  let key = 'unique_pageviews';
  let newValue = (parseInt(item[newFieldIdx(key)], 10) + parseInt(row[newFieldIdx(key)], 10)).toString();

  updateItem(item, key, newValue);
}

// reduce array of items to only contain one entry for each content item
// add up all the pageviews and unique pageviews for each item
csv.parse(csvFile, (err, data) => {
  let headers = data[0];

  data.forEach((row, idx) => {
    if (idx > 0) {

      let added = addItem(row);

      if (!added) {
        addPageviews(row);
        addUniquePageviews(row);
      }

    }
  });

  function sortByUniquePageviews (a, b) {
    let aPageviews = parseInt(a[newFieldIdx('unique_pageviews')], 10);
    let bPageviews = parseInt(b[newFieldIdx('unique_pageviews')], 10);

    if (aPageviews < bPageviews) {
      return -1;
    }

    if (aPageviews > bPageviews) {
      return 1;
    }

    return 0;
  };

  itemsArray.sort(sortByUniquePageviews);

  if ('f' in args) {

    if (args.f === 'csv') {
      itemsArray.unshift(headers);

      csv.stringify(itemsArray, { 'quoted': true }, function(err, data){
        process.stdout.write(data);
      });
    }

    if (args.f === 'json') {
      process.stdout.write(JSON.stringify(itemsArray, undefined, 2));
    }

  }
  else {
    itemsArray.unshift(headers);

    csv.stringify(itemsArray, { 'quoted': true }, function(err, data){
      process.stdout.write(data);
    });
  
  }

});
