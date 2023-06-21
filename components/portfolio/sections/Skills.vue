<template>
  <section id="skills" class="skills section">
    <h2 class="section__title">
      Skills
    </h2>
    <span class="section__subtitle">My technical level</span>

    <div class="skills__container container grid">
      <div
        v-for="(skill, index) in skillsList"
        :key="index"
        class="skills__content"
      >
        <div class="skills__header">
          <font-awesome-icon class="skills__icon" :icon="skill.icon" />

          <div>
            <h1 class="skills__title">
              {{ skill.title }}
            </h1>
            <span class="skills__subtitle"> {{ skill.subtitle }} </span>
          </div>

          <font-awesome-icon
            class="skills__arrow"
            :icon="['fas', 'chevron-down']"
          />
        </div>

        <div class="skills__list grid">
          <div v-for="(item, i) in skill.skills" :key="i" class="skills__data">
            <div class="skills__titles">
              <h3 class="skills__name">
                {{ item.name }}
              </h3>
              <span class="skills__number"> {{ item.year }}/{{ experience }} Years  </span>
            </div>
            <div class="skills__bar">
              <span :style="{ 'width': (item.year / experience * 100) + '%' }" class="skills__percentage skills__html" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'PortfolioSkillsSection',
  data () {
    return {
      experience: 0,
      skillsList: [
        {
          icon: ['fas', 'code'],
          title: 'Frontend Development',
          subtitle: 'More than 2 year',
          skills: [
            {
              name: 'HTML/CSS',
              year: 2
            },
            {
              name: 'JavaScript',
              year: 2
            },
            {
              name: 'Vue.js/Nuxt.js',
              year: 1
            },
            {
              name: 'React.js/Next.js',
              year: 0.5
            },
            {
              name: 'Angular',
              year: 0.5
            }
          ]
        },
        {
          icon: ['fas', 'gears'],
          title: 'Backend Development',
          subtitle: 'More than 2 year',
          skills: [
            {
              name: 'PHP/Laravel',
              year: 2
            },
            {
              name: 'Node.js/Express.js',
              year: 1
            },
            {
              name: 'Spring Boot',
              year: 1
            },
            {
              name: 'Django',
              year: 0.5
            },
            {
              name: 'Flask',
              year: 0.5
            }
          ]
        },
        {
          icon: ['fas', 'database'],
          title: 'Database',
          subtitle: 'More than 2 year',
          skills: [
            {
              name: 'MySQL/MariaDB',
              year: 2
            },
            {
              name: 'MongoDB',
              year: 0.5
            },
            {
              name: 'PostgreSQL',
              year: 2
            },
            {
              name: 'Firebase',
              year: 0.5
            }
          ]
        },
        {
          icon: ['fas', 'server'],
          title: 'System',
          subtitle: 'More than 2 year',
          skills: [
            {
              name: 'Linux',
              year: 2
            },
            {
              name: 'Docker',
              year: 1
            },
            {
              name: 'Kubernetes',
              year: 0.5
            },
            {
              name: 'AWS',
              year: 0.5
            }
          ]
        }
      ]
    };
  },
  mounted () {
    this.calculateExperience();

    const skillsHeader = $('.skills__header');

    skillsHeader.on('click', function () {
      $(this).parent().toggleClass('active');

      if ($(this).parent().hasClass('active')) {
        $(this)
          .parent()
          .find('.skills__list')
          .slideDown(200, function () {
            $(this).css('display', 'grid');
          });
        return;
      }

      $(this).parent().find('.skills__list').slideUp(200);
    });
  },
  methods: {
    calculateExperience () {
      const currentYear = new Date().getFullYear();
      const startYear = 2021;

      this.experience = currentYear - startYear;
    }
  }
};
</script>
