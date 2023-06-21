<template>
  <section class="newproject section">
    <div class="newproject__bg">
      <div class="newproject__container container grid">
        <div class="newproject__data">
          <h2 class="newproject__title">
            You have a new project?
          </h2>
          <p class="newproject__description">
            Contact me now and we will have a coffee and talk about your
            project.
          </p>
          <a href="#contact" class="btn btn--flex btn--reverse">
            Contact me
            <font-awesome-icon class="btn__icon" :icon="['fa', 'paper-plane']" />
          </a>
        </div>

        <img src="~/assets/images/newproject.png" alt="" class="newproject__img">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortfolioNewProjectSection'
};
</script>
