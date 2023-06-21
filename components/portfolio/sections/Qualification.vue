<template>
  <section id="qualification" class="qualification section">
    <h2 class="section__title">
      Qualification
    </h2>
    <span class="section__subtitle">My personal journey</span>

    <div class="qualification__container container">
      <div class="qualification__tabs">
        <div
          class="qualification__button button--flex active"
          data-target="education"
        >
          <font-awesome-icon
            class="qualification__icon"
            :icon="['fas', 'school']"
          />
          Education
        </div>

        <div class="qualification__button button--flex" data-target="work">
          <font-awesome-icon
            class="qualification__icon"
            :icon="['fas', 'briefcase']"
          />
          Work
        </div>
      </div>

      <div class="qualification__sections">
        <!-- Qualification Content #1 -->
        <div class="qualification__content active" data-content="education">
          <!-- Qualification #1 -->
          <div class="qualification__data">
            <div>
              <h3 class="qualification__title">
                Expert Programming in Web Application
              </h3>
              <span class="qualification__subtitle">BKACAD Academy of Technology</span>
              <div class="qualification__calendar">
                <font-awesome-icon :icon="['fas', 'calendar-days']" />
                2019 - 2022
              </div>
            </div>

            <div>
              <span class="qualification__rounder" />
              <span class="qualification__line" />
            </div>
          </div>

          <!-- Qualification #2 -->
          <div class="qualification__data">
            <div />

            <div>
              <span class="qualification__rounder" />
              <span class="qualification__line" />
            </div>

            <div>
              <h3 class="qualification__title">
                High School Diploma
              </h3>
              <span class="qualification__subtitle">Hoàng Văn Thụ High School</span>
              <div class="qualification__calendar">
                <font-awesome-icon :icon="['fas', 'calendar-days']" />
                2016 - 2019
              </div>
            </div>
          </div>

          <!-- Qualification #3 -->
          <div class="qualification__data">
            <div>
              <h3 class="qualification__title">
                Secondary Diploma
              </h3>
              <span class="qualification__subtitle">Trần Phú Secondary School</span>
              <div class="qualification__calendar">
                <font-awesome-icon :icon="['fas', 'calendar-days']" />
                2012 - 2016
              </div>
            </div>

            <div>
              <span class="qualification__rounder" />
              <span class="qualification__line" />
            </div>
          </div>

          <!-- Qualification #4 -->
          <div class="qualification__data">
            <div />

            <div>
              <span class="qualification__rounder" />
              <!-- <span class="qualification__line"></span> -->
            </div>

            <div>
              <h3 class="qualification__title">
                Elementary Diploma
              </h3>
              <span class="qualification__subtitle">Trần Phú Elementary School</span>
              <div class="qualification__calendar">
                <font-awesome-icon :icon="['fas', 'calendar-days']" />
                2007 - 2012
              </div>
            </div>
          </div>
        </div>

        <!-- Qualification Content #2 -->
        <div class="qualification__content" data-content="work">
          <!-- Qualification #1 -->
          <div class="qualification__data">
            <div>
              <h3 class="qualification__title">
                Full-Stack Web developer
              </h3>
              <span class="qualification__subtitle">Hachinet JSC</span>
              <div class="qualification__calendar">
                <font-awesome-icon :icon="['fas', 'calendar-days']" />
                2022 - now
              </div>
            </div>

            <div>
              <span class="qualification__rounder" />
              <span class="qualification__line" />
            </div>
          </div>

          <!-- Qualification #2 -->
          <div class="qualification__data">
            <div />

            <div>
              <span class="qualification__rounder" />
              <span class="qualification__line" />
            </div>

            <div>
              <h3 class="qualification__title">
                Web developer
              </h3>
              <span class="qualification__subtitle">FPT Telecom</span>
              <div class="qualification__calendar">
                <font-awesome-icon :icon="['fas', 'calendar-days']" />
                2021 - 2022
              </div>
            </div>
          </div>

          <!-- Qualification #3 -->
          <div class="qualification__data">
            <div>
              <h3 class="qualification__title">
                Intern Web developer
              </h3>
              <span class="qualification__subtitle">FPT Telecom</span>
              <div class="qualification__calendar">
                <font-awesome-icon :icon="['fas', 'calendar-days']" />
                2021
              </div>
            </div>

            <div>
              <span class="qualification__rounder" />
              <!-- <span class="qualification__line"></span> -->
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
  name: 'PortfolioQualificationSection',
  mounted () {
    // qualifications tabs
    const tabs = $('.qualification__button');
    const tabsContent = $('.qualification__content');

    tabs.on('click', function () {
      if ($(this).hasClass('active')) {
        return;
      }

      const tab = $(this).data('target');

      tabs.removeClass('active');
      $(this).addClass('active');

      tabsContent.removeClass('active');
      $(`.qualification__content[data-content="${tab}"]`).addClass('active');
    });
  }
};
</script>
