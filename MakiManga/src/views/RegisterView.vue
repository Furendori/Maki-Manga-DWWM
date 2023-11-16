<script setup lang="ts">
import { ref } from "vue";
import router from "../router/index";
import { UserRepository } from '../repositories/UserRepository';

const repo: UserRepository = new UserRepository();

let userFirstName = ref("");
let userLastName = ref("");
let userEmail = ref("");
let userPassword = ref("");
let userPhone = ref(0);
let sent = ref();

let registerUserData = async () => {
  try {
     await repo.createUser({
      firstName: userFirstName.value,
      lastName: userLastName.value,
      password: userPassword.value,
      phone: userPhone.value,
      email: userEmail.value,
     });
     
    router.push({ path: '/' })
    
  } catch (error) {
    console.error("Erreur lors de l'envoi de la requête", error);
  }
};
</script>

<template>
  <img class="remi" src="../assets/img/latest.png" alt="" />
  <p v-show="sent && sent != ''">{{ sent ? "Données envoyées avec succès" : "Problème" }}</p>
  <form action="" class="centered-form" @submit.prevent="registerUserData">
    <div class="form-content">
      <div class="form-header">
        <h2 class="inscrip">Inscription</h2>
        <p>(Les champs marqués avec * sont obligatoires)</p>
      </div>

      <div class="form-info">
        <label for="firstName">Prénom : *</label>
        <input type="text" id="firstName" v-model="userFirstName" />

        <label for="lastName">Nom : *</label>
        <input type="text" id="lastName" v-model="userLastName" />

        <label for="email">Email : *</label>
        <input type="email" id="email" v-model="userEmail" />

        <label for="password">Mot de passe : *</label>
        <input type="password" id="password" v-model="userPassword" />

        <label for="passwordConfirm">Confirmation du mot de passe : *</label>
        <input type="password" id="passwordConfirm" />

        <label for="phone">Numéro de téléphone :</label>
        <input type="tel" id="phone" v-model="userPhone" />

        <input type="checkbox" name="termsAgree" id="termsConditions" />
        <label for="termsConditions" class="terms-check"
          >J'ai lu et j'accepte les termes et conditions</label
        >

        <input class="submit-btn" type="submit" value="Envoyer" />
      </div>
    </div>
  </form>
  <img class="maomao" src="../assets/img/character.png" alt="" />
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.inscrip {
  top: 5%;
  margin: 0;
}

.form-header {
  background-color: #1c2942;
  color: rgb(221, 220, 220);
  border-top-left-radius: 70px;
  border-top-right-radius: 70px;
}

.centered-container {
  text-align: center;
}

.centered-form {
  display: inline-block;
  text-align: left;
  border: 2px solid #1c2942;
  border-radius: 70px;
  width: 50%;
  margin-bottom: 50px;
}

.form-content {
  text-align: center;
}

.form-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
}

.form-info label {
  width: 250px;
}

.form-info input {
  width: 50%;
}

.form-info label {
  margin-top: 5px;
  margin-bottom: 10px;
}
.form-info input {
  margin-top: 5px;
  margin-bottom: 10px;
}

form {
  border-radius: 20px;
  width: 30%;
  margin-left: 23%;
  margin-top: 4%;
}

.terms-check {
  margin-top: 10px;
}

.submit-btn {
  border-radius: 5px;
  border-width: 1px;
  padding: 10px;
  border-radius: 15px;
  background-color: #1c2942;
  color: white;
}

.remi {
  height: 400px;
  width: 250px;
  position: absolute;
  top: 35%;
  margin-left: 2%;
}

.maomao {
  height: 400px;
  width: 400px;
  position: absolute;
  right: 0;
  top: 35%;
  margin-right: 1%;
}

@media screen and (max-width: 470px) {
  .remi {
    /* height: 200px;
    width: 120px; */
    display: none;
  }

  .maomao {
    /* height: 200px;
    width: 200px; */
    display: none;
  }

  .centered-form {
    width: 90%;
    margin-left: 20px;
  }
}
</style>
