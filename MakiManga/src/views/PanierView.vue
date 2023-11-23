<script setup lang="ts">
import { useCounterStore } from '../stores/counter';

const { cart, removeFromCart, clearCart, total } = useCounterStore();

const removeItem = (index) => {
  removeFromCart(index);
};
</script>


<template>
  <div class="checkout-container">
    <div class="cart">
      <h2>Votre Panier</h2>
      <p v-if="cart.length === 0">Votre panier est vide</p>
      <ul>
        <li v-for="(item, index) in cart" :key="index">
          <div class="cart-item">
            <img :src="item.image" alt="Product Image" style="width: 100px; height: 130px;">
            {{ item.name }} - {{ item.price }} €
            <button @click="removeItem(index)">Supprimer</button>
          </div>
        </li>
      </ul>
      <div class="total">Votre Total est de : {{ total }} €</div>
      <button @click="clearCart">Vider</button>
      <router-link to="/Paiement"> <button>Procéder</button> </router-link>
    </div>
  </div>
</template>


<style scoped>
.checkout-container {
  background: rgb(255, 255, 255);
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
}

h2 {
  margin: 0;
}

.cart {
  width: 100%;
}

p {
  margin-top: 10px;
  color: #555;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

button {
  background-color: #5fc2b9;
  color: #fff;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-transform: uppercase;
  text-align: center;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin: 10px;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 10px;


}

@media screen and (max-width: 600px) {
  .checkout-container {
    width: 90%;
    flex-direction: column;
    align-items: center;
  }

  .cart {
    width: 100%;
  }
}
</style>
