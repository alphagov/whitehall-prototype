const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const jsonFile = fs.readFileSync(path.resolve(__dirname, './data/orgs_for_content_item_data_2017_05_29-2018_05_29.json'), { 'encoding': 'utf8' });
const args = require('minimist')(process.argv.slice(2));

const idToOrgMap = JSON.parse(jsonFile);
const pathsForOrg = [];

if (!('o' in args)) {
  console.log('Please provide an org');
}
else {

  const orgAcronym = args.o.toUpperCase();
  let org;

  if (orgAcronym === 'MOJ') {
    org = "Ministry of Justice";
  }

  if (orgAcronym === 'DWP') {
    org = "Department for Work and Pensions";
  }

  if (orgAcronym === 'HMRC') {
    org = "HM Revenue & Customs";
  }

  if (orgAcronym === 'DVLA') {
    org = "Driver and Vehicle Standards Agency";
  }

  for (let basePath in idToOrgMap) {
    if (idToOrgMap[basePath] === org) {
      pathsForOrg.push(basePath);
    }
  }

  process.stdout.write(JSON.stringify(pathsForOrg, undefined, 2));

}
