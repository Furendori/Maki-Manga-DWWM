<script setup lang="ts">
import { ref } from 'vue';
import router from "../router/index";
import { UserRepository } from "../repositories/UserRepository";

const repo : UserRepository = new UserRepository();

let userFirstName = ref("");
let userLastName = ref("");
let userEmail = ref("");
let userPassword = ref("");
let userNewPassword = ref("");

let updateUserData = async () => {
  try {
    if (
      !userFirstName.value ||
      !userLastName.value ||
      !userPassword.value ||
      !userNewPassword.value ||
      !userEmail.value
    ) {
      // Gestion des champs vides
      return;
    }

    await repo.updateUser(userId, {
      firstName: userFirstName.value,
      lastName: userLastName.value,
      password: userPassword.value,
      newPassword: userNewPassword.value,
      email: userEmail.value,
    });

    router.push({ path: "/" });
  } catch (error) {
    console.error("Erreur lors de l'envoi de la requête", error);
  }
};
</script>

<template>
  <h2>Informations personnelles</h2>
  <div class="infos-form">
    <form action="" class="account-form" @submit.prevent="updateUserData">
      <div class="form-content">
        <div class="info-input">
          <label for="firstName">Prénom : </label>
          <input type="text" id="firstName" />
        </div>

        <div class="info-input">
          <label for="lastName">Nom : </label>
          <input type="text" id="lastName" />
        </div>

        <div class="info-input">
          <label for="mail">Email : </label>
          <input type="email" id="mail" />
        </div>

        <div class="info-input">
          <label for="password">Mot de passe : </label>
          <input type="password" id="password" />
        </div>

        <div class="info-input">
          <label for="newPassword">Nouveau mot de passe : </label>
          <input type="password" id="newPassword" />
        </div>

        <div class="info-input">
          <label for="phone">Téléphone : </label>
          <input type="tel" id="phone" />
        </div>

        <input type="submit" value="Enregistrer" class="submit-btn" />
      </div>
    </form>
  </div>
</template>

<style>
h2 {
  text-align: center;
  margin-top: 30px;
}

.infos-form {
  display: flex;
  justify-content: center;
  margin-top: 4%;
  margin-bottom: 7%;
}

.account-form {
  border: 1px solid #1c2942;
  width: 60%;
  display: flex;
  justify-content: center;
}

label {
  font-size: 24px;
}

.form-content {
  flex-direction: column;
  margin-top: 10px;
}

.info-input {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.submit-btn {
  align-content: center;
  margin-top: 30px;
  margin-bottom: 25px;
  padding: 10px 40px 10px 40px;
  border: 1px solid #1c2942;
  background-color: #1c2942;
  color: white;
  border-radius: 5px;
}

#firstName {
  width: 50%;
  margin-left: 5px;
}

#lastName {
  width: 50%;
  margin-left: 5px;
}

#mail {
  width: 50%;
  margin-left: 5px;
}

#password {
  width: 50%;
  margin-left: 5px;
}

#newPassword {
  margin-left: 5px;
}

#birthDate {
  width: 50%;
  margin-left: 5px;
}
</style>
