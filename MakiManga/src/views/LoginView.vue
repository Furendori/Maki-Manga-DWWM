<template>
<img src="MM2.png" alt="" class="left-image">

<div class="login">
    <div class="login-header">
        <h3>Connexion</h3>
    </div>
    <div class="content">
        <form>
            <div class="form-group">
                <label for="">E-mail *</label>
                <input type="text" class="form-control" required placeholder="Votre e-mail..."/>
            </div>

            <div class="form-group">
                <label for="">Mot de passe *</label>
                <input type="password" class="form-control" required placeholder="Votre mot de passe..."/>
            </div>

            <div class="remember-me">
                <input type="checkbox" id="remember">
                <label for="remember">Se souvenir de moi</label>
            </div>

            <div class="form-group">
                <button type="submit" class="btn btn-primary">Se connecter</button>
            </div>
            </form>

        </div>
    </div>

    <img src="MM1.png" alt="" class="right-image">
</template>


<script>

export default{};

</script>



<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #ffffff;
}
.login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.login-header{
    background: #1c2942 ;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px 20px 0 0;
    color: #fff;
}
form {
    width: 400px;
    height: auto;
    padding: 20px;
    background-color: #fff;
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

label {
    display: block;
    font-weight: bold;
    text-align: center;
    margin-bottom: 5px;
    font-size: 20px;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    background:gainsboro;
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
.remember-me {
    display: flex;
    margin: 5px;
}

input[type="checkbox"] {
    margin-right: 10px;
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