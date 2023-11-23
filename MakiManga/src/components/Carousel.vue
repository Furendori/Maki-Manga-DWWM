<script setup lang="ts">
import Button from './Button.vue';
</script>

<template>
  <div class="container-carousel">
    <div class="container-img">
      <img src="https://www.manga-news.com/public/images/series/Les_Carnets_de_l_Apothicaire_1.jpg" alt="">
    </div>

    <div class="content-carousel">
      <h2>Les carnets de l'apothicaire</h2>
      <p>Regarder l'animé sur Crunchyroll, de nouveaux épisodes chaque samedi à 19h45 !</p>
      <h3>Résumé</h3>
      <p>Formée dès son plus jeune âge par son père apothicaire, 
        Mao Mao est un jour vendue comme servante au palais de l'empereur. 
        Prisonnière dans les arcanes du pouvoir, elle attire l’attention de Jinshi, 
        un séduisant haut fonctionnaire qui la promeut lorsqu’il découvre 
        son talent pour confectionner des potions. 
        Désormais goûteuse, Mao Mao met ses connaissances au service des gens du palais pour les soigner, 
        mais aussi pour déjouer les mystères et les complots qui se trament…
      </p>
      <Button>Voir les produits associés</Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-carousel {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  height: 80%;
  width: 900px;
  background-color: $primary-color;
  border-radius: 15px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  .container-img {
    display: flex;
    align-items: center;
    height: 100%;

    img {
      height: 500px;
      object-fit: cover;
    }
  }

  .content-carousel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: $secondary-color;
    align-self: flex-start;
    height: 100%;
    margin-left: 10px;

    h3 {
      font-size: 1.2rem;
    }

    p {
      font-family: Arial, Helvetica, sans-serif;
    }

    Button {
      align-self: flex-end;
    }
  }
 }
</style>

