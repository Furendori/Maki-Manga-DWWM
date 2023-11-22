<script setup>

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
</script>

<template>
  <section class="top-nav">
    <div>
      <router-link to="/">
        <img src="../assets/img/LOGO_MAKI_MANGA.png" alt="" width="145">
      </router-link>
    </div>

    <div id="research">
      <form id="form-search" action="?">
        <input type="text" id="search" name="search" placeholder="Saisir votre recherche">
        <i class="fa-solid fa-magnifying-glass fa-2xl" id="bt-search" style="color: #ffffff;"></i>
        <i class="material-icons" id="bt-close">close</i>
      </form>
    </div>

    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
      <div class='menu-button'></div>
    </label>
    <ul class="menu">
      <li><router-link to="/licences" @click="closeMenu">LICENCES</router-link></li>
      <li><router-link to="/products" @click="closeMenu">PRODUITS</router-link></li>
      <li><router-link to="/Contact" @click="closeMenu">CONTACT</router-link></li>
      <li><router-link to="/Panier" @click="closeMenu"><i class="fa-solid fa-bag-shopping fa-lg"
            style="color: #ffffff;"></i></router-link></li>
      <li><router-link to="/Login" @click="closeMenu"><i class="fa-solid fa-circle-user fa-2xl"
            style="color: #ffffff;"></i></router-link></li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.top-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: $primary-color;
  color: $secondary-color;
  height: 130px;
  padding: 1em;
  font-size: 1.2rem;
}

#form-search {
    box-sizing: border-box;
    padding: 5px;
    width: 50px;
    height: 50px;
    background: $tertiary-color;
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
    background: $tertiary-color;
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
    width: 450px;
    justify-content: space-between;
    border-radius: 40px;
}

#form-search.search #search {
    width: 100%;
    margin-left: 8px;
    padding: 2px;
}

div#research {
  margin-left: auto;
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

#bt-close {
  font-size: 25px;
  padding-right: 10px;
  padding-left: 10px;
}

.menu {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: $primary-color;
  }


  .menu a {
    display: block;
    color: $secondary-color;
    text-decoration: none;
    padding: 1em;
  }


ul.menu {
  list-style-type: none;
  margin: 130px 0;
  padding: 0;
}

.menu li {
  margin: 10px;
  overflow: hidden;
  height: none;
}

.menu-button-container {
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#menu-toggle {
  display: none;
}

.menu-button, .menu-button::before, .menu-button::after {
  display: block;
  background-color: $secondary-color;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
}

.menu-button::before {
  content: '';
  margin-top: -8px;
}

.menu-button::after {
  content: '';
  margin-top: 8px;
}

#menu-toggle:checked + .menu-button-container .menu-button::before {
  margin-top: 0px;
  transform: rotate(405deg);
}

#menu-toggle:checked + .menu-button-container .menu-button {
  background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked + .menu-button-container .menu-button::after {
  margin-top: 0px;
  transform: rotate(-405deg);
}

@media (max-width: 700px) {
  .menu-button-container {
    display: flex;
  }
  .menu {
    position: absolute;
    top: 0;
    margin-top: 50px;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  #menu-toggle ~ .menu li {
    height: 0;
    margin: 0;
    padding: 0;
    border: 0;
    transition: height 1s cubic-bezier(0.23, 1, 0.32, 1);
  }
  #menu-toggle:checked ~ .menu li {
    border: 1px solid #333;
    height: 4em;
    padding: 0.5em;
    transition: height 1s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .menu > li {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0.5em 0;
    width: 100%;
    color: $secondary-color;
    background-color: $primary-color;
  }
  .menu > li:not(:last-child) {
    border-bottom: 1px solid #000000;
  }
  div#research {
      width: -50%;
      float: right;
  }
}
</style>
