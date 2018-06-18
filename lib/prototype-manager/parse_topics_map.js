const fs = require('fs');
const path = require('path');

const csv = require('fast-csv');
const args = require('minimist')(process.argv.slice(2));


const topic = args.t;
const stream = fs.createReadStream(path.resolve(__dirname, 'data/taxonomy_topics_by_page.csv'));
const results = {};

let done = 0;
let count = 0;
let maxCount = 100000000;

if (args.c) {
  maxCount = parseInt(args.c, 10);
}

const csvStream = csv()
  .on('data', function(data){
    const isComment = data[0][0] === '#';

    if (!isComment) {
      if (count < maxCount) {
        const basePath = data[0];
        const topicLevels = ['Main topic', 'All topics', 'Theme'];
        const topics = data.slice(1, 4);
        const pageViews = data[4];

        if (topic) {
          const idxOfTopic = topics.indexOf(topic);

          if (idxOfTopic > -1) {
            results[basePath] = topicLevels[idxOfTopic];
            count++;
          }
        }
        else {
          results[basePath] = '';
        }
      }
    }
  })
  .on('end', function(){
    if ('s' in args) {
      console.log(`${Object.keys(results).length} records found`);
    }
    else {
      process.stdout.write(JSON.stringify(results, undefined, 2));
    }
  });

stream.pipe(csvStream);
