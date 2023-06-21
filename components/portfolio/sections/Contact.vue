<template>
  <section id="contact" class="contact section">
    <h2 class="section__title">
      Contact Me
    </h2>
    <span class="section__subtitle">Get in touch</span>

    <div class="contact__container container grid">
      <div>
        <div class="contact__information">
          <font-awesome-icon
            class="contact__icon"
            :icon="['fas', 'envelope']"
          />

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
          <font-awesome-icon
            class="contact__icon custom"
            :icon="['fas', 'map-location-dot']"
          />

          <div>
            <h3 class="contact__title">
              Location
            </h3>
            <span class="contact__subtitle">Hà Nội, Việt Nam</span>
          </div>
        </div>
      </div>

      <validation-observer v-slot="{ valid, handleSubmit }" ref="observer">
        <form
          class="contact__form grid"
          method="post"
          @submit.prevent="handleSubmit(onSubmit(valid))"
        >
          <div class="contact__inputs grid">
            <validation-provider v-slot="{ errors }" rules="required">
              <div
                class="contact__content"
                :class="errors[0] ? 'has-error' : ''"
              >
                <label for="name" class="contact__label">Name</label>
                <input
                  v-model="formData.name"
                  name="name"
                  type="text"
                  class="contact__input"
                >
              </div>
            </validation-provider>

            <validation-provider v-slot="{ errors }" rules="required|email">
              <div
                class="contact__content"
                :class="errors[0] ? 'has-error' : ''"
              >
                <label for="email" class="contact__label">Email</label>
                <input
                  v-model="formData.email"
                  type="email"
                  name="email"
                  class="contact__input"
                >
              </div>
            </validation-provider>
          </div>

          <validation-provider v-slot="{ errors }" rules="required">
            <div class="contact__content" :class="errors[0] ? 'has-error' : ''">
              <label for="subject" class="contact__label">Subject</label>
              <input
                v-model="formData.subject"
                type="text"
                name="subject"
                class="contact__input"
              >
            </div>
          </validation-provider>

          <validation-provider v-slot="{ errors }" rules="required">
            <div class="contact__content" :class="errors[0] ? 'has-error' : ''">
              <label for="message" class="contact__label">Message</label>
              <textarea
                v-model="formData.message"
                name="message"
                class="contact__input"
                cols="0"
                rows="6"
              />
            </div>
          </validation-provider>

          <div>
            <button class="btn btn--flex contact__button">
              Send Message
              <font-awesome-icon
                class="btn__icon"
                :icon="['fa', 'paper-plane']"
              />
            </button>
          </div>
        </form>
      </validation-observer>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortfolioContactSection',
  data () {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  },
  methods: {
    async onSubmit (valid) {
      if (!valid) {
        this.$toast.error('Please check your input!');
        return;
      }

      try {
        this.$helper.loading.show();

        await this.$api.contact.send(this.formData);

        this.$toast.success('Your message has been sent!');

        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };

        this.$refs.observer.reset();
      } catch (error) {
        const { message } = this.$helper.parseError(error);
        this.$toast.error(message);
      } finally {
        this.$helper.loading.hide();
      }
    }
  }
};
</script>
