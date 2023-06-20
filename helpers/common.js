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
