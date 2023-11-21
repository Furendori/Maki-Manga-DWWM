<template>
  <div id="app">
    <div class="checkout-container">
      <div class="adresse-container">
        <h2>Adresse de livraison</h2>

        <div class="infos-form">
          <p>Livraison offerte dans toute la france.</p>
        </div>

        <div class="adresse-form">
          <label for="firstName">Prénom</label>
          <input type="text" id="firstName" v-model="firstName" required placeholder="Votre prénom...">

          <label for="lastName">Nom</label>
          <input type="text" id="lastName" v-model="lastName" required placeholder="Votre nom...">

          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required placeholder="Votre email...">

          <label for="address">Adresse</label>
          <input type="text" id="address" v-model="address" required placeholder="Votre adresse...">

          <label for="apartment">Numéro d’appartement, de suite, etc.</label>
          <input type="text" id="apartment" v-model="apartment" placeholder="Votre numéro d'appartement...">

          <label for="postalCode">Code postal</label>
          <input type="text" id="postalCode" v-model="postalCode" required placeholder="Votre code postal...">

          <label for="city">Ville</label>
          <input type="text" id="city" v-model="city" required placeholder="Votre ville...">

          <label for="phone">Téléphone (optionnel)</label>
          <input type="text" id="phone" v-model="phone">
        </div>
      </div>

      <div class="cart-container paiement-container">
        <h2>Votre Panier</h2>
        <ul>
          <li v-for="(item, index) in cartItems" :key="index">
            {{ item.name }} - {{ item.price }} €
          </li>
        </ul>
        <div class="total">Total à payer : {{ calculateTotal() }} €</div>

        <div class="promo-code">
        <label for="promoCode">Code promo :</label>
        <input type="text" id="promoCode" v-model="promoCode" placeholder="Code promo...">
        <button @click="applyPromoCode">Appliquer</button>
        </div>
        <h2>Paiement par carte</h2>

        <div class="payment-details">
          <label for="cardNumber">Numéro de carte :</label>
          <input type="text" id="cardNumber" v-model="paymentInfo.cardNumber" required>

          <label for="expiryDate">Date d'expiration :</label>
          <input type="text" id="expiryDate" v-model="paymentInfo.expiryDate" placeholder="MM/YYYY" required>

          <label for="ccv">CCV :</label>
          <input type="text" id="ccv" v-model="paymentInfo.ccv" required>
        </div>

        <button type="submit" @click="processPayment">Payer</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.checkout-container {
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 20px;
  border: 2px solid #1c2942;
  color: black;
  background-color: #ffffff;
}

.adresse-container,
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
  border-radius: 30px;
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
      promoCode: "",
      paymentInfo: {
        cardNumber: "",
        expiryDate: "",
        ccv: "",
      },
    };
  },
  methods: {
    login() {
      this.loggedIn = true;
    },
    calculateTotal() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    },
    applyPromoCode() {
      console.log("Code promo appliqué :", this.promoCode);
    },
    processPayment() {
    },
  },
};
</script>
