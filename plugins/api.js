import Vue from 'vue';

import auth from '~/services/auth';
import contact from '~/services/contact';
import common from '~/services/common';

export default function ({ $axios }, inject) {
  const api = {
    auth: auth({ $axios }),
    contact: contact({ $axios }),
    common: common({ $axios })
  };

  inject('api', api);
  const trickForDev = false;
  if (trickForDev) {
    Vue.prototype.$api = api;
  }
}
