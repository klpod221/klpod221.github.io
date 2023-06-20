<template>
  <section id="services" class="services section">
    <h2 class="section__title">
      Services
    </h2>
    <span class="section__subtitle">What I offer</span>

    <div class="services__container container grid">
      <!-- Service 1 -->
      <div class="services__content">
        <div>
          <font-awesome-icon class="services__icon" :icon="['fas', 'code']" />
          <h3 class="services__title">
            Front-End
            <span class="text-nowrap">Web Develop</span>
          </h3>
        </div>

        <span
          class="btn btn--flex btn--link services__button"
          data-target="frontend"
        >
          View More
          <font-awesome-icon class="btn__icon" :icon="['fas', 'arrow-right']" />
        </span>

        <div class="services__modal" data-modal="frontend">
          <div class="services__modal-content">
            <h4 class="services__modal-title">
              Front-End Web Develop
            </h4>
            <font-awesome-icon
              class="services__modal-close"
              :icon="['fas', 'xmark']"
            />

            <ul class="services__modal-services grid">
              <li class="services__modal-service">
                <font-awesome-icon
                  class="services__modal-icon"
                  :icon="['fas', 'check']"
                />
                <p>Build your website depend on your design.</p>
              </li>
              <li class="services__modal-service">
                <font-awesome-icon
                  class="services__modal-icon"
                  :icon="['fas', 'check']"
                />
                <p>Responsive your website.</p>
              </li>
              <li class="services__modal-service">
                <font-awesome-icon
                  class="services__modal-icon"
                  :icon="['fas', 'check']"
                />
                <p>Rebuild your website to make it more modern.</p>
              </li>
              <li class="services__modal-service">
                <font-awesome-icon
                  class="services__modal-icon"
                  :icon="['fas', 'check']"
                />
                <p>
                  Many framework and tool: Bootstrap, Sass, Webpack, WordPress,
                  React, Vue, etc.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Service 2 -->
      <div class="services__content">
        <div>
          <font-awesome-icon class="services__icon" :icon="['fas', 'gears']" />
          <h3 class="services__title">
            Back-End
            <span class="text-nowrap">Web Develop</span>
          </h3>
        </div>

        <span
          class="btn btn--flex btn--link services__button"
          data-target="backend"
        >
          View More
          <font-awesome-icon class="btn__icon" :icon="['fas', 'arrow-right']" />
        </span>

        <div class="services__modal" data-modal="backend">
          <div class="services__modal-content">
            <h4 class="services__modal-title">
              Back-End Web Develop
            </h4>
            <font-awesome-icon
              class="services__modal-close"
              :icon="['fas', 'xmark']"
            />

            <ul class="services__modal-services grid">
              <li class="services__modal-service">
                <font-awesome-icon
                  class="services__modal-icon"
                  :icon="['fas', 'check']"
                />
                <p>
                  Build your system depend on your design and your requirement.
                </p>
              </li>
              <li class="services__modal-service">
                <font-awesome-icon
                  class="services__modal-icon"
                  :icon="['fas', 'check']"
                />
                <p>Build your system with security and performance.</p>
              </li>
              <li class="services__modal-service">
                <font-awesome-icon
                  class="services__modal-icon"
                  :icon="['fas', 'check']"
                />
                <p>Add more feature to your system.</p>
              </li>
              <li class="services__modal-service">
                <font-awesome-icon
                  class="services__modal-icon"
                  :icon="['fas', 'check']"
                />
                <p>
                  Many framework and tool: Laravel, NodeJS, SpringBoot, MySQL,
                  MongoDB, Redis, etc.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Service 3 -->
      <div class="services__content">
        <div>
          <font-awesome-icon class="services__icon" :icon="['fas', 'server']" />
          <h3 class="services__title">
            Full-Stack
            <span class="text-nowrap">Web Develop</span>
          </h3>
        </div>

        <span
          class="btn btn--flex btn--link services__button"
          data-target="fullstack"
        >
          View More
          <font-awesome-icon class="btn__icon" :icon="['fas', 'arrow-right']" />
        </span>

        <div class="services__modal" data-modal="fullstack">
          <div class="services__modal-content">
            <h4 class="services__modal-title">
              Full-Stack Web Develop
            </h4>
            <font-awesome-icon
              class="services__modal-close"
              :icon="['fas', 'xmark']"
            />

            <ul class="services__modal-services grid">
              <li class="services__modal-service">
                <font-awesome-icon
                  class="services__modal-icon"
                  :icon="['fas', 'check']"
                />
                <p>
                  Build your website and system depend on your design and your
                  requirement.
                </p>
              </li>
              <li class="services__modal-service">
                <font-awesome-icon
                  class="services__modal-icon"
                  :icon="['fas', 'check']"
                />
                <p>
                  Rebuild your website and system to make it more modern,
                  security and performance.
                </p>
              </li>
              <li class="services__modal-service">
                <font-awesome-icon
                  class="services__modal-icon"
                  :icon="['fas', 'check']"
                />
                <p>Add more feature to your website and system.</p>
              </li>
              <li class="services__modal-service">
                <font-awesome-icon
                  class="services__modal-icon"
                  :icon="['fas', 'check']"
                />
                <p>Deploy your website and system to server.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'PortfolioServicesSection',
  mounted () {
    const viewMoreBtn = $('.services__button');
    const modals = $('.services__modal');
    const closeBtn = $('.services__modal-close');

    viewMoreBtn.on('click', function () {
      const modal = $(this).data('target');

      // remove active class from all modals
      modals.removeClass('active');
      $(`.services__modal[data-modal="${modal}"]`).addClass('active');
    });

    closeBtn.on('click', function () {
      // remove active class from all modals
      modals.removeClass('active');
    });
  }
};
</script>
