const fetch = require('node-fetch');


// Class to wrap calls to Content Performance Manager's API
class API {
  constructor () {
    // get INTEGRATION_API_TOKEN environment variable
    if (process.env.INTEGRATION_API_TOKEN === undefined) {
      throw new ReferenceError('INTEGRATION_API_TOKEN is not set');
    }

    // global variables for class
    this.DW_API_KEY = process.env.INTEGRATION_API_TOKEN;
    this.DW_API_BASE_URL = 'https://content-performance-manager.integration.publishing.service.gov.uk/api/v1/';
    this.GOVUK_API_BASE_URL = 'https://www.gov.uk/api/content/';
    this.BASE_FETCH_OPTIONS = {
      headers: {
        'Authorization': `Bearer ${this.DW_API_KEY}`,
        'Content-Type': 'application/json'
      }
    };
    this.GOVUK_URL_REGEXP = new RegExp('^[http:\/\/|https:\/\/]*www\.gov\.uk\/([^$]+)$');
    this._SLUG_FORMATS = {
      'aggregations': (metric, content_id) => `metrics/${metric}/${content_id}`,
      'timeSeries': (metric, content_id) => `metrics/${metric}/${content_id}/time-series`
    }

    this.content_id_cache = {};
  }

  _request (url, callback, options) {
    const self = this;
    let fetch_options = this.BASE_FETCH_OPTIONS;

    return new Promise((resolve, reject) => {
      if (options !== undefined) {
        fetch_options = Object.assign(fetch_options, options);
      }
      fetch(url, fetch_options)
        .then((res) => {
          if (res.status !== 200) {
            throw new Error(`Request to ${url} returned ${res.status}`);
          }
          resolve(res.json());
        })
        .catch(reject);
    });
  }

  _error (err) {
    console.log(err);
  };

  _dataWarehouseAPIURL (slug) {
    return `${this.DW_API_BASE_URL}${slug}`;
  }

  _govukAPIURL (slug) {
    return `${this.GOVUK_API_BASE_URL}${slug}`;
  }

  getContentId (content_slug) {
    const self = this;

    return new Promise ((resolve, reject) => {

      if (content_slug in this.content_id_cache) {
        callback(this.content_id_cache[content_slug]);
      }

      const url = this._govukAPIURL(content_slug);

      this._request(url)
        .then((data) => {
          resolve(data.content_id);
        })
        .catch(reject);
    });
  }

  getMetrics () {
    const self = this;

    return new Promise(function (resolve, reject) {
      const url = self._dataWarehouseAPIURL('metrics');

      self._metrics = {};
      self._raw_metrics = [];

      self._request(url)
        .then((data) => {
          self._raw_metrics = data;
          data.forEach((metric) => {
            self._metrics[metric.metric_id] = metric.description;
          });
          resolve();
        })
        .catch(reject);
    });
  }

  setContent (govuk_url) {
    const self = this;

    function getContentSlug (url) {
      return new Promise((resolve, reject) => {
        const isValidURL = self.GOVUK_URL_REGEXP.test(url);

        if (!isValidURL) {
          throw new SyntaxError(`${url} is not a valid GOV.UK URL`);
        }

        resolve(self.GOVUK_URL_REGEXP.exec(url)[1]);
      });
    };

    return new Promise((resolve, reject) => {

      getContentSlug(govuk_url)
        .then((content_slug) => {

          self.getContentId(content_slug)
            .then((content_id) => {
              
              // cache content id
              self._current_content_id = content_id;
              resolve();

            })
            .catch(reject);

        })
        .catch(reject);
    });
  }

  getQuery (queryType, metric, from, to) {
    const self = this;

    return new Promise((resolve, reject) => {
      ['metric', 'from', 'to'].forEach(arg => {
        if (arg === undefined) {
          throw new ReferenceError(`'${arg}' parameter needed for metric requests.`);
        }
      });

      if (!(metric in this._metrics)) {
        throw new ReferenceError(`${metric} not a valid metric`);
      }

      const slug = self._SLUG_FORMATS[queryType](metric, self._current_content_id);
      let url = self._dataWarehouseAPIURL(slug);

      url = `${url}?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;

      self._request(url)
        .then(resolve)
        .catch(reject);
    });
  }

  getAggregations (metric, from, to) {
    return this.getQuery('aggregations', metric, from, to);
  }

  getTimeSeries (metric, from, to) {
    return this.getQuery('timeSeries', metric, from, to);
  }

}

module.exports = API;
