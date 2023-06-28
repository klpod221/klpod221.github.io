<template>
  <aside class="aside">
    <div class="top">
      <nuxt-link to="/admin" class="top__logo">
        <img src="~/assets/images/logo.png" alt="Logo">
        <h2>klpod221</h2>
      </nuxt-link>

      <div class="top__menu-toggle" @click="menuToggle">
        <font-awesome-icon :icon="['fas', 'xmark']" />
      </div>
    </div>

    <div class="admin-sidebar">
      <nuxt-link class="admin-sidebar__link active" to="">
        <font-awesome-icon :icon="['fas', 'border-all']" />
        <h3>Dashboard</h3>
      </nuxt-link>
      <nuxt-link class="admin-sidebar__link" to="">
        <font-awesome-icon :icon="['fas', 'user-group']" />
        <h3>Customers</h3>
        <span class="message-count">10</span>
      </nuxt-link>
      <nuxt-link class="admin-sidebar__link" to="">
        <font-awesome-icon :icon="['fas', 'cart-shopping']" />
        <h3>Order</h3>
      </nuxt-link>
      <nuxt-link class="admin-sidebar__link" to="">
        <font-awesome-icon :icon="['fas', 'chart-line']" />
        <h3>Analytics</h3>
      </nuxt-link>
      <nuxt-link class="admin-sidebar__link" to="">
        <font-awesome-icon :icon="['fas', 'gear']" />
        <h3>Setting</h3>
      </nuxt-link>
      <nuxt-link class="admin-sidebar__link" to="" @click.native="logout">
        <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
        <h3>Logout</h3>
      </nuxt-link>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'AdminLeftSidebar',
  methods: {
    menuToggle () {
      this.$store.commit('toggleMenu');
      localStorage.setItem('klpod221-isMenuOpen', this.isMenuOpen);
    },
    async logout () {
      try {
        this.$helper.loading.show();

        await this.$api.auth.logout();

        // clear cookies
        this.$cookiz.remove('accessToken');

        // clear store
        this.$store.commit('setUserInfo', null);

        // redirect to login page
        this.$router.push({ name: 'login' });
      } catch (error) {
        this.$toast.error(error.message);
      } finally {
        this.$helper.loading.hide();
      }
    }
  }
};
</script>
