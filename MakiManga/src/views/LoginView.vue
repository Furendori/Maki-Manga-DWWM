<template>

  <div id="app">
    <div class="login-container">
      <div class="login">
        <img src="../assets/img/itachi.png" alt="" width="130">
        <div class="login-header">
          <h3>Connexion</h3>
        </div>
        <form @submit="login">
          <div class="form-group">
            <label for="email">E-mail *</label>
            <input type="email" id="email" class="form-control" required placeholder="Votre e-mail...">
          </div>
          <div class="form-group">
            <label for="password">Mot de passe *</label>
            <input type="password" id="password" class="form-control" required placeholder="Votre mot de passe...">
          </div>
          <div class="remember-me">
            <input type="checkbox" id="checkbox">
            <label for="checkbox">Se souvenir de moi</label>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">Se connecter</button>
          </div>
          <div class="no-register">
            <p>Vous n'avez pas de compte ? <router-link to="./Register"><strong>S'inscrire.</strong></router-link></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>

.login {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.login-header {
  background: #1c2942;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px 20px 0 0;
  color: #fff;
}

form {
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  border: 2px solid #1c2942;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.form-group {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

h3 {
  font-size: 30px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
  text-transform: uppercase;
}

label {
  display: block;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
  font-size: 15px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

input[type="email"],
input[type="password"] {
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  background: gainsboro;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

button {
  align-items: center;
  padding: 10px 20px;
  background-color: #1c2942;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 15px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-transform: uppercase;
}

button:hover {
  background-color: #0056b3;
}

/*  "Se souvenir de moi" */
.remember-me {
  display: flex;
  flex-direction: row;
  margin-left: 38%;
}

input[type="checkbox"] {
  margin-right: 10px;
}

/* No register et images */
.no-register {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

img.right-image,
img.left-image {
  margin: 90px;
}

.login-container {
  background: #ffffff;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
