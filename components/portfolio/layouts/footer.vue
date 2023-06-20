<template>
  <footer class="footer">
    <div class="footer__bg">
      <div class="footer__container container grid">
        <div>
          <h1 class="footer__title">
            klpod221
          </h1>
          <span class="footer__subtitle">Full-Stack Web Developer</span>
        </div>

        <ul class="footer__links">
          <li v-for="(item, index) in menu" :key="index">
            <a :href="item.link" class="footer__link">{{ item.name }}</a>
          </li>
        </ul>

        <div class="footer__socials">
          <a
            href="https://facebook.com/klpod221"
            target="_blank"
            class="footer__social"
          >
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
          <a
            href="https://linkedin.com/in/klpod221"
            target="_blank"
            class="footer__social"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
          <a
            href="https://github.com/klpod221"
            target="_blank"
            class="footer__social"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </div>
      </div>

      <p class="footer__copy">
        &#169; 2023 klpod221. All right reserved
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'PortfolioHeader',
  data () {
    return {
      menu: [
        {
          name: 'About',
          link: '#about',
          icon: ['fas', 'user']
        },
        {
          name: 'Skills',
          link: '#skills',
          icon: ['fas', 'screwdriver-wrench']
        },
        {
          name: 'Services',
          link: '#services',
          icon: ['fas', 'gear']
        },
        {
          name: 'Projects',
          link: '#projects',
          icon: ['fas', 'diagram-project']
        },
        {
          name: 'Contact',
          link: '#contact',
          icon: ['fas', 'envelope']
        }
      ]
    };
  }
};
</script>
