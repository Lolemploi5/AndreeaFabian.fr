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
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const burgerOpen = ref(false)
const isMobile = ref(false)
const route = useRoute()

function checkMobile() {
  isMobile.value = window.innerWidth <= 900
}

// Fermer le menu mobile quand on change de route
watch(route, () => {
  if (burgerOpen.value) {
    burgerOpen.value = false
  }
})

// Fermer le menu avec la touche Escape
function handleKeyDown(event) {
  if (event.key === 'Escape' && burgerOpen.value) {
    burgerOpen.value = false
  }
}

// Empêcher le scroll du body quand le menu est ouvert
watch(burgerOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
  document.removeEventListener('keydown', handleKeyDown)
  // Restaurer le scroll au démontage
  document.body.style.overflow = ''
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

@media (max-width: 900px) {
  .header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 1rem;
    gap: 1rem;
  }
}
.header-left {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

@media (max-width: 900px) {
  .header-left {
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;
    flex: 1;
  }
}
.logo {
  height: 90px;
  width: 90px;
  object-fit: contain;
  margin-right: 0.5rem;
}

@media (max-width: 900px) {
  .logo {
    height: 50px;
    width: 50px;
    margin-right: 0;
  }
}

@media (max-width: 600px) {
  .logo {
    height: 45px;
    width: 45px;
  }
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

@media (max-width: 900px) {
  .title {
    font-size: 0.95rem;
    line-height: 1.2;
    letter-spacing: 0.3px;
  }
}

@media (max-width: 600px) {
  .title {
    font-size: 0.8rem;
    line-height: 1.1;
  }
}

@media (max-width: 400px) {
  .title {
    font-size: 0.7rem;
  }
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

@media (max-width: 900px) {
  .header-underline {
    margin-bottom: 1.5rem;
  }
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
  transition: all 0.2s ease;
  border-radius: 8px;
  padding: 6px;
}

.burger:hover {
  background: rgba(191, 167, 122, 0.1);
}

.burger:active {
  transform: scale(0.95);
}

@media (max-width: 900px) {
  .burger {
    display: flex;
    margin-left: 0;
  }
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
  padding: 6px;
  margin: 0;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.close-burger:hover {
  background: rgba(191, 167, 122, 0.1);
}

.close-burger:active {
  transform: scale(0.95);
}
.close-burger svg {
  display: block;
}
/* ===== MEDIA QUERIES MOBILE ===== */
@media (max-width: 900px) {
  /* Navigation desktop cachée */
  .nav {
    display: none;
  }

  /* Menu mobile ouvert */
  .nav.nav-mobile-open {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 85vw;
    max-width: 360px;
    height: 100vh;
    background: #fff;
    box-shadow: -4px 0 20px rgba(0,0,0,0.12);
    z-index: 1001;
    align-items: stretch;
    padding: 5rem 2rem 2rem 2rem;
    gap: 0.8rem;
    transition: transform 0.3s cubic-bezier(.4,0,.2,1), opacity 0.3s ease;
    overflow-y: auto;
    backdrop-filter: blur(10px);
  }

  /* Boutons de navigation mobile */
  .nav-btn {
    width: 100%;
    text-align: left;
    font-size: 1.1rem;
    padding: 1.2rem 1.5rem;
    border-radius: 12px;
    background: #f8f5f1;
    color: #333;
    box-shadow: 0 2px 12px rgba(194,181,163,0.1);
    border: 2px solid transparent;
    font-weight: 500;
    margin-bottom: 0.5rem;
    letter-spacing: 0.3px;
    transition: all 0.25s ease;
    outline: none;
    position: relative;
    display: flex;
    align-items: center;
  }

  .nav-btn::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: transparent;
    border-radius: 0 4px 4px 0;
    transition: background 0.25s ease;
  }

  .nav-btn:hover {
    background: #ede4d3;
    color: #bfa77a;
    box-shadow: 0 4px 20px rgba(194,181,163,0.18);
    transform: translateX(4px);
  }

  .nav-btn:hover::before {
    background: #bfa77a;
  }

  .nav-btn.router-link-exact-active {
    background: #e8dcc6;
    color: #bfa77a;
    border-color: rgba(191, 167, 122, 0.2);
    box-shadow: 0 4px 20px rgba(194,181,163,0.2);
    font-weight: 600;
  }

  .nav-btn.router-link-exact-active::before {
    background: #bfa77a;
  }

  /* Overlay du menu mobile */
  .nav-mobile-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.25);
    z-index: 1000;
    backdrop-filter: blur(2px);
    transition: opacity 0.3s ease;
  }
}

@media (max-width: 600px) {
  .nav.nav-mobile-open {
    width: 90vw;
    padding: 4.5rem 1.5rem 2rem 1.5rem;
  }

  .nav-btn {
    font-size: 1.05rem;
    padding: 1.1rem 1.3rem;
  }
}

@media (max-width: 400px) {
  .nav.nav-mobile-open {
    width: 95vw;
    padding: 4rem 1rem 1.5rem 1rem;
  }

  .nav-btn {
    font-size: 1rem;
    padding: 1rem 1.2rem;
  }
}
/* ===== ANIMATIONS ET TRANSITIONS ===== */
.slide-menu-enter-active, .slide-menu-leave-active {
  transition: transform 0.35s cubic-bezier(.4,0,.2,1), opacity 0.35s ease;
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

/* Animation pour l'overlay */
.nav-mobile-overlay {
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
