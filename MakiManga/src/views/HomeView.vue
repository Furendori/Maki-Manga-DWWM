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
        <div class="container-carousel">
            <Carousel />
        </div>
    </div>

    <div class="container-products">
        <h2>Nouveautés</h2>
        <Button class="lookmore">Voir tout</Button>
        <div class="container-cards">
            <ProductCard :product="product" v-for="product in newProducts" :key="product._id"></ProductCard>
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

    <div class="transition01"></div>

    <div class="container-products">
        <h2>Meilleures ventes</h2>
        <Button class="lookmore">Voir tout</Button>
        <div class="container-cards">
            <ProductCard :product="product" v-for="product in popularProduct" :key="product._id"></ProductCard>
        </div>
    </div>

    <Universes class="universes" />
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

        .container-carousel {
            height: 80%;
            width: 900px;
            background-color: #1C2942;
            border-radius: 15px;
            padding: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
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
            background-color: #1C2942;
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
        border: 5px solid #1C2942;
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
        position: relative;

        .lineBlue1 {
            height: 50px;
            background-color: #1C2942;
            rotate: 176deg;
            position: relative;
            top: -9;

            &::after, &::before {
                content: '';
                position: absolute;
                top: 0;
                width: 0;
                height: 0;
                border-style: solid;
            }

            &::before {
                left: 0;
                border-width: 0 100vw 100px 0;
                border-color: transparent #1C2942 transparent transparent;
            }

            &::after {
                right: 0;
                border-width: 100px 100vw 0 0;
                border-color: transparent transparent transparent #1C2942;
            }
        }
        .lineBlue2 {
            height: 50px;
            background-color: #1C2942;
            opacity: 90%;
            rotate: 2deg;
            position: relative;
            top: -9px;

            &::before {
                left: 0;
                border-width: 0 100vw 100px 0;
                border-color: transparent #1C2942 transparent transparent;
            }

            &::after {
                right: 0;
                border-width: 100px 100vw 0 0;
                border-color: transparent transparent transparent #1C2942;
            }
        }
    }

    
}
    
</style>