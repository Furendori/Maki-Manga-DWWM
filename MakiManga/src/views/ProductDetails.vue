<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { ProductRepository } from '../repositories/ProductRepository';

const route = useRoute();
const product = ref([]);
const isLoading = ref(true);

const repo: ProductRepository = new ProductRepository();

const getProduct = () => {
    repo.getProduct(route.params.id);
}

onMounted(() => {
    getProducts();
 });
</script>

<template>
Bienvenue
</template>

<style scoped lang="scss">
</style>