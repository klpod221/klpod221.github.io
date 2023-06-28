<template>
  <main class="main dashboard-page">
    <h1>
      Dashboard
    </h1>
    <!-- <div class="left">
      <dashboard-insights />

      <dashboard-recent-orders />
    </div>

    <div class="right">
      <recent-updates />

      <sale-analytics />
    </div> -->
  </main>
</template>

<script>
import { mapState } from 'vuex';
// import DashboardInsights from '@/components/admin/pages/dashboard/Insights';
// import DashboardRecentOrders from '@/components/admin/pages/dashboard/RecentOrders';
// import RecentUpdates from '@/components/admin/pages/dashboard/RecentUpdates';
// import SaleAnalytics from '@/components/admin/pages/dashboard/SaleAnalytics';

export default {
  layout: 'admin',
  name: 'Dashboard',
  // components: {
  //   DashboardInsights,
  //   DashboardRecentOrders,
  //   RecentUpdates,
  //   SaleAnalytics
  // },
  data () {
    return {
      pageTitle: 'Dashboard',
      date: this.$moment().format('YYYY-MM-DD')
    };
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    changeDate () {
      console.log(this.date);
    }
  }
};
</script>
