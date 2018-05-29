const fs = require('fs');
const path = require('path');
const csv = require('csv');

const csvFile = fs.readFileSync(path.resolve(__dirname, './raw_data_dump.csv'), { 'encoding': 'utf8' });
const args = require('minimist')(process.argv.slice(2));
const itemsObj = {};
const itemsArray = [];
const itemsMap = {};

let headers;

const fields = {
  'title': 0,
  'content_id': 1,
  'latest': 2,
  'document_type': 3,
  'first_published_at': 4,
  'public_updated_at': 5,
  'pageviews': 6,
  'unique_pageviews': 7
}

function fieldIdx (field) {
  return fields[field];
};

function itemInItems (row) {
  return row[fieldIdx('content_id')] in itemsObj;
};

// return false if added 
function addItem (row) {
  if (!itemInItems(row)) {
    let idx = fieldIdx('content_id');
    let item = row.slice(0);

    itemsObj[row[idx]] = item;
    itemsMap[row[idx]] = itemsArray.length;
    itemsArray.push(item);

    return true;
  }

  return false;
};

function getItemForRow (row) {
  let id = row[fieldIdx('content_id')];

  return itemsObj[id];
};

function updateItem (item, key, value) {
  let item_id = item[fieldIdx('content_id')];
  let item_idx = itemsMap[item_id];

  itemsObj[item_id][fieldIdx(key)] = value;
  itemsArray[item_idx][fieldIdx(key)] = value;
};

function addPageviews(row) {
  let item = getItemForRow(row);
  let key = 'pageviews';
  let newValue = (parseInt(item[fieldIdx(key)], 10) + parseInt(row[fieldIdx(key)], 10)).toString();

  updateItem(item, key, newValue);
}

function addUniquePageviews(row) {
  let item = getItemForRow(row);
  let key = 'unique_pageviews';
  let newValue = (parseInt(item[fieldIdx(key)], 10) + parseInt(row[fieldIdx(key)], 10)).toString();

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
    let aPageviews = parseInt(a[fieldIdx('unique_pageviews')], 10);
    let bPageviews = parseInt(b[fieldIdx('unique_pageviews')], 10);

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
