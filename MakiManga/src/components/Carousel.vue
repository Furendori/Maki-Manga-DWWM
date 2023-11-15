<script setup lang="ts">
import { ref, onMounted } from 'vue';
import '@splidejs/vue-splide/css';
import Splide from '@splidejs/splide';
 
// const splide = new Splide('.splide');

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

// onMounted(() => {
  
// })

</script>

<template>
<!-- <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
    <SplideSlide>
      <img src="image1.jpg" alt="Sample 1">
    </SplideSlide>
    <SplideSlide>
      <img src="image2.jpg" alt="Sample 2">
    </SplideSlide>
  </Splide> -->
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

