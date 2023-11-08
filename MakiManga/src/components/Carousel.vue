<script setup lang="ts">
import { ref } from 'vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const products = ref([
    {
        image: "https://www.manga-news.com/public/images/series/Les_Carnets_de_l_Apothicaire_1.jpg"
    }
])

</script>

<template>
    <swiper 
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
    delay: 2500,
    disableOnInteraction: false,
    }"
    :pagination="{
        clickable: true,
    }"
    :navigation="true"
    :modules="[Autoplay, Pagination, Navigation]"
    class="mySwiper"
    >
        <swiper-slide class="carousel-product" v-for="product in products">
            <img :src="product.image" alt="">
        </swiper-slide>
    </swiper>
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

.swiper-slide img {
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: cover;
  height: 600px;
  width: 429px;
  z-index: -1 !important;
}

.carousel-product {
    border-radius: 15px;
    background-color: transparent;
}
</style>

