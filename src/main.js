import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const VueApp = createApp(App);

VueApp.use(router).mount('#app');
