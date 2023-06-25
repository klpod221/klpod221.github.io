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

    <div class="recent-updates card">
      <div class="card__header">
        <h2 class="recent-updates__title">
          Recent Updates
        </h2>
      </div>

      <div class="recent-updates__list card__body">
        <div v-for="i in 3" :key="i" class="recent-updates__item">
          <div class="profile-photo">
            <img src="~/assets/images/avatar.jpeg" alt="Avatar">
          </div>
          <div class="recent-updates__message">
            <p><b>klpod221</b> has added a new product</p>
            <small class="text-muted">2 hours ago</small>
          </div>
        </div>
      </div>
    </div>

    <div class="sale-analytics card">
      <div class="card__header">
        <h2>Sale Analytics</h2>
      </div>

      <div v-for="i in 3" :key="i" class="sale-analytics__item card__body">
        <div class="sale-analytics__item__icon">
          <font-awesome-icon :icon="['fas', 'chart-line']" />
        </div>
        <div class="sale-analytics__item__right">
          <div class="sale-analytics__item__info">
            <h3>New Shopping</h3>
            <small class="text-muted">Last month</small>
          </div>
          <h5 class="success">
            +25%
          </h5>
          <h3>849</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminRightSidebar'
};
</script>
