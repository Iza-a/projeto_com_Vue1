// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import VideosDiversos from './components/VideosDiversos.vue';

const routes = [
  {
    path: '/videos',
    name: 'VideosDiversos',
    component: VideosDiversos
  },
  // Adicione outras rotas aqui
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

