<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <p class="navbar-item title logo">The Coffee House</p>
      </div>
      <div class="navbar-burger burger" data-target="navMenu" aria-label="menu" aria-expanded="false" @click="toggleMenu()" v-bind:class="{ 'is-active': isActive }">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>
      <div class="navbar-menu" id="navMenu" v-bind:class="{ 'is-active': isActive }">
        <div class="navbar-end">
          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link class="navbar-item" to="/admin">Admin</router-link>
        </div>
      </div>
    </nav>
    <div class="container main-content">
      <router-view/>
    </div>
    <footer class="app__footer">
      <p class="message">Made with &hearts; and <span class="vue-highlight">Vue</span>. Hosted on <span class="zeit-highlight">ZEIT</span>.</p>
    </footer>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style lang="scss">
@import "main.scss";

.logo {
  font-family: $logo-font;
}

.main-content {
  padding-top: 3rem;
}

.vue-highlight {
  color: #42b983;
  font-weight: bold;
}

.zeit-highlight {
  font-weight: bold;
}

.app__footer {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
  position: absolute;
  bottom: 0;
}
</style>
