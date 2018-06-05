const fs = require('fs');
const path = require('path');

const moment = require('moment');

const orgs = [
  'dwp',
  'gds',
  'hmcts',
  'moj'
];
const result = [];
let count = 0;

orgs.forEach(org => {
  const orgDataStr = fs.readFileSync(path.resolve(__dirname, `${org}_raw_data.json`));
  const orgData = JSON.parse(orgDataStr);

  orgData.forEach(row => result.push(row));
});

result.sort((a, b) => {
  a = moment(a['collection_date']);
  b = moment(b['collection_date']);

  if (a.isBefore(b)) {
    return -1;
  }
  if (a.isAfter(b)) {
    return 1;
  }
  return 0;
});

process.stdout.write(JSON.stringify(result, undefined, 2));
