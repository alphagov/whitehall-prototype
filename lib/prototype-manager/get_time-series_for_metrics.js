const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const jsonFile = fs.readFileSync(path.resolve(__dirname, './data/content_data_2017_05_29-2018_05_29_top_1000.json'), { 'encoding': 'utf8' });
const items = JSON.parse(jsonFile);
const args = require('minimist')(process.argv.slice(2));

const metrics = [
	"pageviews",
	"unique_pageviews",
	"feedex_comments",
	"number_of_pdfs",
	"number_of_word_files",
	"readability_score",
	"contractions_count",
	"equality_count",
	"indefinite_article_count",
	"passive_count",
	"profanities_count",
	"redundant_acronyms_count",
	"repeated_words_count",
	"simplify_count",
	"spell_count",
	"string_length",
	"sentence_count",
	"word_count",
	"is_this_useful_no",
	"is_this_useful_yes"
];

// metrics on all the content items from the dump, organised into total and time-series
const data = {};

let itemIdx = 0;
let metricIdx = 0;
let totalDone = false;
let timeSeriesDone = false;
let tempIdx = 0;

function makeResponseHandler (requestType, metric, content_id) {
	return function (jsonData) {
		let url;

		jsonData = jsonData[metric];

    console.log('jsonData:');
    console.log(jsonData);

		if (!(content_id in data)) {
			data[content_id] = {};
		}

    if (!(metric in data[content_id])) {
      data[content_id][metric] = {};
    }

    console.log(`requestType: ${requestType}`);

		if (requestType === 'aggregation') {
			data[content_id][metric].aggregation = jsonData;
			totalDone = true;
			requestType = 'time-series';
		}
		else {
			data[content_id][metric].timeSeries = jsonData;
			timeSeriesDone = true;
			requestType = 'aggregation';
		}

		if (totalDone && timeSeriesDone) {
      console.log('both types done');
			metricIdx++;
			totalDone = false;
			timeSeriesDone = false;
    }

    // no more metrics to record for this content item
    if (metricIdx === metrics.length) {
      metricIdx = 0;
      itemIdx++;
      tempIdx++;
    }

    if (itemIdx < items.length) {
      makeRequest(requestType);
    }
    else {
      fs.writeFileSync(path.resolve(__dirname, './data/content_item_data_2017_05_29-2018_05_29.json'), JSON.stringify(data, undefined, 2), { 'encoding': 'utf8' });
    }
	};
};

function makeErrorHandler (content_id) {
	return function (err) {
		throw new Error(`Request for ${content_id} failed with: ${err.message}`);
	};
};

function makeRequest (requestType) {
  console.log(`itemIdx: ${itemIdx}`);
  console.log(`metricIdx: ${metricIdx}`);

  let contentId = items[itemIdx][0];
  let metric = metrics[metricIdx];
	let responseHandler = makeResponseHandler(requestType, metric, contentId);
	let errorHandler = makeErrorHandler(contentId);

  if (requestType === 'aggregation') {
    url = `http://content-performance-manager.dev.gov.uk/api/v1/metrics/${metric}/${contentId}?from=2017-06-25&to=2018-05-29`;
  }
  else {
    url = `http://content-performance-manager.dev.gov.uk/api/v1/metrics/${metric}/${contentId}/time-series?from=2017-06-25&to=2018-05-29`;
  }

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

makeRequest('total');
