const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const csv = require('csv');

const csvFile = fs.readFileSync(path.resolve(__dirname, './raw_data_dump_with_base_paths.csv'), { 'encoding': 'utf8' });
const jsonFile = fs.readFileSync(path.resolve(__dirname, './orgs_for_content_item_data_2017_05_29-2018_05_29.json'), { 'encoding': 'utf8' });
const args = require('minimist')(process.argv.slice(2));
const idToBasePathMap = [];
const idToOrg = {};
const orgsForContentItems = JSON.parse(jsonFile);

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

csv.parse(csvFile, (err, data) => {
  let headers = data[0];

  data.forEach((row, idx) => {
    if (idx > 0) {
      const basePath = row[fieldIdx('base_path')];
      const contentId = row[fieldIdx('content_id')];
      const org = orgsForContentItems[basePath];

      console.log(basePath);
      console.log(contentId);

      if (!(contentId in orgsForContentItems)) {
        orgsForContentItems[contentId] = org;
        
        // remove existing reference
        delete orgsForContentItems[basePath];
      }
    }
  });

  // process.stdout.write(JSON.stringify(orgsForContentItems, undefined, 2))
});
