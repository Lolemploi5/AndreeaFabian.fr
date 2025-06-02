<template>
    <Header />
    <div class="router-view-container">
      <router-view v-slot="{ Component, route }">
        <transition :name="transitionName" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>
    <BottomBar />
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import Header from './components/Header.vue'
  import BottomBar from './components/BottomBar.vue'

  const route = useRoute()
  const transitionName = ref('slide-right')

  // Détermine la direction de l'animation selon les pages
  const pageOrder = ['/', '/services', '/realisations', '/contact']
  
  watch(route, (to, from) => {
    const toIndex = pageOrder.indexOf(to.path)
    const fromIndex = pageOrder.indexOf(from.path)
    
    if (toIndex > fromIndex) {
      transitionName.value = 'slide-left'
    } else {
      transitionName.value = 'slide-right'
    }
  })
  </script>

  <style>
  /* Container pour les transitions */
  .router-view-container {
    position: relative;
    min-height: 100vh;
    overflow: hidden;
  }

  /* Animations de transition entre pages */
  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
  }

  .slide-left-enter-active,
  .slide-right-enter-active {
    z-index: 10;
  }

  .slide-left-leave-active,
  .slide-right-leave-active {
    z-index: 5;
  }

  .slide-left-enter-from {
    opacity: 0;
    transform: translateX(100px);
  }

  .slide-left-leave-to {
    opacity: 0;
    transform: translateX(-100px);
  }

  .slide-right-enter-from {
    opacity: 0;
    transform: translateX(-100px);
  }

  .slide-right-leave-to {
    opacity: 0;
    transform: translateX(100px);
  }

  /* Animation fade alternative pour un effet plus doux */
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
  }

  .fade-enter-active {
    z-index: 10;
  }

  .fade-leave-active {
    z-index: 5;
  }

  .fade-enter-from {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
  }

  .fade-leave-to {
    opacity: 0;
    transform: translateY(-20px) scale(1.02);
  }
  </style>
