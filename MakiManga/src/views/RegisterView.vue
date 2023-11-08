<script setup lang="ts"></script>

<template>
  <form action="">
    <div class="form-content">
      <h2>Inscription</h2>
      <p>(Les champs marqués avec * sont obligatoires)</p>

      <div class="form-info">
        <label for="firstNameInput">Prénom : *</label>
        <input type="text" name="firstName" id="firstNameInput" />

        <label for="lastNameInput">Nom : *</label>
        <input type="text" name="lastName" id="lastNameInput" />

        <label for="emailInput">Email : *</label>
        <input type="email" name="email" id="emailInput" />

        <label for="passwordInput">Mot de passe : *</label>
        <input type="password" name="password" id="passwordInput" />

        <label for="passwordConfirmInput"
          >Confirmation du mot de passe : *</label
        >
        <input
          type="password"
          name="passwordConfirm"
          id="passwordConfirmInput"
        />

        <label for="telInput">Numéro de téléphone :</label>
        <input type="tel" name="phoneNumber" id="telInput" />

        <input type="checkbox" name="termsAgree" id="termsConditions" />
        <label for="termsConditions"
          >J'ai lu et j'accepte les termes et conditions</label
        >

        <input type="submit" value="Envoyer" />
      </div>
    </div>
  </form>
</template>

<style>
body {
  height: 100vw;
}

.form-content {
  text-align: center;
  align-content: center;
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
  width: 20%;
}

.form-info label,
.form-info input {
  margin-bottom: 10px;
}

form {
  border: 1px solid black;
  border-radius: 10px;
  width: 50%;
}
</style>
