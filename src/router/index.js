import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CategoriaView from '../views/CategoriaView.vue';
import LoginView from '../views/LoginView.vue';
import LogoutView from '../views/LogoutView.vue';
import UsuarioView from '../views/UsuarioView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
    { path: '/categorias', name: 'categorias', component: () => import('../views/CategoriaView.vue') },
    { path: '/login', name: 'login', component: () => import('../views/LoginView.vue') },
    { path: '/logout', name: 'logout', component: () => import('../views/LogoutView.vue') },
    { path: '/usuario', name: 'usuario', component: () => import('../views/UsuarioView.vue') },
  ],
});

export default router;
