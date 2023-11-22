<script>
export default {
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    addItem(item) {
      this.cart.push(item);
    },
    removeItem(index) {
      this.cart.splice(index, 1);
    },
    calculateTotal() {
      let total = 0;
      for (let i = 0; i < this.cart.length; i++) {
        total += this.cart[i].price;
      }
      return total;
    },
  },
};
</script>

<template>
  <div id="app">
    <div class="checkout-container">
      <div class="cart">
        <h2>Votre Panier</h2>
        <p v-if="cart.length === 0">Votre panier est vide</p>
        <ul>
          <li v-for="(item, index) in cart" :key="index">
            {{ item.name }} - {{ item.price }} €
            <button @click="removeItem(index)">Supprimer</button>
          </li>
        </ul>
        <div class="total">Votre Total est de : {{ calculateTotal() }} € <p>Livraison offerte à partir de 80€ d'achat</p></div>
        <router-link to="/Paiement"> <button>Procéder</button> </router-link>
      </div>
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
