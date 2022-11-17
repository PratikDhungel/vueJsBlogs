import { HomeView } from '@/views';
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
