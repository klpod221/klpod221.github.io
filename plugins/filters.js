import Vue from 'vue';

export default ({ $moment }) => {
  Vue.filter('formatDate', (value, format = 'YYYY.MM.DD HH:mm:ss') => {
    if (!value) {
      return '---';
    }
    return $moment(value).format(format);
  });
};
