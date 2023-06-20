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
import PortfolioHeader from '~/components/portfolio/layouts/header.vue';
import PortfolioFooter from '~/components/portfolio/layouts/footer.vue';
import ScrollTop from '~/components/common/ScrollTop.vue';

export default {
  components: {
    PortfolioHeader,
    PortfolioFooter,
    ScrollTop
  },
  mounted () {
    this.sayHello();
  },
  methods: {
    sayHello () {
      console.log("Hi, I'm klpod221! I'm a web developer");
      console.log('You can find me on GitHub:');
      console.log('https://github.com/klpod221');
      console.log(`
      _   _               _ ___ ___ _
      | |_| |_ __  ___  __| |_  )_  ) |
      | / / | '_ \\/ _ \\/ _\` |/ / / /| |
      |_\\_\\_| .__/\\___/\\__,_/___/___|_|
            |_|
      `);
    }
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
