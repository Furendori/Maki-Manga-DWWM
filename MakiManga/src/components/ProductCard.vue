<script setup lang="ts">
import type { ProductInterface } from '@/interfaces/ProductInterface';
import { defineProps, ref } from 'vue';
import Button from './Button.vue';
import { useCounterStore } from '../stores/counter';

const props = defineProps<{
    product: ProductInterface
}>();

const counterStore = useCounterStore();
const notification = ref<string | null>(null); 

const addToCart = () => {
    if (props.product) {
        counterStore.addToCart(props.product);
        notification.value = `${props.product.name} a été ajouté au panier!`;
        setTimeout(() => {
            notification.value = null;
        }, 3000);
    }
}
</script>

<template>
  <div class="card">
    <div class="content">
      <div class="image-container">
        <RouterLink :to="`/products/${props.product._id.toString()}`">
          <img :src="props.product.image" :alt="props.product.name" />
        </RouterLink>
      </div>
      <div class="card-content">
        <h3>
          <RouterLink :to="`/products/${props.product._id.toString()}`">
            {{ props.product.name }}
          </RouterLink>
        </h3>
        <p>{{ props.product.price }}€</p>
        <Button @click="addToCart">Ajouter au panier</Button>
      </div>
    </div>
    <div v-if="notification" class="notification">{{ notification }}</div>
  </div>
</template>

<style scoped lang="scss">
.notification {
    background-color: #4CAF50;
    color: white;
    text-align: center;
    padding: 15px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1;
    border-radius: 8px;
}
.card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 200px;
    height: 420px;
    margin: 10px;
  .content {
    .image-container{
      width: 100%;
      height: 300px;

      img {
        height: 300px;
        width: 200px;
        object-fit: cover;
      }
    }
    .card-content {
      display: flex;
      flex-direction: column;
      text-align: center;

      h3 {
        margin: 0;
        a {
          text-decoration: none;
          color: $primary-color;
        }
      }

      p {
        margin: 0;
        color: $primary-color;
        margin-bottom: 5px;
        font-size: 1.4rem;
      }

      Button {
        width: 150px;
        align-self: center;
      }
    }
  }   
}
</style>