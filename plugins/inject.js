import Vue from 'vue';
import commonHelper from '../helpers/common';
import loadingHelper from '~/helpers/loading';
import lodash from '~/plugins/lodash';

export default function ({ app }, inject) {
  const helper = {
    ...commonHelper,
    loading: loadingHelper
  };

  inject('helper', helper);
  inject('lodash', lodash);

  const trickForDev = false;
  if (trickForDev) {
    Vue.prototype.$helper = helper;
    Vue.prototype.$lodash = lodash;
  }
}
