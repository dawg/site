
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
      {{ data.footer }}
    </div>
  </div>
</template>

<script>
import Home from '@default-theme/Home.vue'

export default {
  extends: Home,
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
}

.logo-wrapper {
  padding: 60px;
  border: 1px solid white;
  border-radius: 50%;
  max-width: 200px;
  max-height: 200px;
  margin: 3em 0 1em 0;
	animation: animShadow 0.66875s infinite ease;
}

.logo {
  filter: invert(100%);
  max-height: 150px!important;
  margin: 1.5em!important;
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
</style>


<style lang="stylus" scoped>
// .action-button
//   background-color: lighten(#1976d2, 20%)!important
</style>

