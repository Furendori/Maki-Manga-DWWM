<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ProductRepository } from '@/repositories/ProductRepository';
import type { ProductInterface } from '@/interfaces/ProductInterface';
import Button from '@/components/Button.vue';
import Carousel from '@/components/Carousel.vue';
import Universes from '@/components/Universes.vue';
import ProductCard from '@/components/ProductCard.vue';

const newProducts = ref<ProductInterface[]>([]);
const popularProduct =ref<ProductInterface[]>([]);
const isLoading = ref(true);

const repo: ProductRepository = new ProductRepository();

const getProducts = async () => {
    try {
        const allProducts = await repo.getAllProducts();
        newProducts.value = allProducts.slice(-6);
        popularProduct.value = allProducts.slice(0,6)
        isLoading.value = false; 
    } catch (error) {
        console.log('Erreur lors de la récupération des produits:', error);
    }
}

onMounted(() => {
    getProducts();
 });

</script>

<template>
<div class="main-container">
    <div class="background">
        <img class="image1" src="../assets/img/BleuGirl.png" alt="">
        <img class="image2" src="../assets/img/Miku.png" alt="">
        <Carousel />
    </div>

    <div class="container-products">
        <h2>Nouveautés</h2>
        <Button class="lookmore">Voir tout</Button>
        <div class="container-cards">
            <ProductCard :product="product" v-for="product in newProducts" :key="product._id"></ProductCard>
        </div>
    </div>

    <div class="parallax-effect-1"></div>

    <div class="container-products">
        <h2>Meilleures ventes</h2>
        <Button class="lookmore">Voir tout</Button>
        <div class="container-cards">
            <ProductCard :product="product" v-for="product in popularProduct" :key="product._id"></ProductCard>
        </div>
    </div>

    <Universes class="universes"/>
</div>
</template>

<style scoped lang="scss">

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
            height: 480px;
        }

        .image2 {
            position: absolute;
            bottom: 0;
            right: 0;
            z-index: 1;
            height: 500px;
        }

        @media screen and (max-width: 1500px) {
            .image1, .image2 {
                height: 400px;
            }
        }

        @media screen and (max-width: 1370px) {
            .image1, .image2 {
                height: 300px;
            }
        }

        @media screen and (max-width: 704px) {
            .image1, .image2 {
                display: none;
            }
        }
    }
    .container-products {
        display: flex;
        flex-direction: column;
        padding: 15px;

        .container-cards {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
        }

        .lookmore {
            background-color: $primary-color;
            align-self: flex-end;
            margin-right: 100px;
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
        border-top: 15px solid $primary-color;
        border-bottom: 15px solid $primary-color;
    }  
}
</style>