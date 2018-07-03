<template>
  <div>
    <h1 class="title">{{ heading }}</h1>
    <div 
      class="product"
      v-for="product in products"
      :key="product.id"
    >
      <div class="product-name">{{ product.name }}</div>
      <div class="product-price">R{{ product.price / 100 }}</div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
export default {
  data: () => ({
    heading: 'Products',
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

<style lang="scss" scoped>
.product {
  padding: 5px 0;
}
</style>
