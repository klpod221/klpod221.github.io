<template>
  <section id="skills" class="skills section">
    <h2 class="section__title">
      Skills
    </h2>
    <span class="section__subtitle">My technical level</span>

    <div class="skills__container container grid">
      <div class="skills__content">
        <div class="skills__header">
          <font-awesome-icon class="skills__icon" :icon="[ 'fas', 'code' ]" />

          <div>
            <h1 class="skills__title">
              Frontend developer
            </h1>
            <span class="skills__subtitle"> More than 2 years </span>
          </div>

          <font-awesome-icon class="skills__arrow" :icon="[ 'fas', 'chevron-down' ]" />
        </div>

        <div class="skills__list grid">
          <div class="skills__data">
            <div class="skills__titles">
              <h3 class="skills__name">
                HTML
              </h3>
              <span class="skills__number" />
            </div>
            <div class="skills__bar">
              <span
                data-year="2"
                class="skills__percentage skills__html"
              />
            </div>
          </div>

          <div class="skills__data">
            <div class="skills__titles">
              <h3 class="skills__name">
                CSS
              </h3>
              <span class="skills__number" />
            </div>
            <div class="skills__bar">
              <span data-year="2" class="skills__percentage skills__css" />
            </div>
          </div>

          <div class="skills__data">
            <div class="skills__titles">
              <h3 class="skills__name">
                JavaScript
              </h3>
              <span class="skills__number" />
            </div>
            <div class="skills__bar">
              <span data-year="2" class="skills__percentage skills__js" />
            </div>
          </div>

          <div class="skills__data">
            <div class="skills__titles">
              <h3 class="skills__name">
                React
              </h3>
              <span class="skills__number" />
            </div>
            <div class="skills__bar">
              <span
                data-year="1"
                class="skills__percentage skills__react"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="skills__content">
        <div class="skills__header">
          <font-awesome-icon class="skills__icon" :icon="[ 'fas', 'gears' ]" />

          <div>
            <h1 class="skills__title">
              Backend developer
            </h1>
            <span class="skills__subtitle"> More than 2 year </span>
          </div>

          <font-awesome-icon class="skills__arrow" :icon="[ 'fas', 'chevron-down' ]" />
        </div>

        <div class="skills__list grid">
          <div class="skills__data">
            <div class="skills__titles">
              <h3 class="skills__name">
                PHP
              </h3>
              <span class="skills__number" />
            </div>
            <div class="skills__bar">
              <span data-year="2" class="skills__percentage skills__php" />
            </div>
          </div>

          <div class="skills__data">
            <div class="skills__titles">
              <h3 class="skills__name">
                Laravel
              </h3>
              <span class="skills__number" />
            </div>
            <div class="skills__bar">
              <span
                data-year="2"
                class="skills__percentage skills__laravel"
              />
            </div>
          </div>

          <div class="skills__data">
            <div class="skills__titles">
              <h3 class="skills__name">
                NodeJS
              </h3>
              <span class="skills__number" />
            </div>
            <div class="skills__bar">
              <span
                data-year="1"
                class="skills__percentage skills__nodejs"
              />
            </div>
          </div>

          <div class="skills__data">
            <div class="skills__titles">
              <h3 class="skills__name">
                SpringBoot
              </h3>
              <span class="skills__number" />
            </div>
            <div class="skills__bar">
              <span
                data-year="1.5"
                class="skills__percentage skills__SpringBoot"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="skills__content">
        <div class="skills__header">
          <font-awesome-icon class="skills__icon" :icon="[ 'fas', 'database' ]" />

          <div>
            <h1 class="skills__title">
              Database
            </h1>
            <span class="skills__subtitle"> More than 2 year </span>
          </div>

          <font-awesome-icon class="skills__arrow" :icon="[ 'fas', 'chevron-down' ]" />
        </div>

        <div class="skills__list grid">
          <div class="skills__data">
            <div class="skills__titles">
              <h3 class="skills__name">
                MySQL
              </h3>
              <span class="skills__number" />
            </div>
            <div class="skills__bar">
              <span
                data-year="2"
                class="skills__percentage skills__mysql"
              />
            </div>
          </div>

          <div class="skills__data">
            <div class="skills__titles">
              <h3 class="skills__name">
                MongoDB
              </h3>
              <span class="skills__number" />
            </div>
            <div class="skills__bar">
              <span
                data-year="0.5"
                class="skills__percentage skills__mongodb"
              />
            </div>
          </div>

          <div class="skills__data">
            <div class="skills__titles">
              <h3 class="skills__name">
                PostgreSQL
              </h3>
              <span class="skills__number" />
            </div>
            <div class="skills__bar">
              <span
                data-year="2"
                class="skills__percentage skills__postgresql"
              />
            </div>
          </div>

          <div class="skills__data">
            <div class="skills__titles">
              <h3 class="skills__name">
                Firebase
              </h3>
              <span class="skills__number" />
            </div>
            <div class="skills__bar">
              <span
                data-year="0.5"
                class="skills__percentage skills__firebase"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="skills__content">
        <div class="skills__header">
          <font-awesome-icon class="skills__icon" :icon="[ 'fas', 'server' ]" />

          <div>
            <h1 class="skills__title">
              System
            </h1>
            <span class="skills__subtitle"> More than 2 year </span>
          </div>

          <font-awesome-icon class="skills__arrow" :icon="[ 'fas', 'chevron-down' ]" />
        </div>

        <div class="skills__list grid">
          <div class="skills__data">
            <div class="skills__titles">
              <h3 class="skills__name">
                Linux
              </h3>
              <span class="skills__number" />
            </div>
            <div class="skills__bar">
              <span
                data-year="2"
                class="skills__percentage skills__linux"
              />
            </div>
          </div>

          <div class="skills__data">
            <div class="skills__titles">
              <h3 class="skills__name">
                Docker
              </h3>
              <span class="skills__number" />
            </div>
            <div class="skills__bar">
              <span
                data-year="1"
                class="skills__percentage skills__docker"
              />
            </div>
          </div>

          <div class="skills__data">
            <div class="skills__titles">
              <h3 class="skills__name">
                Kubernetes
              </h3>
              <span class="skills__number" />
            </div>
            <div class="skills__bar">
              <span
                data-year="0.5"
                class="skills__percentage skills__kubernetes"
              />
            </div>
          </div>

          <div class="skills__data">
            <div class="skills__titles">
              <h3 class="skills__name">
                AWS
              </h3>
              <span class="skills__number" />
            </div>
            <div class="skills__bar">
              <span
                data-year="0.5"
                class="skills__percentage skills__aws"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortfolioSkillsSection'
};
</script>
