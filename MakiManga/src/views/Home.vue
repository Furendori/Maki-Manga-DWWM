<script setup lang="ts">

</script>

<template>

<div class="main-container">
    <div class="background">
        <img class="image1" src="../assets/img/BleuGirl.png" alt="">
        <img class="image2" src="../assets/img/Miku.png" alt="">
        <div class="container-carousel">
            <div class="carousel">

            </div>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">

.main-container {
    .background {
        background-image: url("../assets/img/Background.jpg");
        background-size: cover;
        background-position-y: bottom;
        height: 85vh;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        .image1 {
            position: absolute;
            bottom: 0;
            left: 0;
        }

        .image2 {
            position: absolute;
            bottom: 0;
            right: 0;
        }

        .container-carousel {
            height: 600px;
            width: 1000px;
            background-color: #1C2942;
            border-radius: 15px;
        }
    }
}
    
</style>