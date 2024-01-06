import './assets/sass/main.scss';
import { createApp, ref } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const app = createApp(App);
const sharedCart = ref([]);

app.config.globalProperties.sharedCart = sharedCart;
app.provide('sharedCart', sharedCart);
app.use(createPinia());
app.use(router);
app.mount('#app');