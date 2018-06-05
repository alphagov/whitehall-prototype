const path = require('path');
const fs = require('fs');

const fetch = require('node-fetch');
const args = require('minimist')(process.argv.slice(2));

if (!('f' in args)) { console.log('Please provide a JSON file as a reference for content data') }

const jsonFile = fs.readFileSync(path.resolve(__dirname, args.f));
const contentItems = JSON.parse(jsonFile);
const org = args.f.match(/^(\w+)_raw_data\.json$/)[1];

let idx = 0;
let idContentPurposeMap = {};

function makeResponseHandler (basePath) {
  return function (jsonData) {
    let contentPurpose;
    
    if ('content_purpose_subgroup' in jsonData) {
      contentPurpose = jsonData.content_purpose_subgroup;
    }
    else {
      console.log(`No content purpose found for ${basePath}, ending process`);
      return;
    }

    idContentPurposeMap[basePath] = contentPurpose;

    idx++;
    if (idx < contentItems.length) {
      makeRequest(contentItems[idx]['base_path']);
    }
    else {
      fs.writeFileSync(path.resolve(__dirname, `./content_purposes_for_${org}_content_items.json`), JSON.stringify(idContentPurposeMap, undefined, 2), { 'encoding': 'utf8' });

      console.log(`Done! Results are in ./content_purposes_for_${org}_content_items.json`);
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

makeRequest(contentItems[idx]['base_path']);
