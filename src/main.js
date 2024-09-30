import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import VueLazyload from 'vue3-lazyload';

const app = createApp(App);

app.use(VueLazyload, {
  loading: '/path/to/loading-placeholder.jpg', // Imagem de placeholder enquanto carrega
  error: '/path/to/error-image.jpg', // Imagem de erro se o carregamento falhar
});
