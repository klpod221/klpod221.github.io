export default ({ $axios }) => ({
  async login (params) {
    return await $axios.$post('auth/login', params);
  },
  async getProfile () {
    return await $axios.$get('auth/profile');
  },
  async logout () {
    return await $axios.$post('auth/logout');
  }
});
