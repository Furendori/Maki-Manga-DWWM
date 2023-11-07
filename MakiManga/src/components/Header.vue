<template>
    <header>
        <router-link to="/"><img src="../assets/img/LOGO_MAKI_MANGA.png" alt=""></router-link>
        <nav>
            <router-link to="#">Licences</router-link>
            <router-link to="#">Produits</router-link>
            <router-link to="#">Contact</router-link>
        </nav>
    </header>
</template>

<style scoped lang="scss">

 header {
    height: 140px;
    background-color: #1C2942;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        height: 150px;
        width: 150px;
    }

    nav {
        a {
            color: white;
        }
    }
 }
</style>