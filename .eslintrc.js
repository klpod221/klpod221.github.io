module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  plugins: ['node'],
  // add your custom rules here
  rules: {
    semi: ['error', 'always'],
    'vue/max-attributes-per-line': 'off',
    'no-console': 'off'
  }
};
