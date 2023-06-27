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
      <!-- <div class="header-right__theme-toggler">
        <font-awesome-icon :icon="['fas', 'sun']" />
        <font-awesome-icon :icon="['fas', 'moon']" class="active" />
      </div> -->
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
      pageTitle: 'Dashboard Admin'
    };
  },
  computed: {
    ...mapState(['userInfo', 'isMenuOpen'])
  },
  mounted () {
    if ($(window).width() < 1200) {
      const closeMenu = () => {
        this.$store.commit('setMenuOpen', false);
        localStorage.setItem('isMenuOpen', this.isMenuOpen);
      };
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
  },
  methods: {
    menuToggle () {
      this.$store.commit('toggleMenu');
      localStorage.setItem('isMenuOpen', this.isMenuOpen);
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
    }
  }
};
</script>
