const path = require('path');
const fs = require('fs');

const csv = require('csv');
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

function sortMetrics (data) {
  const items = [];
  const itemMap = {};
  const latest = {};

  function updateFields (newEntry) {
    let contentId = newEntry['content_id'];
    let collectionDate = newEntry['collection_date'];
    let itemIdx;
    let storedItem;
    let isLatest;

    function newItem (entry) {
      if (fieldConstants.includes(field)) {
        // add field and value
      }
      if (fieldLatest.includes(field)) {

      }
      if (fieldAggregations.includes(field)) {

      }
    };

    function updateField (field, value) {
      if (fieldConstants.includes(field)) {
        // do nothing
      }
      if (fieldLatest.includes(field)) {
        // if isLatest, set to this value
      }
      if (fieldAggregations.includes(field)) {
        // add to aggregation against this date
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

    if (!(contentId in itemMap)) {
      itemIdx = items.length;
      storedItem = newItem(entry);
      isLatest = logDateAsLatest(collectionDate, contentId);

      for (let field in newEntry) {
        updateField(field, newEntry[field]);
      }

      items.push(newEntry);
      itemMap[contentId] = itemIdx;
    }
    else {
      itemIdx = itemMap[contentId];
      storedItem = items[itemIdx];
      isLatest = logDateAsLatest(collectionDate, contentId);
       
      updateField();
    }
  };

  data.forEach(row => {
    for (let field in row) {
      if (fieldConstants.includes(field)) {
        
      }
    }
  });
};

const fieldConstants = [
  'first_published_at'
];

const fieldLatests = [
  'title',
  'base_path',
  'document_type',
  'primary_organisation_title',
  'public_updated_at',
  'number_of_pdfs',
  'number_of_word_files',
  'readability_score',
  'spell_count',
  'simplify_count',
  'passive_count',
  'word_count',
  'sentence_count'
];

const fieldAggregations = [
  'pageviews',
  'unique_pageviews',
  'number_of_internal_searches',
  'is_this_useful_yes',
  'is_this_useful_no',
  'feedex_comments'
];

const headings = [
  'collection_date',
  'content_id',
  'title',
  'base_path',
  'document_type',
  'primary_organisation_title',
  'first_published_at',
  'public_updated_at',
  'pageviews',
  'unique_pageviews',
  'number_of_internal_searches',
  'is_this_useful_yes',
  'is_this_useful_no',
  'feedex_comments',
  'number_of_pdfs',
  'number_of_word_files',
  'readability_score',
  'spell_count',
  'simplify_count',
  'passive_count',
  'word_count',
  'sentence_count'
];

if (!('f' in args)) { console.log('Please provide a CSV file to parse') }

const csvString = fs.readFileSync(path.resolve(__dirname, args.f));

const data = csv.parse(csvString, (err, data) => {
  const fileName = args.f.replace(/csv$/, 'json');

  data = parseData(data, headings);
  data = sortMetrics(data);
  fs.writeFileSync(fileName, JSON.stringify(data, undefined, 2));
  console.log(`Parsing complete, results in: ./${fileName}`);
});
