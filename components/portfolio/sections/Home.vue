<template>
  <section id="home" class="home section">
    <div class="home__container container grid">
      <div class="home__content grid">
        <div class="home__social">
          <a
            href="https://facebook.com/klpod221"
            class="home__social-icon"
            target="_blank"
            title="Contact me via Facebook"
          >
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
          <a
            href="https://linkedin.com/in/klpod221"
            class="home__social-icon"
            target="_blank"
            title="Contact me via Linkedin"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
          <a
            href="https://github.com/klpod221"
            class="home__social-icon"
            target="_blank"
            title="Contact me via Github"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </div>

        <div class="home__img">
          <svg
            class="home__blob"
            viewBox="0 0 200 187"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <mask id="mask0" mask-type="alpha">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                fill="#89b4fa"
              />
              <image
                class="home__blob-img"
                x="0"
                y="-70"
                xlink:href="~/assets/images/avatar.jpeg"
              />
            </g>
          </svg>
        </div>

        <div class="home__data">
          <h1 class="home__title">
            Hi, I'am klpod221
          </h1>
          <h3 class="home__subtitle">
            Full-Stack web developer
          </h3>
          <p class="home__description">
            Middle level experience in web development with both front-end and
            back-end, have worked with many technologies and frameworks.
          </p>
          <a href="#contact" class="btn btn--flex">
            Contact Me
            <font-awesome-icon class="btn__icon" :icon="['fa', 'paper-plane']" />
          </a>
        </div>
      </div>

      <div class="home__scroll">
        <a href="#about" class="home__scroll-btn btn--flex">
          <font-awesome-icon class="btn__icon home__scroll-mouse" :icon="['fa', 'computer-mouse']" />
          <span class="home__scroll-name">Scroll Down</span>
          <font-awesome-icon class="btn__icon home__scroll-arrow" :icon="['fa', 'arrow-down']" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortfolioHomeSection'
};
</script>
