const fs = require('fs');
const path = require('path');

const csv = require('fast-csv');
const args = require('minimist')(process.argv.slice(2));


if (!('t' in args)) {
  console.log(`Please enter a topic to search by`);
  process.exit();
}

const topic = args.t;
const stream = fs.createReadStream(path.resolve(__dirname, 'data/taxonomy_topics_by_page.csv'));
const results = {};

let done = 0;

const csvStream = csv()
  .on('data', function(data){
    const isComment = data[0][0] === '#';

    if (!isComment) {
      const basePath = data[0];
      const topicLevels = ['Main topic', 'All topics', 'Theme'];
      const topics = data.slice(1, 4);
      const pageViews = data[4];
      const idxOfTopic = topics.indexOf(topic);

      if (idxOfTopic > -1) {
        results[basePath] = topicLevels[idxOfTopic];
      }
    }
  })
  .on('end', function(){
    process.stdout.write(JSON.stringify(results, undefined, 2));
  });

stream.pipe(csvStream);
