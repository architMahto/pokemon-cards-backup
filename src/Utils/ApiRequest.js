import queryString from 'query-string';

import { createApiRequestOptions } from './ApiRequestOptions';

class ApiRequest {
  constructor(options = createApiRequestOptions()) {
    this.options = options;
    this.reqQueryString = '';
    this.baseUrl = '';
  }

  buildRequestUrl(relativeUrl) {
    return this.reqQueryString !== '' ?
      this.baseUrl + relativeUrl + '?' + this.reqQueryString :
      this.baseUrl + relativeUrl;
  }

  setBaseUrl(baseUrl) {
    this.baseUrl = baseUrl;
    return this;
  }

  withBody(body) {
    this.options['body'] = JSON.stringify(body);
    return this;
  }

  withReqQueryString(reqQueryString) {
    this.reqQueryString = Object.keys(reqQueryString).length === 0
    ? ''
    : queryString.stringify(reqQueryString);

    return this;
  }

  get(relativeUrl) {
    return fetch(this.buildRequestUrl(relativeUrl), {
      ...this.options,
      method: 'GET'
    });
  }

  post(relativeUrl) {
    return fetch(this.buildRequestUrl(relativeUrl), {
      ...this.options,
      method: 'POST'
    });
  }

  delete(relativeUrl) {
    return fetch(this.buildRequestUrl(relativeUrl), {
      ...this.options,
      method: 'DELETE'
    });
  }
}

export default ApiRequest;
