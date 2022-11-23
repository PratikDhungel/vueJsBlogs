import { HomeView, BlogsView } from '@/views';
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/blogs',
    name: 'BlogsView',
    component: BlogsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
