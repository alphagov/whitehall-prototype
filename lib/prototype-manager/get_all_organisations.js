const https = require('https');

https.request(
	{
		'host': 'www.gov.uk',
		'path': '/api/content/government/organisations'
	},
	function (response) {
		let str = '';

		response.on('data', function (chunk) {
			str += chunk;
		});

		response.on('end', function () {
			const data = JSON.parse(str).details;
      const orgs = [];

      for (let key in data) {
        data[key].forEach(entry => {
          orgs.push({ 'title': entry.title, 'slug': entry.slug, 'acronym': entry.acronym });
        });
      }

      process.stdout.write(JSON.stringify(orgs, undefined, 2));
		});
	}
).end();
