import ApiRequest from '../Utils/ApiRequest';

class ApiService {
  static get({relativeUrl, queryStringObj = {}}) {
    return ApiService(new ApiRequest()
      .withReqQueryString(queryStringObj)
      .get(relativeUrl)
    );
  }

  static post({relativeUrl, body = {}}) {
    return ApiService(new ApiRequest()
      .withBody(body)
      .post(relativeUrl)
    );
  }

  static delete({relativeUrl, body = {}}) {
    return ApiService(new ApiRequest()
      .withBody(body)
      .delete(relativeUrl)
    );
  }

  static responseHandler(apiRequest) {
    return apiRequest
      .then(response => {
        if (response.ok) {
          if (response.status === 204) return {};

          return response.json();
        } else {
          throw Response
        }
      })
      .then(data => data)
      .catch(ApiService.errorHandler)
  }

  static async errorHandler(errorResponse) {
    const errorResponseText = await errorResponse.text();

    return Promise.reject(errorResponseText)
  }
}

export default ApiService;
