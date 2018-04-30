const fetch = require('node-fetch');


// Class to wrap calls to Content Performance Manager's API
class API {
  constructor () {
    // get INTEGRATION_API_TOKEN environment variable
    if (!(INTEGRATION_API_TOKEN in process.env)) {
      throw new ReferenceError('INTEGRATION_API_TOKEN is not set');
    }
    this.API_KEY = process.env.INTEGRATION_API_TOKEN;
    this.BASE_URL = 'https://content-performance-manager.publishing.service.gov.uk/api/';
    this.BASE_FETCH_OPTIONS = {
      headers: {
        'Authorization': `Bearer ${this.API_KEY}`,
        'Content-Type': 'application/json'
      }
    };

    this.GOVUK_URL_REGEXP = new RegExp('^[http:\/\/|https:\/\/]*www\.gov\.uk\/([^\/]+)$');
  }

  _request (endpoint, callback, options) {
    let fetch_options = this.BASE_FETCH_OPTIONS;

    if (options !== undefined) {
      fetch_options = Object.assign(fetch_options, options);
    }
    fetch(endpoint, fetch_options)
      .then((res) => { callback(null, res) })
      .catch((err) => { callback(err) });
  }

  metricsFor (govuk_url, callback) {
    if (govuk_url !== undefined) {
      const isValidURL = this.GOVUK_URL_REGEXP.test(govuk_url);

      if (!isValidURL) {
        throw new SyntaxError(`${govuk_url} is not a valid GOV.UK URL`);
      }

      const content_id = this.GOVUK_URL_REGEXP.exec(govuk_url)[1];

      this._request(`metrics/${content_id}`, callback);
    }
  }

}

module.exports = API;
