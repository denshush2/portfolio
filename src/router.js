import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/home/index.vue';
import Projects from './pages/projects/index.vue';
import Main from './pages/main/index.vue';
import Blog from './pages/blog/index.vue';
import Cv from './pages/cv/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          name: 'Home',
          component: Main,
        },
        {
          path: 'projects',
          name: 'Projects',
          component: Projects,
        },
        {
          path: 'blog',
          name: 'Blog',
          component: Blog,
        },
        {
          path: 'cv',
          name: 'CV',
          component: Cv,
        },
      ],
    },
  ],
});
