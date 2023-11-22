<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
 

const products = ref([
    {
        image: "https://www.manga-news.com/public/images/series/Les_Carnets_de_l_Apothicaire_1.jpg"
    },
    {
        image: "https://www.manga-news.com/public/images/series/Les_Carnets_de_l_Apothicaire_1.jpg"
    },
    {
        image: "https://www.manga-news.com/public/images/series/Les_Carnets_de_l_Apothicaire_1.jpg"
    },
    {
        image: "https://www.manga-news.com/public/images/series/Les_Carnets_de_l_Apothicaire_1.jpg"
    },
]);
</script>

<template>
  <splide>
    <splide-slide v-for="product in products">
      <img :src="product.image">
    </splide-slide>
  </splide>
</template>

<style scoped lang="scss">
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  align-items: center;
  margin-left: 35px;
}

.SplideSlide img {
  display: flex;
  object-fit: cover;
  height: 556px;
  width: 800px;
}

.carousel-product {
    border-radius: 15px;
    background-color: transparent;
}
</style>

