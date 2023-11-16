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

</script>


<template>

<meta name="viewport" content="width=device-width, initial-scale=1">
  <section class="top-nav">
    <div>
      <router-link to="/"><img src="../assets/img/LOGO_MAKI_MANGA.png" alt="" width="150"></router-link>
    </div>

    <div id="research">
        <form id="form-search" action="?">
          <input type="text" id="search" name="search" placeholder="Saisir votre recherche">
          <i class="fa-solid fa-magnifying-glass fa-lg" id="bt-search" style="color: #ffffff;"></i>
          <i class="material-icons" id="bt-close">close</i>
        </form>
      </div>
    
      <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
  <ul class="menu">
  <li><router-link to="/Search" @click="closeMenu">LICENCES</router-link></li>
  <li><router-link to="/products" @click="closeMenu">PRODUITS</router-link></li>
  <li><router-link to="/Contact" @click="closeMenu">CONTACT</router-link></li>
  <li><router-link to="" @click="closeMenu"><i class="fa-solid fa-bag-shopping fa-lg" style="color: #ffffff;"></i></router-link></li>
  <li><router-link to="./Login" @click="closeMenu"><i class="fa-solid fa-circle-user fa-2xl" style="color: #ffffff;"></i></router-link></li>
</ul>
  </section>
</template>

<style scoped lang="scss">

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
    width: 200px;
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

</style>
