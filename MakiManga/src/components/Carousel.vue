<script setup lang="ts">
import { ref, defineComponent, type Ref } from 'vue'
import '@splidejs/vue-splide/css';
import Splide from '@splidejs/splide';


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
])

</script>

<template>
<div class="splide">
  <div class="splide__autoplay">
 		<button class="splide__play">Play</button>
 		<button class="splide__pause">Pause</button>
  </div>

  <button class="splide__toggle" type="button">
 	  <span class="splide__toggle__play">Play</span>
 	  <span class="splide__toggle__pause">Pause</span>
  </button>
</div>
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

