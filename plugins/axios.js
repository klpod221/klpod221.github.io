export default function ({
  $axios,
  $cookiz,
  $config,
  app,
  redirect,
  error,
  store
}) {
  if (!$config.apiEndpoint) {
    throw new Error('Please config api endpoint in .env file.');
  }
  $axios.setBaseURL($config.apiEndpoint);
  $axios.onRequest((config) => {
    // Ignore handle error on response by flag
    const configData = config.data || {};
    const { clientOptions } = configData;
    if (clientOptions) {
      config.headers.common['Client-Error-Handler'] =
        clientOptions.errorHandler;
      if (typeof clientOptions === 'object') {
        delete configData.clientOptions;
      }
    }

    // get access token from store or cookie and set to header
    const accessToken = store.state.accessToken || $cookiz.get('accessToken');

    if (accessToken) {
      config.headers.common.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  });

  $axios.onResponseError((err) => {
    const response = app.$lodash.get(err, 'response');

    if (response) {
      // const message = response.data.message || response.statusText;
      const statusCode = response.status;

      if (statusCode === 401) {
        redirect('/login');
      }
    }
  });

  $axios.onError((error) => {
    const response = app.$lodash.get(error, 'response');
    let message = error.message;

    if (response) {
      message = response.data.message || response.statusText;
      const statusCode = response.status;

      if (statusCode === 401) {
        redirect('/login');
      }
    }

    error.message = message;

    return Promise.reject(error);
  });
}
