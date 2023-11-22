<script setup lang="ts">
import type { ProductInterface } from '@/interfaces/ProductInterface';
import Button from './Button.vue';

const props = defineProps<{
    product: ProductInterface
}>();

</script>

<template>
  <div class="card">
    <div class="content">
      <div class="image-container">
        <RouterLink :to="`/products/${product._id.toString()}`">
          <img :src="product.image" :alt="product.name" />
        </RouterLink>
      </div>
      <div class="card-content">
        <h3>
          <RouterLink :to="`/products/${product._id.toString()}`">
            {{ product.name }}
          </RouterLink>
        </h3>
          <p>{{ product.price }}€</p>
        
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