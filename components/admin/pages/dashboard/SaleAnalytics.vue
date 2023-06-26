<template>
  <div class="sale-analytics card">
    <div class="card__header">
      <h2>Sale Analytics</h2>
    </div>

    <div v-for="i in 3" :key="i" class="sale-analytics__item card__body">
      <div class="sale-analytics__item__icon">
        <font-awesome-icon :icon="['fas', 'chart-line']" />
      </div>
      <div class="sale-analytics__item__right">
        <div class="sale-analytics__item__info">
          <h3>New Shopping</h3>
          <small class="text-muted">Last month</small>
        </div>
        <h5 class="success">
          +25%
        </h5>
        <h3>849</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SaleAnalytics'
};
</script>
