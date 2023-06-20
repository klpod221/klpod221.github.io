import Vue from 'vue';

import auth from '~/services/auth';

export default function ({ $axios }, inject) {
  const api = {
    auth: auth({ $axios })
  };

  inject('api', api);
  const trickForDev = false;
  if (trickForDev) {
    Vue.prototype.$api = api;
  }
}
