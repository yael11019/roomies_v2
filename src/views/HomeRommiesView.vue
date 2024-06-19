<template>
  <div class="background-container">
    <HeaderComponent />
    <div class="body-content">
      <h2>Encuentra al roomie perfecto solo deslizando</h2>
      <button @click="signin">Crear cuenta</button>
      <h1>{{ username }}</h1>
    </div>
  </div>
</template>

<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import { useRouter } from "vue-router";
import { ref } from 'vue';
import store from '@/store/store.js'

const router = useRouter();

const signin = () => {
  router.push('/signin');
};

const username = ref(store.username); // Utiliza ref para reactividad
</script>

<style scoped>
.background-container {
  width: 100%;
  height: 100vh; /* Altura completa de la vista */
  background-image: url('@/assets/roomies.jpeg'); /* Ruta relativa a la carpeta src/assets */
  opacity: 1; /* El valor correcto de la opacidad es de 0 a 1 */
  background-size: cover; /* Ajusta la imagen para cubrir todo el contenedor */
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  display: flex;
  flex-direction: column;
  text-align: center;
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
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #1352b1;
}
</style>



  