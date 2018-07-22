import Vue from 'vue';
import VueRouter from 'vue-router';

import Products from './products/Products.vue';
import Admin from './admin/Admin.vue';
import AddProduct from './products/AddProduct.vue';

const routes = [
  {
    path: '/',
    name: 'Products',
    component: Products
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/addProduct',
    name: 'AddProduct',
    component: AddProduct
  }
];

Vue.use(VueRouter);

export const router = new VueRouter({ routes });
