import Vue from 'vue';
import VueRouter from 'vue-router';

import Products from './products/Products.vue';
import Admin from './admin/Admin.vue';

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
  }
];

Vue.use(VueRouter);

export const router = new VueRouter({ routes });
