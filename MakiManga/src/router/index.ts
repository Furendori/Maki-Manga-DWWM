import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
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
      path: '/licences',
      name: 'licences',
      component: () => import('../views/LicencesView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/products/:id',
      name: 'product',
      component: () => import('../views/ProductDetailsView.vue')
    },
    {
      path: '/myaccount',
      name: 'myaccount',
      component: () => import('../views/MyAccountView.vue')
    },
    {
      path: '/Panier',
      name: 'Panier',
      component: () => import('../views/PanierView.vue')
    },
    {
      path: '/Paiement',
      name: 'Paiement',
      component: () => import('../views/PaiementView.vue'),
    }
  ],
});

export default router;
