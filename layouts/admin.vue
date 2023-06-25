<template>
  <div class="admin-layout">
    <client-only>
      <div class="container">
        <admin-left-sidebar />

        <nuxt />

        <admin-right-sidebar />
      </div>
    </client-only>
  </div>
</template>

<script>
import AdminLeftSidebar from '@/components/admin/layouts/LeftSidebar';
import AdminRightSidebar from '@/components/admin/layouts/RightSidebar';

export default {
  name: 'AdminLayout',
  middleware: ['auth'],
  components: {
    AdminLeftSidebar,
    AdminRightSidebar
  }
};
</script>
