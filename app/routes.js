const fs = require('fs')
const path = require('path')
const express = require('express')
const moment = require('moment');

const retext = require('../lib/retext.js')
const marked = require('../lib/marked.js')
const dates = require('../lib/dates.js')
const contentTypes = require('../lib/prototype-manager/content_types.js')
const organisations = require('../lib/prototype-manager/organisations.js')
const taxonomy = require('../lib/prototype-manager/taxonomy.js')
const Manager_api = require('../lib/prototype-manager/api.js')
const Table = require('../lib/prototype-manager/data_tables.js').Table;
const Org = require('../lib/prototype-manager/data_tables.js').Org;
const prerenderRows = require('../lib/prototype-manager/data_tables.js').prerenderRows;
const metricDescriptions = require('../lib/prototype-manager/data_tables.js').metricDescriptions;
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.get('/dashboard', function(req, res) {
  res.render('dashboard');
});

router.get('/intent', function(req, res) {
  res.render('intent');
});

router.get('/:state/submit-for-review', function(req, res) {
  var locals = {};
  validateEdition(req, locals);

  if (locals.success) {
    req.session.data[locals.state + '-state'] = 'Submitted';
    req.session.data[locals.state + '-show-errors'] = false;
    req.session.data[locals.state + '-show-success'] = true;
  } else {
    req.session.data[locals.state + '-show-errors'] = true;
    req.session.data[locals.state + '-show-success'] = false;
  }

  res.redirect('/' + locals.state + '/document-tasks');
});

// Add your routes here - above the module.exports line

router.get('/:state/attachment/:attachmentId', function(req, res){
  res.render('attachment', req.params)
});

router.get('/patterns/content-checker', function(req, res) {
  var text = req.session.data['text'];
  var locals = {};
  retext.checkText(text, locals);
  res.render('patterns/content-checker', locals)
})

router.get('/:state/preview', function(req, res) {
  var state = req.params.state;
  var text = req.session.data[state + '-body'] || '';
  var locals = { state: state };
  marked.convertMarkdownToHTML(text, locals);
  res.render('preview', locals)
})

router.get('/publishing-guidance', function(req, res) {
  var text = "Content published in Whitehall publisher on www.gov.uk should be either:\n\n* guidance to help users complete a transaction with government\n* information to help users understand what government is doing\n\nIt should be information only government can provide.\n\n### Check existing content\nNew content should not significantly repeat existing content. \n\n[Search GOV.UK](https://www.gov.uk/search) to check if the user need is being met elsewhere.\n\n### Ask GDS\nIf you’re unsure [ask the GOV.UK team at the Government Digital Service](https://support.integration.publishing.service.gov.uk/).\n\n## What to publish elsewhere\n\n### Campaigns\n\nCampaign websites are designed to:\n\n* change behaviour by encouraging people to lead healthy, safer lives\n* ensure operational effectiveness of Government by informing people about public services\n* enhance the reputation of the UK, promote interests internationally, and respond in times of crisis\n* explain government policies and programmes to clarify legal or statutory requirements\n\nCampaign websites can be set up using either:\n\n* the government Campaign Platform\n* or a bespoke campaigns microsite\n\n### Intranets\nInformation exclusively for civil servants with no public interest should be published on internal intranets.\n\n### Parliament.uk \nThe [Parliament website](https://www.parliament.uk/) covers the work of parliament to scrutinise proposed legislation in the House of Commons, the House of Lords, and committees. \n\n### Hansard\n[Hansard](https://hansard.parliament.uk/) is the record of everything said or written during proceedings of the House of Commons and the House of Lords.\n\n### Legislation.gov.uk\nBills which have been approved by the Commons, the Lords, and The Queen become law and are recorded on [Legislation.gov.uk](http://www.legislation.gov.uk/).\n\n### Devolved government\nIn Scotland, Wales and Northern Ireland, devolved administrations are responsible for many domestic policy issues, and their Parliaments/Assemblies have law-making powers for those areas.\n\n[Read more about how government is run](https://www.gov.uk/government/how-government-works#how-government-is-run)\n\n### Other organisations\nInformation or services that can be better supplied by organisations outside government should be linked to and not reproduced. For example, Shelter or the NHS.\n\n### Ask GDS\nIf you’re unsure [ask the GOV.UK team at the Government Digital Service](https://support.integration.publishing.service.gov.uk/).\n";
  var locals = {};
  marked.convertMarkdownToHTML(text, locals);
  res.render('publishing-guidance', locals);
})

router.get('/content-check', function(req, res){
  checkContent(req, res, req.query['text']);
});

router.post('/content-check', function(req, res){
  checkContent(req, res, req.body['text']);
});

function checkContent(req, res, text) {
  var obj = {};

  retext.checkText(text, obj);
  res.header('Content-type','application/json');
  res.header('Charset','utf8');
  res.send(JSON.stringify(obj));
}

router.get('/live-preview', function(req, res){
  livePreview(req, res, req.query['text']);
});

router.post('/live-preview', function(req, res){
  livePreview(req, res, req.body['text']);
});

function livePreview(req, res, text) {
  var obj = {};
  text = text || "";
  marked.convertMarkdownToHTML(text, obj);
  res.header('Content-type','application/json');
  res.header('Charset','utf8');
  res.send(JSON.stringify(obj));
}

function inferrDocumentType(req) {
  var inference;
  var state = req.params.state;
  var inferenceChoice = req.session.data[state + '-correct-document-type'];

  inference = 'News article';

  req.session.data['inferred-document-type'] = inference;

  if (inferenceChoice) {
    // inferred format is correct so set format to that
    if (inferenceChoice === 'yes') {
      req.session.data[req.params.state + '-document-type'] = inference;
    }
    else { // inferred format is incorrect, user has set the right one
      req.session.data[state + '-correct-document-type'] = 'yes';
    }
  }
}

function formatScheduling(req) {
  var units = ['time', 'day', 'month', 'year'];
  var str = [];

  units.forEach((unit) => {
    var key = req.params.state + '-schedule-' + unit;

    if ((key in req.session.data) && (req.session.data[key] !== '')) {
      str.push(req.session.data[key]);
    }
  });

  if (str.length) {
    req.session.data[req.params.state + '-scheduling'] = str.join(' ');
  }
}

router.get('/:state(new|draft|submitted|published)/:page', function(req, res) {
  var locals = {}

  if (req.params.page === 'document-tasks') {
    inferrDocumentType(req);
    formatScheduling(req);
  }

  validateEdition(req, locals);
  console.log(req.session.data);
  res.render(req.params.page, locals)
});

function validateEdition(req, locals) {
  var state = req.params.state;
  var data = req.session.data;
  var title_summary_body_errors = [];
  var about_content_errors = [];
  var content_settings_errors = [];
  var errors;

  data[locals.state + '-show-success'] = false;
  locals.state = state;

  if (!data[state + '-summary']) {
    title_summary_body_errors.push({
      title: 'Enter a summary',
      page: 'title-summary-body',
      field: 'summary'
    })
  }

  if (!data[state + '-body']) {
    title_summary_body_errors.push({
      title: 'Enter body copy',
      page: 'title-summary-body',
      field: 'body'
    })
  }

  if (!data[state + '-tag-count'] || data[state + '-tag-count'] < 1) {
    about_content_errors.push({
      title: 'Enter at least one tag',
      page: 'about-content',
      field: 'tag-on-govuk'
    })
  }

  if (!data[state + '-lead-organisation']) {
    about_content_errors.push({
      title: 'Enter a lead organisation',
      page: 'about-content',
      field: 'lead-organisation'
    })
  }

  if (!data[state + '-document-type']) {
    about_content_errors.push({
      title: 'Chose a format for this content',
      page: 'about-content',
      field: 'document-type'
    })
  }

  if (!data[state + '-published-before']) {
    content_settings_errors.push({
      title: 'Indicate if this content is new or has been published elsewhere',
      page: 'content-settings',
      field: 'published-before'
    })
  }


  errors = [].concat(title_summary_body_errors, about_content_errors, content_settings_errors);

  if (errors.length > 0) {
    locals.errors = errors;
    locals.title_summary_body_errors = title_summary_body_errors;
    locals.about_content_errors = about_content_errors;
    locals.content_settings_errors = content_settings_errors;
    locals.field_errors = errors.reduce(function(map, obj) {
      map[obj.field] = obj.title;
      return map;
    }, {});
  } else {
    locals.success = true;
  }
}

// Routes for the Manager
router.get('/manage', function(req, res) {
  const api = new Manager_api();
  const base_path = req.query.base_path || 'government/news/resistant-gonorrhoea-case-reminds-importance-of-safe-sex';

  function setContentTo (url) {
    return () => {
      return api.setContent(url);
    };
  };

  function getAggregations (options) {
    return () => {
      return api.getAggregations(options.metric, options.from, options.to);
    };
  };

  function getTimeSeries (options) {
    return () => {
      return api.getTimeSeries(options.metric, options.from, options.to);
    };
  };

  api.getMetrics()
    .then(setContentTo(`www.gov.uk/${base_path}`))
    .then(getAggregations({
      'metric': 'readability_score',
      'from': '2018-01-01',
      'to': '2018-05-08'
     }))
    .then((data) => {
      res.render('manage/index', {
        'slug': base_path,
        'data': data
      });
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/manage/content-estate/', function(req, res) {
  let fileName = 'lib/prototype-manager/data/round3/collection_from_2018-06-18.json';

  if (req.query['organisation']) {
    fileName = 'lib/prototype-manager/data/round3/collection_from_2018-06-18_office-for-product-safety-and-standards_with_topics.json';
  }

  if (req.query['title']) {
    let lowerTitle = req.query['title'].toLowerCase();
    let titleWords = lowerTitle.split(/\s+/);
    if (lowerTitle.match(/consumer\s{1}law\s{1}advice\s{1}for\s{1}providers\s{1}and\s{1}students/) !== null) {
      fileName = 'lib/prototype-manager/data/round3/collection_from_2018-06-18_office-for-product-safety-and-standards_consumer-advice-law.json';
    }
    else if (titleWords.includes('cma') || titleWords.includes('airbnb') || titleWords.includes('review')) {
      fileName = 'lib/prototype-manager/data/round3/collection_from_2018-06-18_office-for-product-safety-and-standards_cma-welcomes-airbnb.json';
    }
  }

  const contentItemsEstateFile = fs.readFileSync(path.resolve(process.cwd(), fileName));
  const contentItems = JSON.parse(contentItemsEstateFile);

  const table = new Table(contentItems, {
    'sorting': {
      'sortBy': req.query['sort-by'],
      'sortDirection': req.query['sort-direction']
    },
    'filtering': {
      'startDate': req.query['start-date'],
      'endDate': req.query['end-date'],
      'organisation': req.query['organisation'],
      'contentType': req.query['content-type'],
      'title': req.query['title'],
      'topic': req.query['topic'],
      'editor': req.query['editor'],
      'status': req.query['status'],
      'collectionDateRange': req.query['collection-date-range'],
      'columnGrouping': req.query['column-grouping'],
      'publishedDateRange': req.query['published-date-range'],
      'lastUpdatedDateRange': req.query['last-updated-date-range']
    },
  });

  organisations.putOrgAtTop('Office for Product Safety and Standards');
  
  res.render('manage/content-estate', {
    'contentItems': table,
    'organisations': organisations,
    'contentTypeBreadcrumbs': contentTypes.asBreadcrumbs(),
    'topicBreadcrumbs': taxonomy.branchesAsBreadcrumbs()
  });
});

router.get('/manage/:org/content-item/:content_id', function(req, res) {
  const org = new Org(req.params.org);
  const contentId = req.params.content_id;

  const contentItemsFile = fs.readFileSync(path.resolve(__dirname, `../lib/prototype-manager/data/${req.params.org}_raw_data.json`));
  const contentItemsData = JSON.parse(contentItemsFile);

  let contentItemData = contentItemsData.filter(item => item['content_id'] === contentId)[0];

  contentItemData = prerenderRows([contentItemData])[0];
  const notMetrics = ['title', 'content_id', 'base_path', 'document_type', 'content_purpose', 'primary_organisation_title', 'first_published_at', 'public_updated_at', 'timeline_of_unique_pageviews'];
  const metrics = Object.keys(contentItemData).filter(key => !notMetrics.includes(key));

  res.render('manage/content-item', {
    'heading': contentItemData['title'],
    'meta': {
      'format': contentItemData['document-type'],
      'firstPublished': contentItemData['first_published_at'],
      'lastPublished': contentItemData['public_updated_at']
    },
    'metrics': metrics,
    'metricDescriptions': metricDescriptions,
    'contentItemData': contentItemData,
    'startDate': req.query['start-date'] || moment().subtract(1, 'month').format('YYYY-MM-DD'),
    'endDate': req.query['end-date'] || moment().format('YYYY-MM-DD'),
    'startDateYearAgo': moment(req.query['start-date'], 'YYYY-MM-DD').subtract(1, 'year').format('YYYY-MM-DD') || moment().subtract(2, 'year').format('YYYY-MM-DD'),
    'endDateYearAgo': moment(req.query['end-date'], 'YYYY-MM-DD').subtract(1, 'year').format('YYYY-MM-DD') || moment().subtract(1, 'year').format('YYYY-MM-DD'),
    'org': org
  });
});

router.get('/manage/:org/organisation-performance/', function(req, res) {
  const org = new Org(req.params.org);
  const contentId = '3bb72f74-cd92-4930-923a-aa70f35a42d9';
  const period = ('period' in req.query) ? req.query.period : 'year';

  const contentItemsEstateFile = fs.readFileSync(path.resolve(__dirname, '../lib/prototype-manager/data/content_data_2017_05_29-2018_05_29_top_1000.json'));
  const contentItemsEstate = JSON.parse(contentItemsEstateFile);

  const itemData = contentItemsEstate.filter(item => { return item[0] === contentId })[0];

  const contentItemsFile = fs.readFileSync(path.resolve(__dirname, '../lib/prototype-manager/data/content_item_data_2017_05_29-2018_05_29.json'));
  const contentItemData = JSON.parse(contentItemsFile)[contentId];
  const metrics = Object.keys(contentItemData);

  res.render('manage/organisation-performance', {
    'heading': itemData[1],
    'meta': {
      'format': itemData[2],
      'firstPublished': itemData[3],
      'lastPublished': itemData[4]
    },
    'metrics': metrics,
    'contentItemData': contentItemData,
    'metricDescriptions': metricDescriptions,
    'startDate': req.query['start-date'] || moment().subtract(1, 'month').format('YYYY-MM-DD'),
    'endDate': req.query['end-date'] || moment().format('YYYY-MM-DD'),
    'startDateYearAgo': moment(req.query['start-date'], 'YYYY-MM-DD').subtract(1, 'year').format('YYYY-MM-DD') || moment().subtract(2, 'year').format('YYYY-MM-DD'),
    'endDateYearAgo': moment(req.query['end-date'], 'YYYY-MM-DD').subtract(1, 'year').format('YYYY-MM-DD') || moment().subtract(1, 'year').format('YYYY-MM-DD'),
    'org': org
  });
});

module.exports = router
