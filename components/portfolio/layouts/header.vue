<template>
  <header class="header">
    <div class="header__container">
      <a href="/">klpod221</a>

      <div class="d-flex align-center">
        <ul class="menu pc align-center justify-between">
          <li v-for="(item, index) in menu" :key="index" class="menu__item">
            <a :href="item.link">{{ item.name }}</a>
          </li>
        </ul>
        <div class="github">
          <a
            href="https://github.com/klpod221"
            target="_blank"
            title="Get source code of this project"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </div>
        <div class="hamburger">
          <div class="hamburger__line" />
        </div>
      </div>

      <div class="mb-menu-wrapper">
        <div class="mb-menu">
          <div v-for="(item, index) in menu" :key="index" class="mb-menu__item">
            <a :href="item.link">
              <div class="mb-menu__item-icon">
                <font-awesome-icon :icon="item.icon" />
              </div>
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'PortfolioHeader',
  data () {
    return {
      menu: [
        {
          name: 'Home',
          link: '#home',
          icon: ['fas', 'house']
        },
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
