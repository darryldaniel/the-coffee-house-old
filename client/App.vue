<template>
  <div id="app">
    <h1 class="main-heading">{{ heading }}</h1>
    <h2 class="main-sub-heading">{{ subHeading }}</h2>
    <div 
      class="product"
      v-for="product in products"
      :key="product.id"
    >
      <div class="product-name">{{ product.name }}</div>
      <div class="product-price">R{{ product.price / 100 }}</div>
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <footer>
      <p class="message">Made with &hearts; and <span class="vue-highlight">Vue</span>. Hosted on <span class="zeit-highlight">ZEIT</span>.</p>
    </footer>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  data: () => ({
    heading: "The Coffee House",
    subHeading: "Products",
    products: []
  }),
  apollo: {
    products: gql`
      {
        products {
          id
          name
          price
        }
      }
    `
  }
};
</script>


<style>
#app {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

a {
  font-weight: bold;
  color: #2c3e50;
}
a.router-link-exact-active {
  color: #42b983;
}

.main-heading {
  font-family: "Alegreya SC", "Times New Roman", Times, serif;
  font-size: 3rem;
}

.main-sub-heading {
  font-family: "Lato", Tahoma, Verdana, sans-serif;
}

p {
  font-family: "Lato", Tahoma, Verdana, sans-serif;
}

.vue-highlight {
  color: #42b983;
  font-weight: bold;
}

.zeit-highlight {
  font-weight: bold;
}

.product {
  padding: 5px 0;
}

footer {
  margin-top: 2rem;
}
</style>
