<template>
  <footer>
    <hr />
    <div class="footer-content">
      <div class="account">
        <p>Votre compte</p>
        <a href="#">Informations personnelles</a>
        <a href="#">Panier</a>
        <a href="#">Inscription</a>
        <a href="#">Connexion</a>
      </div>

      <div class="socials-content">
        <p>Réseaux Sociaux</p>
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
  </footer>
</template>

<style scoped>
footer {
  background-color: #1c2942;
  color: white;
}

hr {
  margin-top: 5%;
}

p {
  font-weight: bolder;
  font-size: 20px;
}

a {
  text-decoration: none;
  color: black;
  font-size: 15px;
  color: white;
  margin-bottom: 5%;
}

.footer-content {
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
