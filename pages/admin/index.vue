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
      <div class="insight income">
        <div class="insight__icon">
          <font-awesome-icon :icon="['fas', 'chart-simple']" />
        </div>
        <div class="middle">
          <div class="left">
            <h3 class="insight__text">
              Total Income
            </h3>
            <h1 class="insight__count">
              100 tr
            </h1>
            <small class="text-muted">Last Month</small>
          </div>
          <div class="insight__progress">
            <div class="insight__progress-bar">
              <svg>
                <circle cx="50" cy="50" r="48" />
              </svg>
              <div class="insight__progress-number">
                80%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="insight income">
        <div class="insight__icon">
          <font-awesome-icon :icon="['fas', 'chart-simple']" />
        </div>
        <div class="middle">
          <div class="left">
            <h3 class="insight__text">
              Total Income
            </h3>
            <h1 class="insight__count">
              100 tr
            </h1>
            <small class="text-muted">Last Month</small>
          </div>
          <div class="insight__progress">
            <div class="insight__progress-bar">
              <svg>
                <circle cx="50" cy="50" r="48" />
              </svg>
              <div class="insight__progress-number">
                80%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="insight income">
        <div class="insight__icon">
          <font-awesome-icon :icon="['fas', 'chart-simple']" />
        </div>
        <div class="middle">
          <div class="left">
            <h3 class="insight__text">
              Total Income
            </h3>
            <h1 class="insight__count">
              100 tr
            </h1>
            <small class="text-muted">Last Month</small>
          </div>
          <div class="insight__progress">
            <div class="insight__progress-bar">
              <svg>
                <circle cx="50" cy="50" r="48" />
              </svg>
              <div class="insight__progress-number">
                80%
              </div>
            </div>
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
      name: '',
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
