import {
  HomeView,
  BlogsView,
  LoginView,
  RegisterView,
  ForgotPasswordView,
  ProfileView,
  AdminView,
} from '@/views';
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
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView,
    meta: {
      title: 'Login',
    },
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView,
    meta: {
      title: 'Register',
    },
  },
  {
    path: '/forgot-password',
    name: 'ForgotPasswordView',
    component: ForgotPasswordView,
    meta: {
      title: 'Forgot Password',
    },
  },
  {
    path: '/profile',
    name: 'ProfileView',
    component: ProfileView,
    meta: {
      title: 'Profile',
    },
  },
  {
    path: '/admin',
    name: 'AdminView',
    component: AdminView,
    meta: {
      title: 'Admin',
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
