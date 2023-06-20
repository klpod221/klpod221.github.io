<template>
  <div>
    <h1>Login page</h1>

    <validation-observer v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(login)">
        <validation-provider v-slot="{ errors }" rules="required|email">
          <input v-model="email" type="text" name="email" placeholder="Email">
          <span>{{ errors[0] }}</span>
        </validation-provider>

        <validation-provider v-slot="{ errors }" rules="required|min:6">
          <input
            v-model="password"
            type="password"
            name="password"
            placeholder="Password"
          >
          <span>{{ errors[0] }}</span>
        </validation-provider>
        <button type="submit">
          Login
        </button>
      </form>
    </validation-observer>
  </div>
</template>

<script>
export default {
  middleware: ['guest'],
  data () {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login (valid) {
      if (!valid) { return; }

      try {
        this.$helper.loading.show();

        const formData = {
          email: this.email,
          password: this.password
        };

        const data = await this.$api.auth.login(formData);

        this.$store.commit('setUserInfo', data.user);

        // get access token
        const accessToken = data.accessToken;

        // set access token to cookie
        this.$cookiz.set('accessToken', accessToken, {
          path: '/',
          maxAge: 60,
          sameSite: 'strict'
        });

        // get user info
        const { user: userInfo } = await this.$api.auth.getProfile();

        // set user info to store
        this.$store.commit('setUserInfo', userInfo);

        this.$toast.success('Login success');

        this.$router.push({ name: 'admin' });
      } catch (err) {
        console.log(err);
        const { message } = this.$helper.parseError(err);
        this.$toast.error(message);
      } finally {
        this.$helper.loading.hide();
      }
    }
  }
};
</script>
