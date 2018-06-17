const fs = require('fs');
const path = require('path');

const csv = require('fast-csv');
const args = require('minimist')(process.argv.slice(2));


/* Parses the root taxonomy CSV from the Content Tagger app */
if (!('f' in args)) {
  console.log(`Please enter a source CSV to parse`);
  process.exit();
}

const topic = args.f;
const stream = fs.createReadStream(path.resolve(__dirname, args.f));
const taxonomy = [];
let parentTaxon = null;

const csvStream = csv()
  .on('data', function(data){
    let level;
    let parentLevel;
    let taxon;
    
    data.forEach((entry, idx) => {
      if (entry !== '') {
        level = idx;
        if (idx === 0) { // level 0 is unique
          taxon = {
            'name': entry,
            'parent': null
          };
        }
        else {
          parentLevel = idx - 1;
          lastIdxAtParentLevel = taxonomy[parentLevel].length - 1;
          taxon = {
            'name': entry,
            'parent': taxonomy[parentLevel][lastIdxAtParentLevel].name
          }
        }
        if (!(level in taxonomy)) {
          taxonomy[level] = [taxon];
        }
        else {
          taxonomy[level].push(taxon);
        }
      }
    });
  })
  .on('end', function(){
    process.stdout.write(JSON.stringify(taxonomy, undefined, 2));
  });

stream.pipe(csvStream);
