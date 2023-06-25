<template>
  <div class="recent-orders card">
    <div class="card__header">
      <h2>Recent Orders</h2>
    </div>
    <div class="recent-orders__table card__body no-transform">
      <table class="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Date</th>
            <th class="text-right">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>01</td>
            <td>John Doe</td>
            <td>iPhone 12</td>
            <td>1</td>
            <td>100 tr</td>
            <td>{{ '2021-01-01' | formatDate }}</td>
            <td class="text-right">
              <span
                class="badge"
                :class="i % 2 === 0 ? 'badge--success' : 'badge--error'"
              >
                {{ i % 2 === 0 ? 'Completed' : 'Pending' }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card__footer">
      <nuxt-link to="">
        View All
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardRecentOrders'
};
</script>
