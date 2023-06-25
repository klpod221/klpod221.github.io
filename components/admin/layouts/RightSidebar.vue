<template>
  <div class="right-sidebar">
    <div class="top">
      <button class="top__menu-btn">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>
      <!-- <div class="top__theme-toggler">
        <font-awesome-icon :icon="['fas', 'sun']" />
        <font-awesome-icon :icon="['fas', 'moon']" class="active" />
      </div> -->
      <div class="top__profile">
        <div class="top__info">
          <p>Hey, <b>klpod221</b></p>
          <small class="text-muted">admin</small>
        </div>
        <div class="profile-photo">
          <img src="~/assets/images/avatar.jpeg" alt="Avatar">
        </div>
      </div>
    </div>

    <recent-updates />

    <sale-analytics />
  </div>
</template>

<script>
import RecentUpdates from '~/components/admin/RecentUpdates.vue';
import SaleAnalytics from '~/components/admin/SaleAnalytics.vue';

export default {
  name: 'AdminRightSidebar',
  components: {
    RecentUpdates,
    SaleAnalytics
  }
};
</script>
