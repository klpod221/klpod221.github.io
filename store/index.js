export const state = () => ({
  userInfo: {},
  accessToken: null,
  isMenuOpen: true
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
  },
  isMenuOpen (state) {
    return state.isMenuOpen;
  }
};

export const mutations = {
  setUserInfo (state, user) {
    state.userInfo = user;
  },
  setAccessToken (state, token) {
    state.accessToken = token;
  },
  toggleMenu (state) {
    state.isMenuOpen = !state.isMenuOpen;
  },
  setMenuOpen (state, isOpen) {
    state.isMenuOpen = isOpen;
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

      const isMenuOpen = localStorage.getItem('isMenuOpen');
      commit('setMenuOpen', isMenuOpen === 'true');
    } catch (e) {}
  }
};
