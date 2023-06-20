<template>
  <div>
    <!-- home section -->
    <home />

    <!-- about section -->
    <about />

    <!-- skills section -->
    <skills />

    <!-- qualification section -->
    <qualification />

    <!-- services section -->
    <services />

    <!-- projects section -->
    <projects />

    <!-- new project section -->
    <new-project />

    <!-- contact section -->
    <contact />
  </div>
</template>

<script>
import Home from '~/components/portfolio/sections/home';
import About from '~/components/portfolio/sections/about';
import Skills from '~/components/portfolio/sections/skills';
import Qualification from '~/components/portfolio/sections/qualification';
import Services from '~/components/portfolio/sections/services';
import Projects from '~/components/portfolio/sections/projects';
import NewProject from '~/components/portfolio/sections/new-project';
import Contact from '~/components/portfolio/sections/contact';

export default {
  layout: 'portfolio',
  components: {
    Home,
    About,
    Skills,
    Qualification,
    Services,
    Projects,
    NewProject,
    Contact
  },
  data () {
    return {
      name: 'klpod221'
    };
  }
};
</script>
