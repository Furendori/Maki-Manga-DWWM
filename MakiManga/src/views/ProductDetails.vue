<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { ProductRepository } from '@/repositories/ProductRepository';
import { ProductInterface } from '@/interfaces/ProductInterface';

const route = useRoute();
const product = ref<ProductInterface>({});
const isLoading = ref(true);
const ProductId: string = route.params._id;
const repo: ProductRepository = new ProductRepository();
console.log(typeof ProductId.value)

const getProduct = async () => {
    try {
        // typeof ProductId.value === 'string' ? ProductId.value: '';
        product.value = await repo.getProduct(ProductId);
        console.log(product)
        isLoading.value = false; 
    } catch (error) {
        console.log('Erreur lors de la récupération du produit:', error);
    }
}

console.log(JSON.stringify(product.value))

onMounted(() => {
    getProduct();
 });
</script>

<template>
    <div class="main-container">
        <div class="product-container">
            <img v-if="product" :src="product.image" alt="">
            <div v-else>
                Aucun produit n'a été trouvé
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>