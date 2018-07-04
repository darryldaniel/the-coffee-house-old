<template>
  <div>
    <h1 class="title">{{ heading }}</h1>
    <div class="tile is-ancestor">
      <div class="tile products__container is-parent">
        <div 
          class="tile products__product is-child"
          v-for="product in products"
          :key="product.id"
        >
          <div class="card">
            <div class="card-header">
              <div class="card-header-title">{{ product.name }}</div>
            </div>
            <div class="card-content">
              Product Description
            </div>
            <div class="card-footer">
              <div class="card-footer-item">R{{ product.price / 100 }}</div>
              <div class="card-footer-item">
                <button class="button is-flat">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
.products {
  &__container {
    justify-content: center;
  }

  &__product {
    padding: 2rem;
    max-width: 350px;
  }
}
</style>
