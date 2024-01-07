<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ProductRepository } from '../repositories/ProductRepository';
import type { ProductInterface } from '@/interfaces/ProductInterface';
import ProductCard from "@/components/ProductCard.vue";

const products = ref<ProductInterface[]>([]);
const isLoading = ref(true);

const repo: ProductRepository = new ProductRepository();
 
const getProducts = async () => {
    products.value = await repo.getAllProducts();
    isLoading.value = false;
}

onMounted(() => {
    getProducts();
 });
</script>

<template>
    <div class="main-container">
        <h3>Tous nos produits</h3>
        <div v-if="products" class="container-products">
            <ProductCard :product="product" v-for="product in products" :key="product._id"></ProductCard>
        </div>
        <div v-else>
            Loading...
        </div>   
    </div>
    
</template>

<style scoped lang="scss">
    .main-container {
        display: flex;
        flex-direction: column;
        margin-top: 25px;
        margin-bottom: 25px;

        h3 {
            text-align: center;
        }

        .container-products {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }

        @media screen and (max-width: 1500px) {

            .container-products {
                width: 90%;
                margin-left: 20px;
            }
        }

        @media screen and (min-width: 1270px) {

            .container-products {
                width: 1100px;
                display: flex;
                align-self: center;
            }
        }
    }
</style>