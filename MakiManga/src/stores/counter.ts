import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  const cart = ref([]);

  function increment() {
    count.value++;
  }

  function addToCart(product) {
    cart.value.push(product);
  }

  function removeFromCart(index) {
    cart.value.splice(index, 1);
  }

  function clearCart() {
    cart.value = [];
  }

  const total = computed(() => {
    return cart.value.reduce((total, item) => total + item.price, 0);
  });

  return { count, doubleCount, increment, cart, addToCart, removeFromCart, clearCart, total };
});
