import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { getAuth } from 'firebase/auth';

let VueApp;

getAuth().onAuthStateChanged(() => {
  //   Mount app when auth state is changed

  if (!VueApp) {
    VueApp = createApp(App);
    VueApp.use(store).use(router).mount('#app');
  }
});
