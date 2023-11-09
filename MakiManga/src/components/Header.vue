<template>
    <header>
        <router-link to="/"><img src="../assets/img/LOGO_MAKI_MANGA.png" alt=""></router-link>
        <nav>
            <router-link to="#">LICENCES</router-link>
            <router-link to="#">PRODUITS</router-link>
            <router-link to="#">CONTACT</router-link>
            <button><i class="fa-solid fa-magnifying-glass fa-lg" style="color: #ffffff;"></i></button>
            <div class="icons">
                <router-link to=""><i class="fa-solid fa-bag-shopping fa-lg" style="color: #ffffff;"></i></router-link>
                <router-link to="./Login"><i class="fa-solid fa-circle-user fa-2xl" style="color: #ffffff;"></i></router-link> 
            </div>
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
        margin-left: 20px;
    }

    nav {
        font-family: 'Koulen', display;
        margin-right: 20px;
        display: flex;
        align-items: center;

        a {
            color: white;
            margin: 5px;
            border-left: white 2px;
        }
        
        button {
            background-color: #5FC2BA;
            height: 50px;
            width: 50px;
            border-radius: 60%;
            cursor: pointer;
            border: none;
        }
        
        .icons {
            margin: 5px;
            margin-left: 150px;
        }
    }
}
</style>