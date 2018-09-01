import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/home/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/settings/index.vue'),
    },
    {
      path: '/article/:aid',
      name: 'article',
      component: () => import('@/views/article/index.vue'),
    },
    {
      path: '/apps',
      name: 'apps',
      component: () => import('@/views/apps/index.vue'),
    },
    {
      path: '*',
      component: () => import('@/components/NotFound.vue'),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // },
  ],
});
