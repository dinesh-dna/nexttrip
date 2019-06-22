export const REQUEST_SUCCEEDED = 'requests/requestSucceeded';
export const REQUEST_FAILED = 'requests/requestFailed';

export function requestSucceeded(requestType, resourceType, response, details) {
    return {
      type: REQUEST_SUCCEEDED,
      requestType,
      resourceType,
      response,
      details
    };
  }

  export function requestFailed(requestType, resourceType, response, details) {
    return {
      type: REQUEST_FAILED,
      requestType,
      resourceType,
      response,
      details
    };
  }