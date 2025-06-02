<template>
  <div class="header-wrapper">
    <header class="header">
    <div class="header-left">
      <router-link to="/">
        <img src="/logo.jpg" alt="Logo" class="logo" />
      </router-link>
      <div class="title-block">
        <span class="title">
          STUDIO FABIAN<br />ARCHITECTE D’INTERIEUR
        </span>
      </div>
    </div>
    <div class="nav" v-if="!isMobile">
      <router-link to="/" class="nav-btn">Accueil</router-link>
      <router-link to="/services" class="nav-btn">Services</router-link>
      <router-link to="/realisations" class="nav-btn">Réalisations</router-link>
      <router-link to="/contact" class="nav-btn">Contact</router-link>
    </div>
    <button class="burger" @click="burgerOpen = true" aria-label="Ouvrir le menu" v-if="isMobile && !burgerOpen">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect y="7" width="32" height="3.5" rx="1.5" fill="#bfa77a"/>
        <rect y="14" width="32" height="3.5" rx="1.5" fill="#bfa77a"/>
        <rect y="21" width="32" height="3.5" rx="1.5" fill="#bfa77a"/>
      </svg>
    </button>
    <transition name="slide-menu">
      <nav v-if="burgerOpen && isMobile" class="nav nav-mobile-open">
        <button class="close-burger" @click="burgerOpen = false" aria-label="Fermer le menu">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <line x1="8" y1="8" x2="24" y2="24" stroke="#bfa77a" stroke-width="3.5" stroke-linecap="round"/>
            <line x1="24" y1="8" x2="8" y2="24" stroke="#bfa77a" stroke-width="3.5" stroke-linecap="round"/>
          </svg>
        </button>
        <router-link to="/" class="nav-btn" @click="burgerOpen = false">Accueil</router-link>
        <router-link to="/services" class="nav-btn" @click="burgerOpen = false">Services</router-link>
        <router-link to="/realisations" class="nav-btn" @click="burgerOpen = false">Réalisations</router-link>
        <router-link to="/contact" class="nav-btn" @click="burgerOpen = false">Contact</router-link>
      </nav>
    </transition>
    <div v-if="burgerOpen && isMobile" class="nav-mobile-overlay" @click="burgerOpen = false"></div>
    </header>
    <div class="header-underline"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const burgerOpen = ref(false)
const isMobile = ref(false)
function checkMobile() {
  isMobile.value = window.innerWidth <= 900
}
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})
onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.header-wrapper {
  width: 100%;
  background: #f8f5f1;
  position: relative;
  z-index: 1000;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2.5rem 2rem 1.5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  background: transparent;
}
.header-left {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}
.logo {
  height: 90px;
  width: 90px;
  object-fit: contain;
  margin-right: 0.5rem;
}
.title-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title {
  font-family: 'Times New Roman', Times, serif;
  font-size: 1.35rem;
  font-weight: 400;
  color: #222;
  letter-spacing: 0.5px;
  line-height: 1.1;
  text-align: left;
  text-transform: uppercase;
}
.nav {
  display: flex;
  gap: 0.7rem;
  align-items: flex-start;
}
.nav-btn {
  background: #c2b5a3;
  color: #fff;
  border-radius: 8px;
  padding: 1.1rem 2.2rem 1.1rem 2.2rem;
  font-size: 1rem;
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 300;
  border: none;
  outline: none;
  text-decoration: none;
  text-align: center;
  transition: background 0.2s;
  box-shadow: none;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
}
.nav-btn::after {
  content: '';
  position: absolute;
  left: -100%;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.18);
  transform: skewX(-20deg);
  transition: left 0.4s cubic-bezier(.4,0,.2,1);
  pointer-events: none;
}
.nav-btn:hover::after {
  left: 100%;
}
.nav-btn:hover {
  background: #b3a18a;
}
.header-underline {
  width: 100%;
  height: 2px;
  background: #c2b5a3;
  margin-bottom: 2.5rem;
}
.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1002;
  margin-left: 1rem;
  transition: background 0.2s;
}
.burger svg {
  display: block;
}
.close-burger {
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1003;
  padding: 0;
  margin: 0;
}
.close-burger svg {
  display: block;
}
@media (max-width: 900px) {
  .header {
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 1rem 1rem 1rem;
  }
  .header-left {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  .logo {
    height: 60px;
    width: 60px;
  }
  .title {
    text-align: center;
    font-size: 1.1rem;
  }
  .inline-logo {
    height: 1.2em;
    margin-right: 0.3em;
  }
  .nav {
    display: none;
  }
  .burger {
    display: flex;
  }
  .nav.nav-mobile-open {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 80vw;
    max-width: 340px;
    height: 100vh;
    background: #fff;
    box-shadow: -2px 0 16px rgba(0,0,0,0.08);
    z-index: 1001;
    align-items: flex-start;
    padding: 4.5rem 2rem 2rem 2rem;
    gap: 1.2rem;
    transition: transform 0.3s cubic-bezier(.4,0,.2,1), opacity 0.3s;
    overflow-y: auto;
  }
  .close-burger {
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1003;
    padding: 0;
    margin: 0;
  }
  .nav-btn {
    width: 100%;
    text-align: left;
    font-size: 1.18rem;
    padding: 1.1rem 0 1.1rem 1.2rem;
    border-radius: 10px;
    background: #f8f5f1;
    color: #222;
    box-shadow: 0 2px 8px rgba(194,181,163,0.08);
    border: none;
    font-weight: 500;
    margin-bottom: 0.7rem;
    letter-spacing: 0.5px;
    transition: background 0.2s, color 0.2s, box-shadow 0.2s;
    outline: none;
    position: relative;
  }
  .nav-btn:hover, .nav-btn.router-link-exact-active {
    background: #e7d8f6;
    color: #bfa77a;
    box-shadow: 0 4px 16px rgba(194,181,163,0.13);
  }
  .nav-mobile-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.18);
    z-index: 1000;
  }
}
.slide-menu-enter-active, .slide-menu-leave-active {
  transition: transform 0.3s cubic-bezier(.4,0,.2,1), opacity 0.3s;
}
.slide-menu-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-menu-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-menu-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-menu-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
