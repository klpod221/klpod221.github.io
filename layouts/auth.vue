<template>
  <div class="auth-layout">
    <client-only>
      <main class="main">
        <nuxt />
      </main>

      <p class="auth-copy">
        &#169; 2023 klpod221. All right reserved
      </p>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
  middleware: ['guest']
};
</script>
