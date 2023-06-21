<template>
  <section id="projects" class="projects section">
    <h2 class="section__title">
      My Project
    </h2>
    <span class="section__subtitle">Most recent work</span>

    <div class="projects__container container swiper">
      <div class="swiper-wrapper">
        <!-- Project 1 -->
        <div class="projects__content grid swiper-slide">
          <img
            src="~/assets/images/projects/1.jpg"
            alt=""
            class="projects__img"
          >

          <div class="projects__data">
            <div class="projects__title">
              Modern Website
            </div>
            <p class="projects__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              necessitatibus incidunt ut officiis explicabo inventore.
            </p>
            <a href="#" class="btn btn--flex btn--small projects__button">
              Demo
              <font-awesome-icon
                class="btn__icon"
                :icon="['fa', 'paper-plane']"
              />
            </a>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="projects__content grid swiper-slide">
          <img
            src="~/assets/images/projects/1.jpg"
            alt=""
            class="projects__img"
          >

          <div class="projects__data">
            <div class="projects__title">
              Modern Website
            </div>
            <p class="projects__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              necessitatibus incidunt ut officiis explicabo inventore.
            </p>
            <a href="#" class="btn btn--flex btn--small projects__button">
              Demo
              <font-awesome-icon
                class="btn__icon"
                :icon="['fa', 'paper-plane']"
              />
            </a>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="projects__content grid swiper-slide">
          <img
            src="~/assets/images/projects/1.jpg"
            alt=""
            class="projects__img"
          >

          <div class="projects__data">
            <div class="projects__title">
              Modern Website
            </div>
            <p class="projects__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              necessitatibus incidunt ut officiis explicabo inventore.
            </p>
            <a href="#" class="btn btn--flex btn--small projects__button">
              Demo
              <font-awesome-icon
                class="btn__icon"
                :icon="['fa', 'paper-plane']"
              />
            </a>
          </div>
        </div>
      </div>

      <!-- Add Arrows -->
      <div class="swiper-button-next">
        <font-awesome-icon
          class="swiper-projects-icon"
          :icon="['fa', 'angle-right']"
        />
      </div>
      <div class="swiper-button-prev">
        <font-awesome-icon
          class="swiper-projects-icon"
          :icon="['fa', 'angle-left']"
        />
      </div>

      <!-- Add Pagination -->
      <div class="swiper-pagination" />
    </div>
    <!-- View More -->
    <div class="text-center projects__view-more">
      <a href="/projects" class="btn btn--flex btn--transparent">
        Not enough? View More
      </a>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';

export default {
  name: 'PortfolioProjectsSection',
  mounted () {
    Swiper.use([Navigation, Pagination, Autoplay]);

    const swiper = new Swiper('.projects__container', {
      modules: [Navigation, Pagination, Autoplay],
      cssMode: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      autoplay: {
        delay: 5000
      }
    });

    swiper.init();
  }
};
</script>
