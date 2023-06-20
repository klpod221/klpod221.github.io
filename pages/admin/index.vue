<template>
  <div>
    <h1>Admin page</h1>
    <p>My name is {{ name }}</p>
    <nuxt-link :to="{ name: 'index' }">
      Home page
    </nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  middleware: ['auth'],
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
