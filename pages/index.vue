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
import Home from '~/components/portfolio/sections/Home';
import About from '~/components/portfolio/sections/About';
import Skills from '~/components/portfolio/sections/Skills';
import Qualification from '~/components/portfolio/sections/Qualification';
import Services from '~/components/portfolio/sections/Services';
import Projects from '~/components/portfolio/sections/Projects';
import NewProject from '~/components/portfolio/sections/NewProject';
import Contact from '~/components/portfolio/sections/Contact';

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
