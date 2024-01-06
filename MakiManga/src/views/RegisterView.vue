<script setup lang="ts">
import { computed, ref } from "vue";
import router from "../router/index";
import { UserRepository } from "../repositories/UserRepository";

const repo: UserRepository = new UserRepository();

let userFirstName = ref("");
let userLastName = ref("");
let userEmail = ref("");
let userPasswordConfirm = ref("");
let userPassword = ref("");
let userPhone = ref(0);
let errorMessage = "";

let passwordsMatch = computed(() => {
  return userPassword.value === userPasswordConfirm.value;
});

let registerUserData = async () => {
  try {
    if (
      !userFirstName.value ||
      !userLastName.value ||
      !userPassword.value ||
      !userPasswordConfirm.value ||
      !userEmail.value
    ) {
      errorMessage = "Veuillez remplir les champs obligatoires.";
      return;
    }

    if (!passwordsMatch.value) {
      errorMessage = "Les mots de passe ne correspondent pas.";
      return;
    }

    await repo.createUser({
      firstName: userFirstName.value,
      lastName: userLastName.value,
      password: userPassword.value,
      phone: userPhone.value,
      email: userEmail.value,
    });

    router.push({ path: "/" });

  } catch (error) {
    console.error("Erreur lors de l'envoi de la requête", error);
  }
};
</script>

<template>
  <img class="remi" src="../assets/img/latest.png" alt="" />
  <form action="" class="centered-form" @submit.prevent="registerUserData">
    <div class="form-content">
      <div class="form-header">
        <h2 class="inscrip">Inscription</h2>
        <p>(Les champs marqués avec * sont obligatoires)</p>
      </div>

      <div class="form-info">
        <label for="firstName">Prénom : *</label>
        <input type="text" id="firstName" v-model="userFirstName" required />

        <label for="lastName">Nom : *</label>
        <input type="text" id="lastName" v-model="userLastName" required />

        <label for="email">Email : *</label>
        <input type="email" id="email" v-model="userEmail" required />

        <label for="password">Mot de passe : *</label>
        <input type="password" id="password" v-model="userPassword" required />
        <span class="error-message">{{ errorMessage }}</span>

        <label for="passwordConfirm">Confirmation du mot de passe : *</label>
        <input
          type="password"
          id="passwordConfirm"
          v-model="userPasswordConfirm"
          required
        />
        <span class="error-message">{{ errorMessage }}</span>

        <span v-if="!passwordsMatch" class="error-message">
          Les mots de passe ne correspondent pas.
        </span>
        
        <label for="phone">Numéro de téléphone :</label>
        <input type="tel" id="phone" v-model="userPhone" />

        <input
          type="checkbox"
          name="termsAgree"
          id="termsConditions"
          required
        />
        <label for="termsConditions" class="terms-check">
          J'ai lu et j'accepte les termes et conditions
        </label>

        <input class="submit-btn" type="submit" value="S'inscrire" />
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
  align-items: center;
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
  color: white;
  background-color: #1c2942;
  cursor: pointer;
}

.remi {
  height: 400px;
  width: 250px;
  position: absolute;
  top: 35%;
  left: 3%;
}

.maomao {
  height: 400px;
  width: 400px;
  position: absolute;
  right: 1%;
  top: 35%;
  margin-right: 1%;
}

@media screen and (max-width: 470px) {
  .remi {
    display: none;
  }

  .maomao {
    display: none;
  }

  .centered-form {
    width: 90%;
    margin-left: 20px;
  }
}
</style>
