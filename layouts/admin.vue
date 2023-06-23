<template>
  <div class="admin-layout">
    <client-only>
      <div class="container">
        <admin-sidebar />

        <main class="main">
          <h1 class="page-title">
            {{ pageTitle }}
          </h1>

          <nuxt />
        </main>
      </div>
    </client-only>
  </div>
</template>

<script>
import AdminSidebar from '@/components/admin/layouts/Sidebar';

export default {
  name: 'AdminLayout',
  middleware: ['auth'],
  components: {
    AdminSidebar
  },
  data () {
    return {
      pageTitle: 'Dashboard',
      date: this.$moment().format('YYYY-MM-DD')
    };
  },
  methods: {
    changeDate (e) {
      console.log(this.date);
    }
  }
};
</script>
