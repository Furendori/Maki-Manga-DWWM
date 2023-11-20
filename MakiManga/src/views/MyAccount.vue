<template>
  <h2>Informations personnelles</h2>
  <div class="infos-form">
    <form action="" class="account-form">
      <div class="form-content">
        <div class="info-input">
          <label for="firstName">Prénom : </label>
          <input type="text" name="firstNameInput" id="firstName" />
        </div>

        <div class="info-input">
          <label for="lastName">Nom : </label>
          <input type="text" name="lastNameInput" id="lastName" />
        </div>

        <div class="info-input">
          <label for="mail">Email : </label>
          <input type="email" name="mailInput" id="mail" />
        </div>

        <div class="info-input">
          <label for="password">Mot de passe : </label>
          <input type="password" name="passwordInput" id="password" />
        </div>

        <div class="info-input">
          <label for="newPassword">Nouveau mot de passe : </label>
          <input type="password" name="newPasswordInput" id="newPassword" />
        </div>

        <div class="info-input">
          <label for="birthDate">Date de naissance : </label>
          <input type="date" name="birthDateInput" id="birthDate" />
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
