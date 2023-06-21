export default {
  interopDefault (promise) {
    return promise.then(m => m.default || m);
  },

  /**
   * Parse error response from server
   *
   * @param {Object} error
   */
  parseError (error) {
    const response = error.response;

    if (!response) {
      return {
        statusCode: 500,
        message: error.message,
        data: {}
      };
    }

    const data = response.data;
    const statusCode = response.status;
    const message = data.message || response.statusText;

    return {
      statusCode,
      message,
      data
    };
  }
};
