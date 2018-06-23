<template>
  <div>
    <form action="/login" method="post">
    <div>
      <label for="username" class="admin__username">Username:</label>
      <input v-model="username" type="text" id="usename"/>
    </div>
    <div>
      <label for="password" class="admin__password">Password:</label>
      <input v-model="password" type="text" id="password"/>
    </div>
  </form>
  <button @click="login(username, password)">LOG IN</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login: async (username, password) => {
      const response = await axios.post('/login', { username, password });
      console.log(response);
    }
  }
};
</script>

<style scoped>
</style>
