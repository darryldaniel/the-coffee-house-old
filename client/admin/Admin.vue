<template>
  <div>
    <form action="/login" method="post">
      <div class="admin__username">
        <label for="username" class="admin__username-label">Username:</label>
        <input class="admin__input" v-model="username" type="text" id="username"/>
      </div>
      <div class="admin__password">
        <label for="password" class="admin__password-label">Password:</label>
        <input class="admin__input" v-model="password" type="text" id="password"/>
      </div>
    </form>
    <button class="admin__login-button" @click="login(username, password)">LOG IN</button>
    <div>{{ result }}</div>
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
.admin__username {
  margin-bottom: 1rem;
}

.admin__password {
  margin-bottom: 2rem;
}

.admin__input {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
}

.admin__login-button {
  margin-bottom: 2rem;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  padding: .25rem 1.5rem;
}
</style>
