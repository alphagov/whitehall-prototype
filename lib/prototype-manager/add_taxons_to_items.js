const fs = require('fs');
const path = require('path');
const args = require('minimist')(process.argv.slice(2));

const Queue = require('./govuk_api_queue');


if (!('f' in args)) {
  console.log('Please specify a file for the items');
  process.exit();
}

const queue = new Queue({
  'log': true
});

const itemFile = fs.readFileSync(path.resolve(__dirname, args.f));
const items = JSON.parse(itemFile);

items.forEach((item, idx) => {
  queue.addRequest(item.base_path, function (jsonData) {
    if ('taxons' in jsonData.links) {
      jsonData.links.taxons.forEach(taxon => {
        if (!('taxons' in item)) {
          item.taxons = [];
        }
        item.taxons.push(taxon.base_path);
      });
    }
  });
});

queue.on('done', function () {
  fs.writeFileSync(path.resolve(__dirname, args.f), JSON.stringify(items, undefined, 2))
});
queue.start();
