<script setup lang="ts">
import Button from '@/components/Button.vue';
import { SendEmailRepository } from '@/repositories/SendEmailRepository';
import { ref } from 'vue';
import router from "../router/index";

const optionsObject = ref([
  {
    name: "Question sur un article"
  }, {
    name: "Question sur une commande"
  }, {
    name: "Problème avec un produit - SAV (Service après vente)"
  }, {
    name: "Autres"
  }]);

const repo: SendEmailRepository = new SendEmailRepository();

const name = ref("")
const email = ref("")
const objectSelect = ref("")
const subject = ref("")
const message = ref("")

const sendEmail = async () => {
  try {
    await repo.sendEmail({
      from: email.value,
      subject: subject.value,
      text: message.value,
      objectSelect: objectSelect.value,
      name:  name.value
    });

    router.push({ path: '/' })

  } catch (error) {
    console.error("Erreur lors de l'envoi de la requête", error);
  }

}
</script>

<template>
  <div class="main-container">
    <h2>Contact</h2>
    <div class="container-form">
      <img src="../assets/img/mangagirl.png" alt="">
      <form action="POST" @submit.prevent="sendEmail">
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
        <textarea v-model="message" name="text" id="textArea" cols="80" rows="20"></textarea>

        <Button type="submit" value="send">Envoyer</Button>
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
  font-family: 'Bebas Neue', display;
  color: $tertiary-color;
  margin-bottom: 18px;

  h2 {
    color: $primary-color;
    margin-bottom: 0;
  }

  .container-form {
    background-color: $primary-color;
    padding: 20px;
    border-radius: 15px;
    position: relative;
    margin: 20px;
    margin-bottom: 20px;

    img {
      height: 300px;
      position: absolute;
      left: 0;
      bottom: 0;
      transform: translate(-10rem);
    }

    form {
      display: flex;
      flex-direction: column;

      label, input, select {
        border: none;
        margin-top: 5px;
        height: 26px;
        transition: 0.2s
      }

      input:focus, select:focus {
        outline-width: 0;
        border: 3px solid $tertiary-color;
      }

      textArea:focus {
        outline-color: $tertiary-color;
      }

      Button {
        margin-top: 5px;
      }
    }
  }
}
</style>
