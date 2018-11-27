
<template>
  <div class="home">
    <div class="hero">
      <div class="logo-wrapper">
        <img
          v-if="data.heroImage"
          class="logo"
          :src="$withBase(data.heroImage)"
          alt="hero"
        >
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
              :href="link.link"
              target="__blank"
            >
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import Home from '@default-theme/Home.vue'

export default {
  extends: Home,
  data: () => ({
    linkSets: [
      {
        title: 'Socials',
        links: [
          {
            name: 'GitHub',
            link: 'https://github.com/dawg/vusic',
          },
          {
            name: 'Facebook',
            link: 'https://github.com/dawg/vusic',
          }
        ]  
      },
      {
        title: 'Feedback',
        links: [
          {
            name: 'Feature Request',
            link: 'https://github.com/dawg/vusic/issues/new',
          },
          {
            name: 'Bug Report',
            link: 'https://github.com/dawg/vusic/issues/new',
          }
        ]  
      },
      {
        title: 'Download',
        links: [
          {
            name: 'Windows',
            link: '',
          },
          {
            name: 'macOS',
            link: '',
          },
          {
            name: 'Linux',
            link: '',
          }
        ]
      }
    ]
  })
}
</script>

<style scoped>
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
  padding: 60px;
  border: 1px solid white;
  border-radius: 50%;
  max-width: 200px;
  max-height: 200px;
  margin: 3em 0 1em 0;
	animation: animShadow 2s infinite ease;
}

.logo {
  filter: invert(100%);
  max-height: 150px!important;
  margin: 1.5em!important;
}

.feature {
  height: 230px;
}

@keyframes animShadow {
	0% { width: 100%; left: 0;  top: 0;  opacity: 1;  box-shadow: 0 0 85px rgba( 170, 170, 255, .4  ); }
  4% { width: 100%; left: 0;  top: 0;  opacity: 1;  box-shadow: 0 0 85px rgba( 170, 170, 255, .4  ); }
  10% { width:  96%; left: 2%; top: 2%; opacity: .7; box-shadow: 0 0 50px rgba( 170, 170, 255, .2  ); }
	25% { width: 100%; left: 0;  top: 0;  opacity: .5;  box-shadow: 0 0 85px rgba( 170, 170, 255, .1  ); }
	50% { width:  96%; left: 2%; top: 2%; opacity: .5; box-shadow: 0 0 50px rgba( 170, 170, 255, .1  ); }
	/* 14% { width:  98%; left: 1%; top: 1%; opacity: 1;  box-shadow: 0 0 70px rgba( 170, 170, 255, .27 ); } */
	/* 18% { width:  98%; left: 1%; top: 1%; opacity: 1;  box-shadow: 0 0 70px rgba( 170, 170, 255, .27 ); } */
	90% { width:  96%; left: 2%; top: 2%; opacity: .5; box-shadow: 0 0 60px rgba( 170, 170, 255, .1 ); }
	100% { width:  96%; left: 2%; top: 2%; opacity: .5; box-shadow: 0 0 20px rgba( 170, 170, 255, .3  ); }
}

.title, .description, .action-button {
  font-family: Lato, sans-serif;
  font-weight: 300;
  margin-bottom: 0!important;
}

.action-button {
  border-radius: 25px!important;
  border: 1px solid white!important;
}

.links {
  flex: 1;
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
  padding: 40px 0

.links-wrapper
  max-width: 800px
  margin: auto
  display: flex
</style>

