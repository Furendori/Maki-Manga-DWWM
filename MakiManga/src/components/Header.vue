<script>

// animation de la barre de recherche
function setSearch(oEvent){
  console.log(oEvent); 
  oEvent.preventDefault();
  var sType = oEvent.type,
      sClass =  "search",
      oSearch = oEvent.currentTarget,
      oForm  =  oSearch.form; 
  if((sType == 'focus' || sType == 'click') && !oForm.classList.contains(sClass)){
    oForm.classList.add(sClass)
  }else if(sType == 'blur' && oSearch.value.trim() == ''){
    oForm.classList.remove(sClass)
  }
}

document.addEventListener('DOMContentLoaded',function(){
  var oInput = document.forms["form-search"]["search"];
  oInput.addEventListener('focus',setSearch)
  oInput.addEventListener('blur',setSearch);
  
  document.getElementById("bt-search").addEventListener('click', function(oEvent){
    oEvent.preventDefault();oInput.focus() ;
  });
});

// menu burger
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>


<template>
    <header>
      <router-link to="/">
        <img src="../assets/img/LOGO_MAKI_MANGA.png" alt="">
      </router-link>
  
      <div class="hamburger" @click="toggleMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
  
      <nav :class="{ 'show-menu': isMenuOpen }">
        <router-link to="../Search">LICENCES</router-link>
        <router-link to="#">PRODUITS</router-link>
        <router-link to="#">CONTACT</router-link>
  
        <div id="research">
          <form id="form-search" action="?">
            <input type="text" id="search" name="search" placeholder="Saisir votre recherche">
            <i class="fa-solid fa-magnifying-glass fa-lg" id="bt-search" style="color: #ffffff;"></i>
            <i class="material-icons" id="bt-close">close</i>
          </form>
        </div>
  
        <div class="icons">
          <router-link to=""><i class="fa-solid fa-bag-shopping fa-lg" style="color: #ffffff;"></i></router-link>
          <router-link to="./Login"><i class="fa-solid fa-circle-user fa-2xl" style="color: #ffffff;"></i></router-link>
        </div>
      </nav>
    </header>
  </template>

<style scoped lang="scss">

header {
    background-color: #1C2942;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0; 
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
        max-width: 100%;

        a {
            color: white;
            margin: 10px;
            text-align: center;
            text-decoration: none;
        }
        .icons {
            margin: 5px;
            margin-left: 90px;
        }
    }
}

div.icons {
    display: flex;
}

#form-search {
    box-sizing: border-box;
    padding: 5px;
    width: 40px;
    height: 40px;
    background: #5FC2BA;
    color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    font-size: 10px;
    -moz-transition: width .5s, border-radius .5s;
    -o-transition: width .5s, border-radius .5s;
    -ms-transition: width .5s, border-radius .5s;
    -webkit-transition: width .5s, border-radius .5s;
    transition: width .5s, border-radius .5s;
}

#search {
    box-sizing: border-box;
    appearance: none;
    width: 0px;
    height: 20px;
    margin: 0;
    padding: 0;
    background: #5FC2BA;
    color: rgb(255, 255, 255);
    font-size: 20px;
    border: none;
    -moz-transition: width .5s;
    -o-transition: width .5s;
    -ms-transition: width .5s;
    -webkit-transition: width .5s;
    transition: width 0.5s;
}

#form-search.search {
    width: 400px;
    justify-content: space-between;
    border-radius: 40px;
}

#form-search.search #search {
    width: 100%;
    margin-left: 8px;
    padding: 2px;
}

#form-search.search #bt-close {
    display: inline-block;
}

#bt-close, #form-search.search #bt-search {
    display: none;
}

#bt-close, #bt-search {
    cursor: pointer;
}

@media only screen and (max-width: 768px) {

    header {
        flex-direction: column;
        width: 100%;
    }

    nav {
        margin-top: 20px;
        width: 100%;
    }

    .icons {
        margin-left: 0;
    }

    #bt-search, #bt-close {
        display: inline-block;
    }

    #bt-close, #form-search.search #bt-search {
        display: none;
        width: 150px;
    }

    #form-search.search {
        width: 100%;
        border-radius: 40px;
    }  
}

.hamburger {
  display: none;
  cursor: pointer;
}

.bar {
  width: 40px;
  height: 3px;
  background-color: #fff;
  margin: 3px 0;
  transition: 0.4s;
}
.show-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .hamburger {
    display: block;
  }

  nav {
    display: flex;
  }

  nav.show-menu {
    display: flex;
  }
  div.icons {
    display: flex;
  }
}
</style>
