<template>
  <section id="contact" class="contact section">
    <h2 class="section__title">
      Contact Me
    </h2>
    <span class="section__subtitle">Get in touch</span>

    <div class="contact__container container grid">
      <div>
        <div class="contact__information">
          <font-awesome-icon class="contact__icon" :icon="['fas', 'envelope']" />

          <div>
            <h3 class="contact__title">
              Email
            </h3>
            <span class="contact__subtitle">
              <a href="mailto:klpod221@gmail.com">klpod221@gmail.com</a>
            </span>
          </div>
        </div>

        <div class="contact__information">
          <font-awesome-icon class="contact__icon custom" :icon="['fas', 'map-location-dot']" />

          <div>
            <h3 class="contact__title">
              Location
            </h3>
            <span class="contact__subtitle">Hà Nội, Việt Nam</span>
          </div>
        </div>
      </div>

      <form class="contact__form grid" method="post">
        <div class="contact__inputs grid">
          <div class="contact__content">
            <label for="" class="contact__label">Name</label>
            <input type="text" required name="name" class="contact__input">
          </div>

          <div class="contact__content">
            <label for="" class="contact__label">Email</label>
            <input type="email" required name="email" class="contact__input">
          </div>
        </div>

        <div class="contact__content">
          <label for="" class="contact__label">Subject</label>
          <input type="text" required name="subject" class="contact__input">
        </div>

        <div class="contact__content">
          <label for="" class="contact__label">Message</label>
          <textarea
            name="message"
            required
            cols="0"
            rows="7"
            class="contact__input"
          />
        </div>

        <div>
          <button class="btn btn--flex contact__button">
            Send Message
            <font-awesome-icon class="btn__icon" :icon="['fa', 'paper-plane']" />
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortfolioContactSection'
};
</script>
