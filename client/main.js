import Vue from "vue";
import App from "./App.vue";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";
// import router from './router'
// import store from './store'

Vue.config.productionTip = false;

const httpLink = new HttpLink({
  uri: `${window.location.origin}/api`
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  // router,
  // store,
  provide: apolloProvider.provide(),
  render: h => h(App)
}).$mount("#app");
