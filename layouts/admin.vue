<template>
  <div class="admin-layout" :class="isMenuOpen ? 'menu-open' : 'menu-close'">
    <client-only>
      <admin-header />
      <admin-sidebar />

      <nuxt />
    </client-only>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AdminHeader from '@/components/admin/layouts/Header';
import AdminSidebar from '@/components/admin/layouts/Sidebar';

export default {
  name: 'AdminLayout',
  middleware: ['auth'],
  components: {
    AdminHeader,
    AdminSidebar
  },
  computed: {
    ...mapState(['isMenuOpen'])
  }
};
</script>
