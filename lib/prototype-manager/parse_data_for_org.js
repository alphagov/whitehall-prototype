const path = require('path');
const fs = require('fs');

const csv = require('csv');
const moment = require('moment');
const args = require('minimist')(process.argv.slice(2));


function parseData (data, keys) {
  return data.map((row, idx) => {
    let hash = {};

    row.forEach((value, idx) => {
      hash[keys[idx]] = value;
    });

    return hash;
  });
};

// Merge all collections of data for an item into one row with fields as one of:
// - constants, that don't change between collections
// - latest, the most recent value
// - aggregations, a list of all the values for each collection marked by their date
function mergeRows(data) {
  const items = [];
  const itemMap = {};
  const latest = {};

  function updateFields (entry) {
    let contentId = entry['content_id'];
    let collectionDate = entry['collection_date'];
    let itemIdx;
    let storedItem;
    let isLatest;

    function newItem (entry) {
      newItem  = {};

      for (let field in entry) {
        if ((constantFields.includes(field)) || (latestFields.includes(field))) {
          newItem[field] = entry[field];
        }
        if (aggregatedFields.includes(field)) {
          newItem[field] = [];
        }
      }

      return newItem;
    };

    function updateField (field, value, storedItem, isLatest, collectionDate) {
      if (constantFields.includes(field)) {
        // should already be set in newItem
        return;
      }
      if ((latestFields.includes(field)) && isLatest) {
        storedItem[field] = value;
      }
      if (aggregatedFields.includes(field)) {
        // add to aggregation against this date
        storedItem[field].push({
          'date': collectionDate,
          'value': value
        });
      }
    };

    function logDateAsLatest (date, contentId) {
      if (!(contentId in latest)) {
        latest[contentId] = date;
      }
      else {
        newDate = moment(date);
        currentDate = moment(latest[contentId]);

        if (currentDate.isBefore(newDate)) {
          latest[contentId] = date;
          return true;
        }
        else {
          return false;
        }
      }
    }

    storedItem = (contentId in itemMap) ? items[itemMap[contentId]] : newItem(entry);
    isLatest = logDateAsLatest(collectionDate, contentId);

    for (let field in entry) {
      updateField(field, entry[field], storedItem, isLatest, collectionDate);
    }

    if (!(contentId in itemMap)) {
      itemIdx = items.length;
      items.push(storedItem);
      itemMap[contentId] = itemIdx;
    }
  };

  data.forEach(row => {
    updateFields(row);
  });

  return items;
};

const constantFields = [
  'content_id',
  'created_at'
];

const latestFields = [
  'title',
  'base_path',
  'document_type',
  'content_purpose_supergroup',
  'primary_organisation_title',
  'updated_at',
  'number_of_pdfs',
  'number_of_word_files',
  'readability_score',
  'spell_count',
  'simplify_count',
  'passive_count',
  'word_count',
  'sentence_count'
];

const aggregatedFields = [
  'pageviews',
  'unique_pageviews',
  'number_of_internal_searches',
  'is_this_useful_yes',
  'is_this_useful_no',
  'feedex_comments'
];

if (!('f' in args)) { console.log('Please provide a CSV file to parse') }

const csvString = fs.readFileSync(path.resolve(__dirname, args.f));

const data = csv.parse(csvString, (err, data) => {
  const fileName = args.f.replace(/csv$/, 'json');

  const headings = data.shift();
  //console.log('headings:');
  //console.log(headings);
  data = parseData(data, headings);
  //console.log(data[0]);
  data = mergeRows(data);
  //console.log(data[0]);

  fs.writeFileSync(fileName, JSON.stringify(data, undefined, 2));
  console.log(`Parsing complete, results in: ./${fileName}`);
});
