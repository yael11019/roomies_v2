<template>
  <div class="background-container">
    <HeaderComponent />
    <div class="body-content">
      <h1 style="font-size: 40px"><strong>El Roomie ideal a un Swipe de distancia</strong></h1>
      <button @click="signin">Iniciar sesión</button>
      <button @click="register">Registrarme</button>
      <SignInFBButton />
    </div>
  </div>
</template>

<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import { useRouter } from "vue-router";
import SignInFBButton from "@/components/SignInFBButton.vue"


const router = useRouter();

const signin = () => {
  router.push('/signin');
};

const register = () => {
  router.push('/register')
}


</script>

<style scoped>
.background-container {
  width: 100%;
  height: 100vh; /* Altura completa de la vista */
  background-image: url('@/assets/roomies.jpeg'); /* Ruta relativa a la carpeta src/assets */
  opacity: 1; /* El valor correcto de la opacidad es de 0 a 1 */
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  display: flex;
  flex-direction: column;
  text-align: center;
  background-size: cover;
}

.body-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white; /* Asegúrate de que el texto sea visible sobre la imagen */
  gap: 20px; /* Espacio entre los elementos internos */
}

button {
  background-color: #02416d;
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding: 20px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #1352b1;
}

.text{
  font-size: large;
}
</style>



  