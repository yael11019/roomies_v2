<template>
    <HeaderComponent />
    <div class="container">
        <h1>Estás apunto de encontrar el roomie ideal con el cual vivir</h1>
        <h2>¿Aún no tienes una cuenta?</h2>
        <button @click="register">Crea una cuenta</button><br>
        <h2>¿Ya tienes una cuenta? Inicia sesión aquí</h2>
        <button>Inicia sesión</button><br><br>
        <SignInFBButton />

    </div>
</template>

<script setup>
import HeaderComponent from "@/components/HeaderComponent"
import SignInFBButton from "@/components/SignInFBButton.vue"
import { useRouter } from "vue-router";

const router = useRouter();

const register = () => {
    router.push({path: "register"});
};
</script>

<style scoped>
.body{
    color: #ffff;
}
.container {
    margin-top: 50px;
    text-align: center;
    background-color: #ffff;
    color: black;
}
button {
    display: inline-block;
    background-color: #02416d; /* Color de fondo de Facebook */
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
</style>