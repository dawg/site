
<template>
  <div class="home">
    <div class="hero">
      <div class="logo-wrapper grid-parent">
        <visualization>
          <img
            v-if="data.heroImage"
            class="logo"
            :src="$withBase(data.heroImage)"
            alt="hero"
          >
        </visualization>
      </div>

      <h1 class="title">{{ data.heroText || $title || 'Hello' }}</h1>

      <p class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      <p
        class="action"
        v-if="data.actionText && data.actionLink"
      >
        <NavLink
          class="action-button"
          :item="actionLink"
        />
      </p>
    </div>

    <div
      class="features"
      v-if="data.features && data.features.length"
    >
      <div
        class="feature"
        v-for="(feature, index) in data.features"
        :key="index"
        :style="`flex-basis: ${100 / (data.features.length + 1)}%`"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content class="custom"/>

    <div
      class="footer"
      v-if="data.footer"
    >
      <div class="links-wrapper">
        <div
          v-for="set in linkSets"
          :key="set.title"
          class="links"
        >
          <div class="set-name">{{ set.title }}</div>
          <div
            v-for="link in set.links"
            :key="set.name"
            class="link"
          >
            <a 
              v-if="link.link"
              :href="link.link"
              :target="link.disableRedirect ? '' : '__blank'"
            >
              {{ link.name }}
            </a>
            <div
              v-else
              style="color: #b1b1b1"
            >
              {{ link.name }}
            </div>
          </div>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import Home from '@default-theme/Home.vue'
import Visualization from './Visualization.vue';

export default {
  extends: Home,
  components: { 
    Visualization
  },
  computed: {
    linkSets() {
      return [
        {
          title: 'Socials',
          links: [
            {
              name: 'GitHub',
              link: 'https://github.com/dawg/DAWG',
            },
            {
              name: 'Facebook',
              link: 'https://github.com/dawg/DAWG',
            },
            {
              name: 'Youtube',
              link: 'https://www.youtube.com/channel/UCYyTUgQoOADVsn6YLHP6kqA'
            }
          ]  
        },
        {
          title: 'Feedback',
          links: [
            {
              name: 'Feature Request',
              link: '/guide/#feature-requests-bug-reporting',
            },
            {
              name: 'Bug Report',
              link: 'https://github.com/dawg/DAWG/issues/new',
            },
            {
              name: 'Contact Us',
              link: 'https://goo.gl/forms/GGCyGyheN8ZuQM6x2',
            }
          ]  
        },
        {
          title: 'Download',
          links: [
            {
              name: 'Windows',
              link: 'http://tiny.cc/ur9q4y',
            },
            {
              name: 'macOS',
              link: 'http://tiny.cc/p09q4y',
            },
            {
              // go to download page because we don't know which flavor of linux they are using
              name: 'Linux',
              disableRedirect: true,
              link: '/guide/installation.html',
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.grid-parent {
  display: grid;
}

.grid-child {
  grid-row: 1;
  grid-column: 1;
}

.home {
  padding: 3.6rem 0 0!important;
  max-width: unset;
  margin: 0!important;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
}

.feature p {
  font-size: 15px;
}

.features {
  max-width: 1000px;
  margin: auto;
}

.logo-wrapper {
  margin: 100px 50px;
}

.logo {
  filter: invert(100%);
  max-height: 150px!important;
}

.feature {
  height: 230px;
}

.title, .description, .action-button {
  font-weight: 300;
  margin-bottom: 0!important;
}

.action-button {
  border-radius: 25px!important;
  border: 1px solid white!important;
}

.links {
  min-width: 150px;
  margin-top: 30px;
}
</style>


<style lang="stylus" scoped>
@import '../theme.styl'

.features
  border-top: none

.link a, .set-name
  color: $textColor

.link
  text-align: left
  margin: 10px 0

.set-name
  text-transform: uppercase
  margin-bottom: 20px
  text-align: left
  font-weight: 200

.footer
  padding: 10px 0 40px 0

.links-wrapper
  margin: auto
  flex-wrap: wrap
  justify-content: space-evenly
  display: flex
</style>

