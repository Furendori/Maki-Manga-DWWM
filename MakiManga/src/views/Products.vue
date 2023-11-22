<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ProductRepository } from '../repositories/ProductRepository';
import Button from "@/components/Button.vue";

const products = ref([]);
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
        <div class="container-products">
            <div class="card-product" v-for="product in products">
               <div v-if="product">
                <img :src="product['image']" alt="">
                <p>{{ product['name'] }}</p>
                <p>{{ product['price'] }}</p>
                <Button>Ajouter au panier</Button>
            </div>
                <div v-else>
                    Loading...
                </div>   
            </div>
        </div>
    </div>
    
</template>

<style scoped lang="scss">
</style>