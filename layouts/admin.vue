<template>
  <div class="admin-layout">
    <client-only>
      <admin-header />
      <admin-sidebar />

      <div class="page-content">
        <nuxt />
      </div>
    </client-only>
  </div>
</template>

<script>
import AdminHeader from '@/components/admin/layouts/Header';
import AdminSidebar from '@/components/admin/layouts/Sidebar';

export default {
  name: 'AdminLayout',
  // middleware: ['auth'],
  components: {
    AdminHeader,
    AdminSidebar
  }
};
</script>
