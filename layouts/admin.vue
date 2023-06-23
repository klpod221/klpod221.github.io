<template>
  <div class="admin-layout">
    <client-only>
      <div class="container">
        <admin-sidebar />

        <nuxt />
      </div>
    </client-only>
  </div>
</template>

<script>
import AdminSidebar from '@/components/admin/layouts/Sidebar';

export default {
  name: 'AdminLayout',
  // middleware: ['auth'],
  components: {
    AdminSidebar
  }
};
</script>
