<script>
export default {
name: 'Login',
data () {
return {
  user: {
    username: '',
    password: ''
  },
  remember_me: true
}
},
  methods: {
  },
};
</script>


<template>
<Header />


<div class="login-container">

    <img src="../assets/img/BleuGirl.png" alt="" class="left-image" width="300">

    <div class="login">
            <div class="login-header">
                <h3>Connexion</h3>
            </div>
            <form @submit="login">
                <div class="form-group">
                    <label for="">E-mail *</label>
                    <input type="email" class="form-control" required placeholder="Votre e-mail..."/>
                </div>

                <div class="form-group">
                    <label for="">Mot de passe *</label>
                    <input type="password" class="form-control" required placeholder="Votre mot de passe..."/>
                </div>

                <div class="remember-me">
                    <input type="checkbox"  id="checkbox" @click="remember_me">
                    <label for="remember">Se souvenir de moi</label>
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Se connecter</button>
                </div>

                <div class="no-register">
                <p>Vous n'avez pas de compte ? <router-link to="./Register"><strong>S'inscrire.</strong></router-link></p>
                </div>
            </form>
            </div>
        <img src="../assets/img/naruto.png" alt="" class="right-image" width="300">
    </div>
</template>



<style scoped>
/* style de la forme formulaire de connexion comme sur figma */
.login {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.login-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin: 0;
    padding: 0;
}
.login-header{
    background: #1c2942 ;
    width: 500px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px 20px 0 0;
    color: #fff;
}

form {
    width: 500px;
    padding: 20px;
    background-color: #ffffff;
    border: 2px solid #1c2942;
    border-bottom-left-radius :20px;
    border-bottom-right-radius :20px;
}
.form-group {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
h3{
    font-size: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
}
label {
    display: block;
    font-weight: bold;
    text-align: center;
    margin-bottom: 5px;
    font-size: 15px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

input[type="email"],
input[type="password"] {
    width: 90%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    background:gainsboro;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}


button {
    align-items: center;
    padding: 10px 20px;
    background-color: #1c2942;
    color: #fff;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 15px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
button:hover {
    background-color: #0056b3;
}

/* chexbox se souvenir de moi */
div.remember-me {
    display: flex;
    flex-direction:column;
    flex-direction: row;
    margin-left: 30%;
}
input[type="checkbox"] {
    margin-right: 10px;
}

/* no register et images */
.no-register{
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

img.right-image {
    float: right;
    margin: 90px;
}

img.left-image {
    float: left;
    margin: 90px;
}
</style>