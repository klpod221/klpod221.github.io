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
        <div class="hamburger" @click="handleHamburgerClick">
          <div class="hamburger__line" />
        </div>
      </div>

      <div class="mb-menu-wrapper">
        <div class="mb-menu">
          <div v-for="(item, index) in menu" :key="index" class="mb-menu__item">
            <a :href="item.link" @click="handleMenuClick">
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
import $ from 'jquery';

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
  },
  mounted () {
    // active link when scroll
    const sections = $('section');
    const navLinks = $('.mb-menu__item');

    $(window).on('scroll', function () {
      const currentPos = $(this).scrollTop();

      sections.each(function () {
        const top = $(this).offset().top - 100;
        const bottom = top + $(this).outerHeight();

        if (currentPos >= top && currentPos <= bottom) {
          const sectionId = $(this).attr('id');

          // if not found link, don't do anything
          if (!$(`.mb-menu__item a[href="#${sectionId}"]`).length) {
            return;
          }

          // remove active class from all links
          navLinks.removeClass('active');
          $(`.mb-menu__item a[href="#${sectionId}"]`)
            .parent()
            .addClass('active');
        }
      });
    });

    $(window).on('resize', function () {
      if ($(window).width() > 768) {
        $('.hamburger').removeClass('active');
        $('.mb-menu-wrapper').removeClass('active');

        if ($('.mb-menu-wrapper').hasClass('active')) {
          $('.mb-menu-wrapper').slideDown(200);
          return;
        }
        $('.mb-menu-wrapper').slideUp(200);
      }
    });
  },
  methods: {
    toggleMenu () {
      if ($('.mb-menu-wrapper').hasClass('active')) {
        $('.mb-menu-wrapper').slideDown(200);
        return;
      }
      $('.mb-menu-wrapper').slideUp(200);
    },
    handleHamburgerClick () {
      $('.hamburger').toggleClass('active');
      $('.mb-menu-wrapper').toggleClass('active');
      this.toggleMenu();
    },
    handleMenuClick () {
      $('.hamburger').removeClass('active');
      $('.mb-menu-wrapper').removeClass('active');
      this.toggleMenu();
    }
  }
};
</script>
