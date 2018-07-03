<template>
  <div class="container admin__form">
    <div class="field">
      <label for="username" class="label">Username</label>
      <div class="control">
        <input v-model="username" type="text" id="username" class="input" placeholder="Username">
      </div>
    </div>
    <div class="field">
      <label for="password" class="label">Password</label>
      <div class="control">
        <input v-model="password" type="text" id="password" class="input" placeholder="Password">
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button class="button" @click="login(username, password)">LOG IN</button>
      </div>
    </div>
    <p class="help is-danger">{{ result }}</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  data: function() {
    return {
      username: '',
      password: ''
    };
  },
  created: function () {
    this.$store.commit('setLoginFailedStatus', '');
  },
  computed: {
    ...mapGetters({
      result: 'loginFailedStatus'
    })
  },
  methods: {
    login (username, password) {
      const payload = {
        username,
        password,
        router: this.$router
      };

      this.$store.dispatch('login', payload);
    }
  }
};
</script>

<style lang="scss" scoped>
.admin {
  &__form {
    padding: 1rem;
    text-align: left;
    max-width: 400px;
  }
}
</style>
