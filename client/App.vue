<template>
  <div id="app">
    <app-nav></app-nav>
    <div class="container app__main-content">
      <router-view/>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from './layout/AppFooter.vue'
import AppNav from './layout/AppNav.vue'

export default {
  components: {
    AppFooter,
    AppNav
  }
}
</script>

<style lang="scss">
@import "main.scss";

.app {
  &__main-content {
    padding-top: 3rem;
  }
}
</style>
