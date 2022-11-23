import { HomeView, BlogsView } from '@/views';
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/blogs',
    name: 'BlogsView',
    component: BlogsView,
    meta: {
      title: 'Blogs',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  document.title = `${to.meta.title} | VueJS Blogs`;
  next();
});

export default router;
