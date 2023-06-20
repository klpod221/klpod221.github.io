<template>
  <a id="scroll-top" href="#" class="scroll-top" :class="isShowScrollTop ? 'active' : ''">
    <font-awesome-icon icon="angle-up" class="scroll-top__icon" />
  </a>
</template>

<script>
export default {
  name: 'ScrollTop',
  data () {
    return {
      scrollPosition: 0,
      isShowScrollTop: false
    };
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      this.scrollPosition = window.scrollY;
      this.isShowScrollTop = this.scrollPosition > 100;
    },
    scrollToTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>
