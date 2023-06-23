export const state = () => ({
  userInfo: {},
  accessToken: null
});

export const getters = {
  isLoggedIn (state) {
    return state.userInfo && state.userInfo.id;
  },
  userInfo (state) {
    return state.userInfo;
  },
  accessToken (state) {
    return state.accessToken;
  }
};

export const mutations = {
  setUserInfo (state, user) {
    state.userInfo = user;
  },
  setAccessToken (state, token) {
    state.accessToken = token;
  }
};

export const actions = {
  async nuxtServerInit ({ commit }) {
    try {
      const accessToken = this.$cookiz.get('accessToken');

      if (accessToken) {
        commit('setAccessToken', accessToken);

        const { user: userInfo } = await this.$api.auth.getProfile();

        if (!userInfo) {
          return;
        }

        commit('setUserInfo', userInfo);
      }
    } catch (e) {}
  }
};
