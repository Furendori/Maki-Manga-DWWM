<script>
import { useCounterStore } from '../stores/counter';
const { cart, removeFromCart, clearCart, total } = useCounterStore();

export default {
  data() {
    return {
      loggedIn: false,
      lastName: '',
      email: '',
      address: '',
      apartment: '',
      postalCode: '',
      city: '',
      phone: '',
      saveAddress: false,
      sendOffers: false,
      deliveryCost: 3,
      promoCode: '',
      promoApplied: false,
      paymentInfo: {
        cardNumber: '',
        expiryDate: '',
        ccv: '',
      },
      cartItems: [
        {
          id: 1,
          name: 'Produit 1',
          image: '/path/to/maki-image.jpg',
          price: 69,
          quantity: 1,
        }
      ],
    };
  },
  methods: {
    calculateDeliveryCost() {
      if (this.saveAddress) {
        this.deliveryCost = 0;
      }
    },
    removeItem(index) {
      removeFromCart(index);
    },
    calculateSubtotal() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    },
    calculateTotal() {
      return this.calculateSubtotal() + this.deliveryCost;
    },
    applyPromoCode() {
      if (!this.promoApplied && this.promoCode === 'MAKI10') {
        console.log('Code promo appliqué :', this.promoCode);
        const discountPercentage = 0.10;
        const discountAmount = this.calculateSubtotal() * discountPercentage;
        this.cartItems = this.cartItems.map(item => ({
          ...item,
          price: item.price - discountAmount,
        }));
        this.promoApplied = true;
      } else {
        console.log('Code promo invalide ou déjà appliqué');
      }
    },
  },
};
</script>



<template>
  <div id="app">
    <div class="checkout-container">

      <div class="adresse-container">
        <div class="infos-form">
        </div>
        <div class="adresse-form">
          <h1>Contact</h1>
          <label for="lastName"></label>
          <input type="text" id="lastName" v-model="lastName" required placeholder="Votre nom...">

          <label for="email"></label>
          <input type="email" id="email" v-model="email" required placeholder="Votre email...">

          <h1>Livraison</h1>
          <label for="address"></label>
          <input type="text" id="address" v-model="address" required placeholder="Votre adresse...">

          <label for="apartment">Numéro d’appartement, de suite, etc...</label>
          <input type="text" id="apartment" v-model="apartment" placeholder="Votre numéro d'appartement...">

          <label for="postalCode">Code postal</label>
          <input type="text" id="postalCode" v-model="postalCode" required placeholder="Votre code postal...">

          <label for="city">Ville</label>
          <input type="text" id="city" v-model="city" required placeholder="Votre ville...">

          <label for="phone">Téléphone (optionnel)</label>
          <input type="text" id="phone" v-model="phone" placeholder="Votre téléphone...">
        </div>
        
         <div class="paiement-container">
          <h2>Carte de crédit</h2>
          <div class="paiement-details">
            <label for="cardNumber">Numéro de carte :</label>
            <input type="text" id="cardNumber" v-model="paymentInfo.cardNumber" required placeholder="**** **** **** ****">

            <label for="expiryDate">Date d'expiration :</label>
            <input type="text" id="expiryDate" v-model="paymentInfo.expiryDate" placeholder="MM/YYYY" required>

            <label for="ccv">CCV :</label>
            <input type="text" id="ccv" v-model="paymentInfo.ccv" required placeholder="***">
          </div>

         
        </div>
          <button type="submit" @click="processPayment">Valider</button>
          <h5>Paiement sécurisé</h5>
          <img src="../assets/img/logo-cart.png" alt="" width="150">
      </div>

      <!-- separateur -->
              <div class="separateur"></div>

              <div class="cart-container">
        <h2>Votre Panier</h2>
        <ul>
          <li v-for="(item, index) in cartItems" :key="index">
            <div>
              <img :src="item.image" alt="Product Image" style="width: 100px; height: 130px;">
              {{ item.name }} - {{ item.price }} €
            </div>
          </li>
        </ul>
        <div class="subtotal">Sous-total : {{ calculateSubtotal() }} €</div>
        <div class="delivery">Livraison : {{ deliveryCost }} €</div>
        <div class="total">Total à payer : {{ calculateTotal() }} €</div>

        <div class="promo-code">
          <label for="promoCode"></label>
          <input type="text" id="promoCode" v-model="promoCode" placeholder="Code promo...">
          <button @click="applyPromoCode">Appliquer</button>
        </div>
      </div>
        </div>
        <h4>Merci de votre confiance.</h4>
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
  color: rgb(0, 0, 0);
  background-color: #ffffff;
}

h1 {
  margin: 0;
}
.adresse-container {
  width: 60%;
}

.separateur {
  width: 1px;
  background-color: #000000;
  margin: 0 20px;
}

.cart-paiement-container {
  display: flex;
  width: 40%;
}


.paiement-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #1c2942;
  color: #ffffff;
  padding: 20px;
  border-radius: 15px;
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
}
.paiement-details {
  margin: 0 auto;
  width: 75%;
}

label {
  display: block;
  margin-bottom: 3px;
  margin: 5px;
}

input {
  width: 90%;
  height: 44px;
  padding: 8px;
  margin-bottom: 8px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #1c2942;
  background: #e8e8e8;
  font-style: italic;
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
  width: 200Px;
  height: 50px;
  border-radius: 10px;
}
.cart-paiement-container {
  display: flex;
  flex-direction: column;
  justify-content:right;
}
.checkout-container {
  background: rgb(255, 255, 255);
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  padding: 20px;
  display: flex;
  width: 60%;
}

@media screen and (max-width: 600px) {
  .checkout-container {
    flex-direction: column;
    width: 90%;
    align-items: center;
  }

  .adresse-container,
  .cart-paiement-container,
  .cart-container,
    .paiement-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .separateur {
    width: 100%;
    margin: 20px 0;
  }
}
</style>



