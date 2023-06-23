import Vue from 'vue';

export default ({ $moment }) => {
  Vue.filter('formatDate', (value, format = 'DD-MM-YYYY') => {
    if (!value) {
      return '---';
    }
    return $moment(value).format(format);
  });
  Vue.filter('integerNumber', (value) => {
    if (!value) {
      return 0;
    }

    const number = parseInt(value);

    if (isNaN(number)) {
      return 0;
    }

    return number < 10
      ? `0${number}`
      : number.toLocaleString('en-US', {
        useGrouping: false
      });
  });
};
