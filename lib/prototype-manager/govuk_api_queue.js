const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');


class RequestQueue {
  constructor (opts) {
    this._queue = [];
    this._opts = opts || {
      'log': false
    };
  }

  get interval () {
    return this._opts.interval || 105;
  }

  get isDone () {
    return this._queue.length === 0;
  }

  log (message) {
    if (this._opts.log) {
      console.log(message);
    }
  }

  makeResponseHandler (basePath, callback) {
    const self = this;

    return function (jsonData) {
      // remove item just requested
      self._queue.pop();

      callback(jsonData);
    }
  };

  makeErrorHandler (basePath) {
    return function (err) {
      throw new Error(`Request for ${basePath} failed with: ${err.message}`);
    };
  };

  addRequest (basePath, callback) {
    const self = this;

    function request () {
      const url = `https://www.gov.uk/api/content${basePath}`;
      let responseHandler = self.makeResponseHandler(basePath, callback);
      let errorHandler = self.makeErrorHandler(basePath);

      self.log(`Calling: ${url}`);

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
        .then(() => {
          if (!self.isDone) {
            self.next();
          }
          else {
            self.onDone();
          }
        })
        .catch(errorHandler);
    };

    this._queue.push(request);
  }

  start () {
    this._queue[0]();
  }

  next () {
    const queue = this._queue;
    const lastItem = queue.length - 1;

    function request () {
      queue[lastItem]();
    };

    setTimeout(request, this.interval);
  } 

  // stub function if onDone not set
  onDone () {}

  on (evt, callback) {
    if (evt === 'done') {
      this.onDone = callback;
    }
  }
};

module.exports = RequestQueue;
