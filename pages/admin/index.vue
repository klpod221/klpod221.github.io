<template>
  <main class="main dashboard-page">
    <h1 class="page-title">
      {{ pageTitle }}
    </h1>

    <dashboard-insights />

    <dashboard-recent-orders />
  </main>
</template>

<script>
import { mapState } from 'vuex';
import DashboardInsights from '@/components/admin/pages/dashboard/Insights';
import DashboardRecentOrders from '@/components/admin/pages/dashboard/RecentOrders';

export default {
  layout: 'admin',
  name: 'Dashboard',
  components: {
    DashboardInsights,
    DashboardRecentOrders
  },
  data () {
    return {
      pageTitle: 'Dashboard',
      date: this.$moment().format('YYYY-MM-DD')
    };
  },
  computed: {
    ...mapState(['userInfo'])
  },
  created () {
    this.name = this.userInfo ? this.userInfo.email : '';
  },
  methods: {
    changeDate () {
      console.log(this.date);
    }
  }
};
</script>
