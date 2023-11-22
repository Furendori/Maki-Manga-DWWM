<template>
  <div id="app">
    <div class="checkout-container">
      <div class="paiement-container">
        <h2>Paiement</h2>

        <div v-if="!loggedIn">
          <p>Vous possédez un compte ? <a @click="login">Ouvrir une session</a></p>
        </div>

        <div class="payment-form">
          <label for="firstName">Prénom</label>
          <input type="text" id="firstName" v-model="firstName" required placeholder="Votre prénom...">

          <label for="lastName">Nom</label>
          <input type="text" id="lastName" v-model="lastName" required placeholder="Votre nom...">

          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required placeholder="Votre email...">

          <label for="address">Adresse</label>
          <input type="text" id="address" v-model="address" required placeholder="Votre adresse...">

          <label for="apartment">Numéro d’appartement, de suite, etc.</label>
          <input type="text" id="apartment" v-model="apartment"  placeholder="Votre numéro d'appartement...">

          <label for="postalCode">Code postal</label>
          <input type="text" id="postalCode" v-model="postalCode" required placeholder="Votre code postal...">

          <label for="city">Ville</label>
          <input type="text" id="city" v-model="city" required placeholder="Votre ville...">

          <label for="phone">Téléphone (optionnel)</label>
          <input type="text" id="phone" v-model="phone" >
        </div>
      </div>

  
      <div class="cart-container">
        <h2>Votre Panier</h2>
        <ul>
          <li v-for="(item, index) in cartItems" :key="index">
            {{ item }} - {{ item.price }} €
          </li>
        </ul>
        <div class="total">Total à payer : {{ calculateTotal() }} €</div>

        <button type="submit">Payer</button>

      </div>
    </div>
  </div>
</template>

<style scoped>
.checkout-container {
  display: flex;
  justify-content: space-between;
width: 70%;  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 20px;
  border: 2px solid #1c2942;
  color: black;
  background-color: #ffffff;
}
.paiement-container,
.cart-container {
  width: 45%;
}

.payment-form {
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 2px solid #1c2942;
  background: #ccc;
}

.checkbox-label-paiement {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    width: 40%;
    height: 7%;
  }

  @media screen and (max-width: 600px) {
    div.paiement-container {
      width: 90%;
    }
    
  }
</style>

<script>
export default {
  data() {
    return {
      loggedIn: false,
      firstName: '',
      lastName: '',
      address: '',
      apartment: '',
      postalCode: '',
      city: '',
      phone: '',
      saveAddress: false,
      sendOffers: false,
      cartItems: [
        { name: 'Produit 1', price: 20 },
        { name: 'Produit 2', price: 30 },
      ],
    };
  },

  methods: {
    login() {
      this.loggedIn = true;
    },
    calculateTotal() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    },
  },
};
</script>
