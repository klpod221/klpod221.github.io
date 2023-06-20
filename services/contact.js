export default ({ $axios }) => ({
  async send (params) {
    return await $axios.$post('/contact', params);
  }
});
