<template>
<h3>Nos univers</h3>

<div class="universes">
    <img class="img1" src="https://upload.wikimedia.org/wikipedia/fr/thumb/1/1a/Logo_One_piece.svg/800px-Logo_One_piece.svg.png" alt="">
    <img class="img2" src="https://upload.wikimedia.org/wikipedia/fr/3/33/Carnets_manga_fr_logo.png" alt="">
    <img class="img3" src="https://upload.wikimedia.org/wikipedia/de/2/2c/The_Rising_of_the_Shield_Hero_Anime_Logo.svg" alt="">
    <img class="img4" src="https://upload.wikimedia.org/wikipedia/fr/7/77/Fairy_Tail_%282014%29_Logo.png" alt="">
    <img class="img5" src="https://upload.wikimedia.org/wikipedia/commons/0/02/Assassination_Classroom_logo.png" alt="">
</div>
</template>

<style scoped lang="scss">
h3 {
    text-align: center;
    font-size: 2rem;
}
    .universes {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 125px;
            margin: 10px;
        }

        .img1 {
            width: 300px;
        }
        .img2 {
            height: 100px;
            width: 300px;
        }

        .img3 {
            width: 200px;
            height: 185px;
        }

        .img4 {
            width: 300px;
            height: 100px;
        }

        .img5 {
            width: 400px;
        }
    }
</style>