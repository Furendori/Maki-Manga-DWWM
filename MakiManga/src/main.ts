import './assets/sass/main.scss';
import { createApp, ref } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import VueSplide from '@splidejs/vue-splide';

const app = createApp(App);
const sharedCart = ref([]);

app.config.globalProperties.sharedCart = sharedCart;
app.provide('sharedCart', sharedCart);
app.use(createPinia());
app.use(router);
app.use(VueSplide);
app.mount('#app');
