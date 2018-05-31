const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const csv = require('csv');

const csvFile = fs.readFileSync(path.resolve(__dirname, './raw_data_dump_with_base_paths.csv'), { 'encoding': 'utf8' });
const args = require('minimist')(process.argv.slice(2));
const idToBasePathMap = [];
const idToOrg = {};

let basePathIdx = 0;
let headers;

const fields = [
  'title',
  'content_id',
  'base_path',
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

function makeResponseHandler (basePath) {
  return function (jsonData) {
    let orgTitle = 'No organisation';
    
    if ('organisations' in jsonData.links) {
      orgTitle = jsonData.links.organisations[0].title;
    }

    idToOrg[basePath] = orgTitle;

    basePathIdx++;
    if (basePathIdx < idToBasePathMap.length) {
      makeRequest(idToBasePathMap[basePathIdx][1]);
    }
    else {
      fs.writeFileSync(path.resolve(__dirname, './orgs_for_content_item_data_2017_05_29-2018_05_29.json'), JSON.stringify(idToOrg, undefined, 2), { 'encoding': 'utf8' });

      console.log('Done!');
    }
  };
};

function makeErrorHandler (basePath) {
  return function (err) {
    throw new Error(`Request for ${basePath} failed with: ${err.message}`);
  };
};

function makeRequest (basePath) {
  let responseHandler = makeResponseHandler(basePath);
  let errorHandler = makeErrorHandler(basePath);

  console.log(`basePath: ${basePath}`);

  url = `https://www.gov.uk/api/content${basePath}`;

  console.log(`Calling: ${url}`);

  fetch(url)
    .then(res => {
      if (res.status !== 200) {
        throw new Error(`Request to ${url} returned ${res.status}`);
      }
      return res.json();
    })
    .then(json => {
      responseHandler(json);
    })
    .catch(errorHandler);
};

csv.parse(csvFile, (err, data) => {
  let headers = data[0];

  data.forEach((row, idx) => {
    if (idx > 0) {
      idToBasePathMap.push([row[fieldIdx('content_id')], row[fieldIdx('base_path')]]);
    }
  });

  makeRequest(idToBasePathMap[basePathIdx][1]);
});
