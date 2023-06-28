<template>
  <header class="admin-header">
    <div class="header-left">
      <div class="header-left__menu-btn" @click="menuToggle()">
        <font-awesome-icon
          class="header-left__icon icon-close"
          :icon="['fas', 'ellipsis-vertical']"
        />
        <font-awesome-icon
          class="header-left__icon icon-open"
          :icon="['fas', 'list-ul']"
        />
      </div>
      <h1 class="page-title">
        {{ pageTitle }}
      </h1>
    </div>

    <div class="header-right">
      <div class="header-right__profile">
        <div class="header-right__info">
          <p>
            {{ generateGreeting() }}, <b>{{ userInfo.username }}</b>
          </p>
          <small class="text-muted">{{ userInfo.role }}</small>
        </div>
        <div class="profile-photo">
          <img src="~/assets/images/avatar.jpeg" alt="Avatar">
        </div>
      </div>

      <div class="dropdown-menu">
        <nuxt-link to="" class="dropdown-menu__item">
          <font-awesome-icon :icon="['fas', 'user']" />
          <span>Profile</span>
        </nuxt-link>
        <nuxt-link to="" class="dropdown-menu__item">
          <font-awesome-icon :icon="['fas', 'gear']" />
          <span>Setting</span>
        </nuxt-link>
        <nuxt-link to="" class="dropdown-menu__item" @click.native="logout">
          <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
          <span>Logout</span>
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
import $ from 'jquery';
import { mapState } from 'vuex';

export default {
  name: 'AdminHeader',
  data () {
    return {
      pageTitle: 'Dashboard'
    };
  },
  computed: {
    ...mapState(['userInfo', 'isMenuOpen'])
  },
  mounted () {
    const closeMenu = () => {
      this.$store.commit('setMenuOpen', false);
      localStorage.setItem('klpod221-isMenuOpen', this.isMenuOpen);
    };

    if ($(window).width() < 1200 && $(window).width() > 576) {
      closeMenu();

      $(document).on('click', (e) => {
        if (!$(e.target).closest('.admin-header').length) {
          closeMenu();
        }
      });

      $(document).on('mouseover', (e) => {
        if (!$(e.target).closest('.admin-sidebar').length) {
          closeMenu();
        }
      });
    }

    if ($(window).width() < 576) {
      if (this.isMenuOpen) {
        $(document).on('click', (e) => {
          if (!$(e.target).closest('.admin-header').length) {
            closeMenu();
          }
        });
      }
    }
  },
  methods: {
    menuToggle () {
      this.$store.commit('toggleMenu');
      localStorage.setItem('klpod221-isMenuOpen', this.isMenuOpen);
    },
    generateGreeting () {
      const hour = new Date().getHours();

      if (hour >= 0 && hour < 12) {
        return 'Good Morning';
      } else if (hour >= 12 && hour < 18) {
        return 'Hello';
      } else {
        return 'Good Evening';
      }
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
