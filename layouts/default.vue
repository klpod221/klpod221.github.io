<template>
  <div class="default-layout">
    <client-only>
      <header-layout />

      <main class="main">
        <nuxt />
      </main>

      <footer-layout />

      <scroll-top />
    </client-only>
  </div>
</template>

<script>
import HeaderLayout from '~/components/layouts/Header.vue';
import FooterLayout from '~/components/layouts/Footer.vue';

export default {
  components: {
    HeaderLayout,
    FooterLayout
  }
};
</script>
