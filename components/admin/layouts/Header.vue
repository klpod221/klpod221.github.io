<template>
  <header class="admin-header">
    <h1 class="page-title">
      {{ pageTitle }}
    </h1>

    <div class="header-right">
      <button class="header-right__menu-btn">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>
      <!-- <div class="header-right__theme-toggler">
        <font-awesome-icon :icon="['fas', 'sun']" />
        <font-awesome-icon :icon="['fas', 'moon']" class="active" />
      </div> -->
      <div class="header-right__profile">
        <div class="header-right__info">
          <p>Hey, <b>klpod221</b></p>
          <small class="text-muted">admin</small>
        </div>
        <div class="profile-photo">
          <img src="~/assets/images/avatar.jpeg" alt="Avatar">
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AdminHeader',
  data () {
    return {
      pageTitle: 'Dashboard Admin'
    };
  }
};
</script>
