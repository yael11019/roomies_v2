<template>
  <div>
    <HeaderComponent />
    <h1 style="font-size: 40px"><b>Registra tu perfil</b></h1>

    <!-- Paso 1: Registro de usuario y contraseña -->
    <div v-if="subStep === 0">
      <h1 style="font-size: 30px"><b>Registro de correo y contraseña</b></h1>
      <div class="email_input">
        <label><h2><b>Ingresa tu correo:</b></h2></label>
        <input id="email" type="email" v-model="email" placeholder="Correo electrónico">
      </div>
      <div class="password_input">
        <label><h2><b>Crea una contraseña:</b></h2></label>
        <input id="password" type="password" v-model="password" placeholder="Contraseña">
      </div>
      <button @click="addOneStep">Siguiente</button>
    </div>

    <!-- Paso 2: Detalles del proyecto -->
    <registerPart2 v-if="subStep === 1" @completedStep="addOneStep" />
  </div>
</template>

<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import registerPart2 from "@/components/registerPart2.vue";
import { ref } from "vue";

// Datos reactivos
const email = ref('');
const password = ref('');
const subStep = ref(0);

// Función para avanzar al siguiente paso
const addOneStep = () => {
  if (subStep.value === 0 && (email.value === '' || password.value === '')) {
    alert("Por favor, completa todos los campos.");
  } else {
    subStep.value += 1;
  }
};
</script>

<style scoped>
  input, select {
    width: 300px;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #02416d;
    border-radius: 4px;
    margin-top: 10px;
  }

  button {
    background-color: #02416d;
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 20px;
    width: 200px;
  }

  button:hover {
    background-color: #01538a;
  }

  label {
    font-size: 18px;
    margin-top: 10px;
    display: block;
  }
</style>
