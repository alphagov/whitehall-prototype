const path = require('path');
const fs = require('fs');


[
  'dwp',
  'gds',
  'hmcts',
  'moj'
].forEach(org => {
  const contentItemsFile = fs.readFileSync(path.resolve(__dirname, `${org}_raw_data.json`));
  const contentPurposesFile = fs.readFileSync(path.resolve(__dirname, `content_purposes_for_${org}_content_items.json`));
  const contentItems = JSON.parse(contentItemsFile);
  const contentPurposes = JSON.parse(contentPurposesFile);

  contentItems.forEach(item => {
    const contentPurpose = contentPurposes[item['base_path']];

    item['content_purpose'] = contentPurpose;
  });

  fs.writeFileSync(`data/${org}_raw_data.json`, JSON.stringify(contentItems, undefined, 2), { 'encoding': 'utf8' })
  console.log(`${org}_raw_data.json updated with content purposes.`);
});
