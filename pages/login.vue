<template>
  <div class="login-page">
    <div class="login-page__background" />

    <validation-observer v-slot="{ handleSubmit }" ref="observer">
      <form class="login-form" @submit.prevent="handleSubmit(login)">
        <h1 class="login-form__title">
          klpod221
        </h1>
        <div class="login-form__content">
          <validation-provider v-slot="{ errors }" rules="required|email">
            <div
              class="login-form__field"
              :class="errors[0] ? 'has-error' : ''"
            >
              <label for="email" class="login-form__label">Email</label>
              <input
                v-model.trim="email"
                type="email"
                name="email"
                class="login-form__input"
                placeholder=""
              >
              <div class="error-message">
                {{ errors[0] }}
              </div>
            </div>
          </validation-provider>
          <validation-provider v-slot="{ errors }" rules="required">
            <div
              class="login-form__field"
              :class="errors[0] ? 'has-error' : ''"
            >
              <label for="password" class="login-form__label">Password</label>
              <div class="error-message">
                {{ errors[0] }}
              </div>
              <input
                v-model.trim="password"
                type="password"
                name="password"
                class="login-form__input"
                placeholder=""
              >
            </div>
          </validation-provider>
          <div class="login-form__footer">
            <nuxt-link :to="{ name: 'index', hash: '#contact' }">
              Contact me
            </nuxt-link>
            if you don't have an account!
          </div>
          <div class="login-form__field action">
            <button type="submit" class="btn btn--primary login-form__button">
              Login
              <font-awesome-icon :icon="['fas', 'paper-plane']" />
            </button>
          </div>
        </div>
      </form>
    </validation-observer>

    <div class="sponsor">
      Random photo from <a href="https://unsplash.com/" target="_blank">Unsplash</a>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data () {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login () {
      try {
        this.$helper.loading.show();

        const formData = {
          email: this.email,
          password: this.password
        };

        const data = await this.$api.auth.login(formData);

        if (!data) {
          this.$toast.error('Login failed');
          return;
        }

        this.$store.commit('setUserInfo', data.user);

        // get access token
        const accessToken = data.accessToken;

        // set access token to cookie
        this.$cookiz.set('accessToken', accessToken, {
          path: '/',
          maxAge: 60 * 60 * 24, // 1 day
          sameSite: 'strict'
        });

        // get user info
        const { user: userInfo } = await this.$api.auth.getProfile();

        // set user info to store
        this.$store.commit('setUserInfo', userInfo);

        this.$toast.success('Login success');

        this.$router.push({ name: 'admin' });
      } catch (err) {
        const { message } = this.$helper.parseError(err);
        this.$toast.error(message);
      } finally {
        this.$helper.loading.hide();
      }
    }
  }
};
</script>
