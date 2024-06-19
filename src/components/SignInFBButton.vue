<template>
    <div class="container">
        <button class="fb-button" @click="loginWithFacebook">
            <img class="fb-icon" src="@/assets/Facebook_Logo_Primary.png" alt="Facebook Icon" />
        <span class="fb-text">Iniciar sesión con Facebook</span>
        </button>
    </div>  
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();

  const loginWithFacebook = () => {
  router.push({ 
    path: '/',
     });
};
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center; /* Centrar horizontalmente */
}
  .fb-button {
    display: flex; /* Usar flexbox para alinear ícono y texto */
    align-items: center; /* Alinear verticalmente ícono y texto */
    background-color: #1877f2; /* Color de fondo de Facebook */
    color: white;
    font-family: 'Arial', sans-serif; /* Tipografía de Facebook */
    font-size: 16px;
    font-weight: bold;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.fb-button:hover {
    background-color: #1352b1; /* Color de fondo al pasar el mouse */
}

.fb-icon {
    width: 24px; /* Ajusta el tamaño del ícono según sea necesario */
    height: 24px;
    margin-right: 10px; /* Espacio entre el ícono y el texto */
}

  </style>
  
  
  