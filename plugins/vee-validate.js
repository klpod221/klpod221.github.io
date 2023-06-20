import Vue from 'vue';
import {
  ValidationProvider,
  ValidationObserver,
  configure,
  extend
} from 'vee-validate';
import {
  required,
  min,
  max,
  email,
  numeric,
  confirmed
} from 'vee-validate/dist/rules';

Vue.component('validation-observer', ValidationObserver);
Vue.component('validation-provider', ValidationProvider);

// If any option you want to change common
configure({
  bails: false,
  slim: true
});

// Continue to add the necessary rule
extend('min', {
  ...min,
  message: 'The {_field_} field must be at least {length} characters'
});

extend('max', {
  ...max,
  message: 'The {_field_} field must be at most {length} characters'
});

extend('required', {
  ...required,
  message: 'The {_field_} field is required'
});

extend('email', {
  ...email,
  message: 'The {_field_} field must be a valid email'
});

extend('numeric', {
  ...numeric,
  message: 'The {_field_} field must be a number'
});

extend('confirmed', {
  ...confirmed,
  message: 'The {_field_} field confirmation does not match'
});
