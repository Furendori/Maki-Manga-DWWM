<template>
  <footer>
    <div class="footer-content">
      <div class="categories">
        <div class="account">
          <h3>Votre compte</h3>
          <a href="/myaccount">Informations personnelles</a>
          <a href="#">Panier</a>
          <a href="/register">Inscription</a>
          <a href="/login">Connexion</a>
        </div>

        <div class="socials-content">
          <h3>Réseaux Sociaux</h3>
          <a href="https://twitter.com/" target="_blank"
            ><img
              id="twitter-img"
              src="../assets/img/twitter.svg"
              alt=""
            />Twitter</a
          >
          <a href="https://www.facebook.com/" target="_blank"
            ><img
              id="facebook-img"
              src="../assets/img/facebook-f.svg"
              alt=""
            />Facebook</a
          >
          <a href="https://www.instagram.com/" target="_blank"
            ><img
              id="instagram-img"
              src="../assets/img/instagram.svg"
              alt=""
            />Instagram</a
          >
        </div>
      </div>
      
      <p>&copy; MakiManga 2023 - Tous Droits Réservés</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #1c2942;
  color: white;
}

a {
  text-decoration: none;
  color: black;
  font-size: 1.1rem;
  color: white;
  margin-bottom: 5%;
  font-family: Arial, Helvetica, sans-serif;
}

p {
  align-self: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
}

.categories{
  display: flex;
  justify-content: space-evenly;
}

.account {
  display: flex;
  flex-direction: column;
}

.socials-content {
  display: flex;
  flex-direction: column;
}

#facebook-img {
  height: 20px;
  filter: brightness(0) invert(1);
  margin-right: 18px;
}

#twitter-img {
  height: 20px;
  filter: brightness(0) invert(1);
  margin-right: 10px;
}

#instagram-img {
  height: 20px;
  filter: brightness(0) invert(1);
  margin-right: 13px;
}
</style>
