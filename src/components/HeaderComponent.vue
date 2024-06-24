<template>
    <header>
      <img
        @click="goToHome"
        :src="require('@/assets/punkd.jpeg')"
        alt="HeaderImage"
      />
      <h1><strong>Roomie Match</strong></h1>
      <img
        @click="openMenu"
        :src="require('@/assets/menu.png')"
        alt="MenuImage"
      />
    </header>
    <SlideMenu :isOpen="menuOpen" @close="closeMenu" />
  </template>
  
  <script setup>
import { ref } from 'vue';
import SlideMenu from "@/components/SlideMenu.vue"
import { useRouter } from 'vue-router';

const router = useRouter();

const menuOpen = ref(false);

const openMenu = () => {
  menuOpen.value = true;
};

const closeMenu = () => {
  menuOpen.value = false;
};

const goToHome = () => {
  router.push({ path: '/Home' });
};
</script>
  
  <style scoped>
  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #02416d

  }
  img,
  span {
    width: 48px;
  }
  h1 {
    font-size: 1.4rem;
    color: #ffff;
  }
  </style>