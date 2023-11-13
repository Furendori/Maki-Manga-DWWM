<script setup lang="ts">
import { ref } from 'vue';

const optionsObject = ref([
  {
    name: "Question sur un article"
  }, {
    name: "Question sur une commande"
  }, {
    name: "Problème avec un produit - SAV (Service après vente)"
  }, {
    name: "Autres"
  }])
const name = ref("")
const email = ref("")
const objectSelect = ref("")
const subject = ref("")
</script>

<template>
  <div class="main-container">
    <h2>Contact</h2>
    <div class="container-form">
      <form action="POST" @submit.prevent="submit">
        <label for="inputName">Name* :</label>
        <input v-model="name" type="text" id="inputName" name="name" required/>

        <label for="inputEmail">Email* :</label>
        <input type="email" id="inputEmail" name="email" v-model="email" required/>

        <select v-model="objectSelect">
          <option disabled value="">Sélectionner un l'objet de votre message</option>
          <option v-for="optionObject in optionsObject" :value="optionObject.name">
            {{optionObject.name}}
          </option>
        </select>

        <label for="inputSubject">Sujet* :</label>
        <input v-model="subject" type="text" id="inputSubject" name="subject" required>

        <label for="textArea">Message* :</label>
        <textarea name="text" id="textArea" cols="80" rows="20"></textarea>

        <input type="submit" value="Create">
      </form>
    </div>
  </div>
  
</template>

<style scoped lang="scss">
.main-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 0;
  }

  .container-form {
    background-color: #1C2942;
    padding: 20px;
    border-radius: 15px;
    form {
      display: flex;
      flex-direction: column;

      label, input, select {
        margin-top: 5px;
      }
    }
  }
}
</style>
