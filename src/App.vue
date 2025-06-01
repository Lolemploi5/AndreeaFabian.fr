<template>
  <Header />
  <transition name="fade-page" mode="out-in">
    <router-view />
  </transition>
</template>

<script setup>
import Header from './components/Header.vue'
</script>

<style>
.fade-page-enter-active, .fade-page-leave-active {
  transition: opacity 0.5s cubic-bezier(.4,0,.2,1);
}
.fade-page-enter-from, .fade-page-leave-to {
  opacity: 0;
}
</style>
