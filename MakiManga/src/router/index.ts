import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/licenses',
      name: 'licenses',
      component: () => import('../views/Licenses.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/Products.vue'),
    },
    {
      path: '/products/:id',
      name: 'productDetails',
      component: () => import('../views/ProductDetails.vue'),
    },
    {
      path: '/myaccount',
      name: 'myaccount',
      component: () => import('../views/MyAccount.vue'),
    },
    {
      path: '/panier',
      name: 'panier',
      component: () => import('../views/PanierView.vue'),
    },
    {
      path: '/Paiement',
      name: 'Paiement',
      component: () => import('../views/PaiementView.vue'),
    }
  ],
});

export default router;
