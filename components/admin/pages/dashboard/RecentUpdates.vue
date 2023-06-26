<template>
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
</template>

<script>
export default {
  name: 'RecentUpdates'
};
</script>
