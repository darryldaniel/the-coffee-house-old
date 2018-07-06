import { getAllProducts } from '../../api/products';

const state = {
  all: []
};

const actions = {
  getAllProducts: async ({ commit }) => {
    const { data } = await getAllProducts();
    commit('setProducts', data.products);
  }
};

const mutations = {
  setProducts(state, products) {
    state.all = products;
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}