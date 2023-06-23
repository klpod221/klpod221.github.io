<template>
  <div class="dashboard-page">
    <div class="date-input">
      <input
        v-model="date"
        type="date"
        class="date-input__input"
        @change="changeDate"
      >
    </div>

    <div class="insights">
      <div class="income">
        <font-awesome-icon :icon="['fas', 'chart-simple']" />
        <div class="middle">
          <div class="left">
            <h3 class="title">
              Total Income
            </h3>
            <h1 class="value">
              100 đ
            </h1>
          </div>
          <div class="progress">
            <div class="progress__bar">
              <svg>
                <circle cx="70" cy="70" r="66" />
              </svg>
              <div class="number">
                <p>80%</p>
              </div>
            </div>
          </div>
          <div class="text-muted">
            <p>Last Month</p>
          </div>
        </div>
      </div>

      <div class="spent">
        <font-awesome-icon :icon="['fas', 'shopping-cart']" />
        <div class="middle">
          <div class="left">
            <h3 class="title">
              Total spent
            </h3>
            <h1 class="value">
              200 đ
            </h1>
          </div>
          <div class="progress">
            <div class="progress__bar">
              <svg>
                <circle cx="70" cy="70" r="66" />
              </svg>
              <div class="number">
                <p>80%</p>
              </div>
            </div>
          </div>
          <div class="text-muted">
            <p>Last Month</p>
          </div>
        </div>
      </div>

      <div class="customers">
        <font-awesome-icon :icon="['fas', 'user-friends']" />
        <div class="middle">
          <div class="left">
            <h3 class="title">
              Total Customers
            </h3>
            <h1 class="value">
              300 đ
            </h1>
          </div>
          <div class="progress">
            <div class="progress__bar">
              <svg>
                <circle cx="70" cy="70" r="66" />
              </svg>
              <div class="number">
                <p>80%</p>
              </div>
            </div>
          </div>
          <div class="text-muted">
            <p>Last Month</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  layout: 'admin',
  data () {
    return {
      name: ''
    };
  },
  computed: {
    ...mapState(['userInfo'])
  },
  created () {
    this.name = this.userInfo ? this.userInfo.email : '';
  }
};
</script>
