<template>
  <div>
    <h1 class="title products__title">Products</h1>
    <div class="tile is-ancestor">
      <div class="tile products__container is-parent">
        <div 
          class="tile products__product is-child"
          v-for="product in products"
          :key="product._id"
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
import { mapState, mapActions } from 'vuex';

export default {
  computed: mapState({
    products: state => state.products.all
  }),
  created() {
    this.$store.dispatch('products/getAllProducts');
  }
};
</script>

<style lang="scss" scoped>
.products {
  &__title {
    text-align: center;
  }

  &__container {
    justify-content: center;
    flex-wrap: wrap;
  }

  &__product {
    padding: 2rem;
    max-width: 350px;
  }
}
</style>
