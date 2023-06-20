import Vue from 'vue';

import auth from '~/services/auth';
import contact from '~/services/contact';

export default function ({ $axios }, inject) {
  const api = {
    auth: auth({ $axios }),
    contact: contact({ $axios })
  };

  inject('api', api);
  const trickForDev = false;
  if (trickForDev) {
    Vue.prototype.$api = api;
  }
}
