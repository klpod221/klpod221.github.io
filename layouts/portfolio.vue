<template>
  <div class="portfolio-layout">
    <client-only>
      <portfolio-header />

      <main class="main">
        <nuxt />
      </main>

      <portfolio-footer />
    </client-only>
  </div>
</template>

<script>
import PortfolioHeader from '~/components/portfolio/layouts/header.vue';
import PortfolioFooter from '~/components/portfolio/layouts/footer.vue';

export default {
  components: {
    PortfolioHeader,
    PortfolioFooter
  }
};
</script>
