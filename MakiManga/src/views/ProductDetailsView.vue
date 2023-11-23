<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { ProductRepository } from '@/repositories/ProductRepository';
import type { ProductInterface } from '@/interfaces/ProductInterface';
import Button from '@/components/Button.vue';
import { useCounterStore } from '../stores/counter'; 

const route = useRoute();
const product = ref<ProductInterface>();
const isLoading = ref(true);
const productId: string = route.params.id as string;
const repo: ProductRepository = new ProductRepository();
const counterStore = useCounterStore(); 
const getProduct = async () => {
    try {
        product.value = await repo.getProduct(productId);
        isLoading.value = false; 
    } catch (error) {
        console.log('Erreur lors de la récupération du produit:', error);
    }
}

const addToCart = () => {
    if (product.value) {
        counterStore.addToCart(product.value);
    }
}

onMounted(() => {
    getProduct();
});


</script>

<template>
    <div class="main-container">
        <div v-if="product" class="product-container">
            <h2>Figurine {{ product.name }} - {{ product.licence }}</h2>
            <div  class="product-details">
                <div class="container-img">
                    <img v-if="product.image !== undefined" :src="product.image" :alt="product.name">
                    <div v-else>
                        Aucune image n'a été trouvée
                    </div> 
                </div>
                <div class="description-product">
                    <h3>Description</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae accusantium placeat provident illo rerum modi id nostrum expedita eligendi autem? Obcaecati fugit modi eius cupiditate aliquid vero nostrum ea asperiores.
                        Suscipit maiores ipsa nam eveniet praesentium inventore enim quis voluptatibus possimus at! Itaque dolor nemo quae voluptas ex doloremque blanditiis accusantium impedit error quis nam ratione excepturi, dicta, magni porro?
                    </p>
                    <p class="product-price">{{ product.price }}€</p>
                    <Button @click="addToCart">Ajouter au panier</Button>
                </div>
            </div>
        </div>

        <div v-else>
            Aucun produit n'a été trouvé
        </div>
    </div>
</template>

<style scoped lang="scss">
.main-container{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    .product-container{
        display: flex;
        flex-direction: column;
        border: 3px solid $primary-color;
        padding: 10px;
        border-radius: 10px;

        .product-details {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 15px;
            .container-img {
                height: 450px;

                img {
                    object-fit: cover;
                    height: 450px;
                }
            }

            .description-product {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                text-align: start;
                margin: 15px;
                width: 300px;

                .product-price {
                    font-size: 1.4rem;
                }
            }
        }

        
    }
}
</style>