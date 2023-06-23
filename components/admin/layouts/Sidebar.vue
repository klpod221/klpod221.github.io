<template>
  <aside class="aside">
    <div class="top">
      <nuxt-link to="/admin" class="top__logo">
        <img src="~/assets/images/logo.png" alt="Logo">
        <h2>klpod221</h2>
      </nuxt-link>

      <div class="top__close-btn">
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
        <h3>Setting</h3>
      </nuxt-link>
      <nuxt-link class="admin-sidebar__link" to="">
        <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
        <h3>Logout</h3>
      </nuxt-link>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'AdminSidebar'
};
</script>
