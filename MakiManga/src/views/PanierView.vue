  <script>
  export default {
    data() {
      return {
        cartItems: [
          { name: 'Nom figurine', price: 20 },
          { name: 'Nom figurine', price: 30 },
          { name: 'Nom figurine', price: 40 },
        ],
      };
    },
    methods: {
      removeItem(index) {
        this.cartItems.splice(index, 1);
      },
      calculateTotal() {
        return this.cartItems.reduce((total, item) => total + item.price, 0);
      },
    },
  };
  </script>
  
  
  <template>
    <div id="app">
      <div class="cart">
        <h2>Votre Panier</h2>
        <p v-if="cartItems.length === 0">Votre panier est vide</p>
        <ul>
          <li v-for="(item, index) in cartItems" :key="index">
            {{ item.name }} - {{ item.price }} €
            <button @click=" removeItem(index)">Supprimer</button>
          </li>
        </ul>
        <div class="total">Sous-total {{ calculateTotal() }} € <p>Livraison offerte à partir de 80€ d'achat</p></div>
        <router-link to="/Paiement"> <button>Procéder au paiement</button> </router-link>
      </div>
    </div>
  </template>
  

  
  <style scoped>
  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .cart {
    border: 3px solid #1c2942;
    width: 100%;
    padding: 20px;
  }

div.cart {
  align-items: center;
  justify-content: center;
  height: auto;
  width: 80%;
  margin: 10px auto;
  padding: 10px 20px;
}
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  p{
    font-size: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: gray;
  }
  button {
    background-color: #5fc2b9;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 20px;
  }
  
  .total {
    margin-top: 10px;
    font-weight: bold;
  }
  </style>
  