<script setup lang="ts">
import Button from './Button.vue';
import { onMounted } from 'vue';

const props = defineProps<{
    product: {
        id: string;
        name: string;
        price: number;
        image: string;
    }
}>();
</script>

<template>
  <div class="card">
    <div class="content">
      <div class="image-container">
        <RouterLink :to="`/products/${product['id']}`">
          <img :src="product['image']" :alt="product['name']" />
        </RouterLink>
      </div>
      <div class="card-content">
        <h2>
          <RouterLink :to="{ name: 'product', params: { id: product['id'] }}">
            {{ product['name'] }}
          </RouterLink>
          <p>{{ product['price'] }}</p>
        </h2>
        <Button>Ajouter au panier</Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    .content {
        width: 300px;
        height: 500px;

        .image-container{
        width: 100%;
        height: 300px;

            img {
                height: 300px;
                width: 200px;
                object-fit: cover;
            }
        }  
    }   
}
</style>