<template>
  <section id="about" class="about section">
    <h2 class="section__title">
      About Me
    </h2>
    <span class="section__subtitle">My introduction</span>

    <div class="about__container container grid">
      <img src="~/assets/images/about.jpeg" alt="klpod221" class="about__img">

      <div class="about__data">
        <p class="about__description">
          Full-Stack web developer, with extensive knowledge and years of
          experience, working in web technologies, delivering quality works.
        </p>

        <div class="about__info">
          <div>
            <span class="about__info-title">{{ experience | integerNumber }}+</span>
            <span class="about__info-name">Years<br>experience</span>
          </div>
          <div>
            <span class="about__info-title">{{ projects | integerNumber }}+</span>
            <span class="about__info-name">Completed<br>projects</span>
          </div>
          <div>
            <span class="about__info-title">{{ companies | integerNumber }}+</span>
            <span class="about__info-name">Companies<br>worked</span>
          </div>
        </div>

        <div class="about__buttons">
          <a href="#contact" class="btn btn--flex">
            Contact Me <font-awesome-icon class="btn__icon" :icon="['fa', 'paper-plane']" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortfolioAboutSection',
  data () {
    return {
      experience: 0,
      projects: 20,
      companies: 2
    };
  },
  mounted () {
    this.calculateExperience();
  },
  methods: {
    calculateExperience () {
      const startYear = 2021;
      const currentYear = new Date().getFullYear();
      this.experience = currentYear - startYear;
    }
  }
};
</script>
