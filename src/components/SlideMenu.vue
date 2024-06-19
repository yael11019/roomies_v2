<template>
    <div :class="['slide-menu', { open: props.isOpen }]">
      <div class="menu-content">
        <img 
        @click="closeMenu"
        :src="require('@/assets/close.svg')"
        alt="CloseImage"
        />
        <ul>
          <li @click="whoWeAre">¿Quiénes somos?</li>
          <li @click="searchingRoomie">Estoy rentando y quiero buscar roomie</li>
          <li @click="searchingRoomieAndRent">Estoy buscando lugar para rentar con roomies</li>
          <button @click="signin">Crear cuenta</button>
        </ul>
      </div>
    </div>
  </template>
  
<script setup>
import { defineProps, defineEmits } from 'vue';
import { useRouter } from 'vue-router';
  
    const router = useRouter();
  
    const props = defineProps({
      isOpen: {
        type: Boolean,
        required: true,
      },
    });
    
    const emit = defineEmits(["close"])
    
    const closeMenu = () => {
        emit("close");
      };

      const signin = () => {
        router.push({ path: '/signin' });
      };

      const whoWeAre = () => {
        router.push({ path: '/whoweare' });
      };

      const searchingRoomie = () => {
        router.push({ path: '/searchingroomie' });
      };

      const searchingRoomieAndRent = () => {
        router.push({ path: '/searchingroomieandrent' });
      };
  </script>
  
  <style scoped>
  .slide-menu {
    position: fixed;
    top: 0;
    right: -300px; /* Ajusta este valor según el ancho de tu menú */
    width: 300px; /* Ajusta este valor según el ancho de tu menú */
    height: 100%;
    background-color: white;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
    transition: right 0.3s ease;
    z-index: 1000;
  }
  
  .slide-menu.open {
    right: 0;
  }
  
  .menu-content {
    padding: 20px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin: 10px 0;
  }
  li:hover{
    background-color: #02416d;
    color: #ffff;
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
  