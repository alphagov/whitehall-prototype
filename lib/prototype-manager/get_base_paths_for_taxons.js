const fs = require('fs');
const args = require('minimist')(process.argv.slice(2));

const Queue = require('./govuk_api_queue');
const taxonomy = require('./taxonomy');


if (!('f' in args)) {
  console.log('Please enter a file for the results');
  process.exit();
}

const queue = new Queue({
  'log': true,
  'interval': 120
});
const levels = taxonomy.all.slice(0);
let levelIdx = 0;

function getTaxonRef (level, title) {
  const idx = level.findIndex(taxon => taxon.name === title);
  return level[idx];
};

function addBasePathsFromChildren (children, levelIdx) {
  children.forEach(taxon => {
    const taxonRef = getTaxonRef(levels[levelIdx], taxon.title);

    taxonRef.basePath = taxon.base_path;
  });
};

let count = 0;

function processNode (node, levelIdx) {
  let childTaxons;

  if ('level_one_taxons' in node.links) {
    childTaxons = node.links.level_one_taxons;
  }
  if ('child_taxons' in node.links) {
    childTaxons = node.links.child_taxons;
  }

  if (childTaxons) {
    levelIdx = levelIdx + 1;
    addBasePathsFromChildren(childTaxons, levelIdx);
    childTaxons.forEach(taxon => {
      queue.addRequest(taxon.base_path, function (jsonData) {
        processNode(jsonData, levelIdx);
      });
    });

    return true;
  }

  return false;
};

queue.addRequest('/', function (jsonData) {
  processNode(jsonData, levelIdx);
});
queue.onDone = function () {
  fs.writeFileSync(args.f, JSON.stringify(levels, undefined, 2));
};
queue.start();
