import { createApp } from 'vue';
import App from './App.vue';
// import router from './components/router/01_router.js';
import router2 from './components/router/02_nestedRoute.js';

// npm install vue-router@next 할 것!
// createApp(App).use(router).mount('#app');
const app = createApp(App);
// app.use(router);
app.use(router2);
app.mount('#app');
