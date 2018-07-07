<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <span class="icon is-large logo__icon">
          <i class="fas fa-lg fa-coffee"></i>
        </span>
        <p class="navbar-item logo__label">The Coffee House</p>
        
        <div class="navbar-burger burger" data-target="navMenu" aria-label="menu" aria-expanded="false" @click="toggleMenu()" v-bind:class="{ 'is-active': isActive }">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-menu" id="navMenu" v-bind:class="{ 'is-active': isActive }">
          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link class="navbar-item" to="/admin">Admin</router-link>
      </div>
      </div>
    </nav>
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

<style lang="scss" scoped>
$logo-font: 'Alegreya SC', 'Times New Roman', Times, serif;

.logo {
  &__label {
    font-family: $logo-font;
    font-size: 1.7rem;
  }

  &__icon {
    align-self: center;
    padding-left: 1rem;
  }
}
</style>
