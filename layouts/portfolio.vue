<template>
  <div class="portfolio-layout">
    <client-only>
      <portfolio-header />

      <main class="main">
        <nuxt />
      </main>

      <portfolio-footer />

      <scroll-top />
    </client-only>
  </div>
</template>

<script>
import $ from 'jquery';
import PortfolioHeader from '~/components/portfolio/layouts/Header.vue';
import PortfolioFooter from '~/components/portfolio/layouts/Footer.vue';
import ScrollTop from '~/components/common/ScrollTop.vue';

export default {
  name: 'PortfolioLayout',
  components: {
    PortfolioHeader,
    PortfolioFooter,
    ScrollTop
  },
  mounted () {
    // watch window size change
    $(window).on('resize', function () {
    });
  },
  head () {
    return {
      title: 'klpod221 | Portfolio',
      meta: [
        { hid: 'description', name: 'description', content: 'klpod221 portfolio' }
      ]
    };
  }
};
</script>
