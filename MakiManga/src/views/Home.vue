<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ProductRepository } from '../repositories/ProductRepository';
import Carousel from '@/components/Carousel.vue';
import Button from '../components/Button.vue';
import Partners from '@/components/Partners.vue';
import { useCounterStore } from '../stores/counter';

const { addToCart } = useCounterStore();
const products = ref([]);
const isLoading = ref(true);
const showNotification = ref(false);
const cart = ref([]);
const repo = new ProductRepository();

const getProducts = async () => {
  products.value = await repo.getFiveProducts();
  isLoading.value = false;
};

onMounted(() => {
  getProducts();
  showNotification.value = false;
});

const addItemToCart = (product) => {
  addToCart(product);
  showNotification.value = true;

  setTimeout(() => {
    showNotification.value = false;
  }, 5000);
};
</script>


<template>
  <div class="main-container">
    <div class="notification" v-if="showNotification">
      Produit ajouté au panier !
    </div>

    <div class="background">
      <img class="image1" src="../assets/img/BleuGirl.png" alt="">
      <img class="image2" src="../assets/img/Miku.png" alt="">
      <div class="container-carousel">
        <Carousel @addItemToCart="addItemToCart" :cart="cart" />
      </div>
    </div>

    <div class="container-news">
      <h3>Nouveautés</h3>
      <div class="container-cards">
        <div class="card" v-for="product in products" :key="product.id">
          <div class="container-img">
            <router-link :to="`/products/${product.id}`">
              <img :src="product.image" alt="">
            </router-link>
          </div>
          <p>{{ product.name }}</p>
          <p>{{ product.price }}€</p>
          <Button @click="addItemToCart(product)">Ajouter au panier</Button>
        </div>
      </div>
    </div>

    <div class="parallax-effect-1">
      <div class="container-line1">
        <div class="lineBlue1"></div>
        <div class="lineBlue2"></div>
      </div>
      <div class="container-line2">
        <div class="lineBlue2"></div>
        <div class="lineBlue1"></div>
      </div>
    </div>

    <div class="container-news">
      <h3>Meilleures ventes</h3>
      <div class="container-cards">
        <div class="card" v-for="product in products">
          <div class="container-img">
            <router-link to="#">
              <img :src="product.image" alt="">
            </router-link>
          </div>
          <div class="product-details">
            <p>{{ product.name }}</p>
            <p>{{ product.price }}€</p>
            <Button @click="addItemToCart(product)">Ajouter au panier</Button>
          </div>
        </div>
      </div>
    </div>
    <Partners />
  </div>
</template>


<style scoped lang="scss">
.notification {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #4caf50;
  color: white;
  text-align: center;
  padding: 15px;
  z-index: 1;
}
.main-container {
    .background {
        background-image: url("../assets/img/Fond2.jpg");
        background-size: cover;
        height: 85vh;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        .image1 {
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 1;
        }

        .image2 {
            position: absolute;
            bottom: 0;
            right: 0;
            z-index: 1;
        }

        .container-carousel {
            height: 600px;
            width: 1000px;
            background-color: #1C2942;
            border-radius: 15px;
            padding: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    p{
        margin: 0;
    }
    .container-news {
        .container-cards {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            .card {
                width: 300px;
                height: 500px;

                .container-img {
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
    }
    .parallax-effect-1 {
        background-image: url("../assets/img/GirlFlower.jpg");
        z-index: 1;
        height: 400px;
        background-attachment: fixed;
        background-size: cover; 
        background-position: center;
        background-repeat: no-repeat;
    }

    .container-line2 {
        display: inline;
        .lineBlue1 {
            height: 50px;
            background-color: #1C2942;
            opacity: 90%;
            width: 100%;
            rotate: 175deg;
            position: relative;
            float: right;
            top: 205px;
        }
        .lineBlue2 {
            height: 50px;
            background-color: #1C2942;
            opacity: 90%;
            rotate: 5deg;
            width: 100%;
            position: relative;
            top: 253px;
        }
    }

    .container-line1 {
        display: inline;
        .lineBlue1 {
            height: 50px;
            background-color: #1C2942;
            opacity: 90%;
            rotate: 176deg;
            position: relative;
            top: -9;
        }
        .lineBlue2 {
            height: 50px;
            background-color: #1C2942;
            opacity: 90%;
            rotate: 2deg;
            position: relative;
            top: -9px;
        }
    }
}
    
</style>