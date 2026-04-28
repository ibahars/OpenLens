import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import EduPlatform from './pages/EduPlatform.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/edu-platform', component: EduPlatform }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;