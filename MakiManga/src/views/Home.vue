<script setup lang="ts">
import Carousel from '@/components/Carousel.vue';
import { ProductRepository } from '../repositories/ProductRepository';

let repo: ProductRepository = new ProductRepository();
repo.
</script>

<template>
<div class="main-container">
    <div class="background">
        <img class="image1" src="../assets/img/BleuGirl.png" alt="">
        <img class="image2" src="../assets/img/Miku.png" alt="">
        <div class="container-carousel">
            <Carousel />
        </div>
    </div>

    <div class="container-news">
        <div class="card">

        </div>
    </div>

    
    <div class="parallax-effect-1">
        <div class="container-line1">
            <div class="lineBlue1"></div>
            <div class="lineBlue2"></div>
        </div>
        <div class="container-line2">
            <div class="lineBlue2"></div>
            <div class="lineBlue1"></div> 
        </div>
    </div>

    
    

    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ducimus nesciunt, id iste, ab dolore nam in aspernatur explicabo, error quod aperiam excepturi velit fugiat! Facilis numquam saepe rerum dolore!</p>
</div>
</template>

<style scoped lang="scss">

.main-container {
    .background {
        background-image: url("../assets/img/Fond2.jpg");
        background-size: cover;
        height: 85vh;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        .image1 {
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 1;
        }

        .image2 {
            position: absolute;
            bottom: 0;
            right: 0;
            z-index: 1;
        }

        .container-carousel {
            height: 600px;
            width: 1000px;
            background-color: #1C2942;
            border-radius: 15px;
            padding: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .parallax-effect-1 {
        background-image: url("../assets/img/GirlFlower.jpg");
        z-index: 1;
        height: 400px;
        background-attachment: fixed;
        background-size: cover; 
        background-position: center;
        background-repeat: no-repeat;
        background-position-y: 400px;
    }

    .container-line2 {
        display: inline;
        .lineBlue1 {
            height: 50px;
            background-color: #1C2942;
            opacity: 90%;
            width: 100%;
            rotate: 175deg;
            position: relative;
            float: right;
            top: 205px;
        }
        .lineBlue2 {
            height: 50px;
            background-color: #1C2942;
            opacity: 90%;
            rotate: 5deg;
            width: 100%;
            position: relative;
            top: 253px;
        }
    }

    .container-line1 {
        display: inline;
        .lineBlue1 {
            height: 50px;
            background-color: #1C2942;
            opacity: 90%;
            rotate: 176deg;
            position: relative;
            top: -9;
        }
        .lineBlue2 {
            height: 50px;
            background-color: #1C2942;
            opacity: 90%;
            rotate: 2deg;
            position: relative;
            top: -9px;
        }
    }
}
    
</style>