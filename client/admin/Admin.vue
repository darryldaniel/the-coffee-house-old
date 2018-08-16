<template>

  <div class="container admin__form">
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <h3 class="title has-text-grey">Login</h3>
            <div class="box">
              <form>
                <div class="field">
                  <div class="control">
                    <input v-model="username" class="input" type="username" placeholder="Your Username" autofocus="">
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input v-model="password" class="input" type="password" placeholder="Your Password">
                  </div>
                </div>
                <div class="field">
                  <p class="help is-danger">{{ result }}</p>
                </div>
                <button class="button is-block is-info is-medium is-fullwidth" @click="login(username, password)" >Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
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
  created: function() {
    this.$store.dispatch('login/resetLoginFailedStatus');
  },
  computed: {
    ...mapGetters({
      result: 'login/loginFailedStatus'
    })
  },
  methods: {
    login(username, password) {
      const payload = {
        username,
        password,
        router: this.$router
      };

      this.$store.dispatch('login/login', payload);
    }
  }
};
</script>
