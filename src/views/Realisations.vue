<template>
  <section class="realisations-gallery">
    <div class="gallery-header">
      <h2>RÉALISATIONS</h2>
      <div class="position-indicator">
        <span>{{ currentIndex + 1 }} / {{ images.length }}</span>
      </div>
    </div>
    
    <!-- Container principal -->
    <div class="main-container" @wheel="handleWheel" @keydown="handleKeydown" tabindex="0">
      <!-- Image actuelle -->
      <div class="current-slide">
        <div 
          class="slide-content" 
          v-if="images.length > 0"
          :class="{ 'slide-entering': isTransitioning, 'slide-direction-up': slideDirection === 'up', 'slide-direction-down': slideDirection === 'down' }"
        >
          <img 
            :src="images[currentIndex]" 
            :alt="'Réalisation ' + (currentIndex + 1)" 
            @load="onImageLoad"
          />
        </div>
      </div>
      
      <!-- Navigation -->
      <div class="navigation-controls">
        <button 
          @click="goToPrevious" 
          :disabled="currentIndex === 0"
          class="nav-btn prev-btn"
          aria-label="Image précédente"
        >
          ↑
        </button>
        <button 
          @click="goToNext" 
          :disabled="currentIndex === images.length - 1"
          class="nav-btn next-btn"
          aria-label="Image suivante"
        >
          ↓
        </button>
      </div>
      
      <!-- Barre de progression -->
      <div class="progress-bar">
        <div 
          class="progress-fill" 
          :style="{ height: progressPercentage + '%' }"
        ></div>
      </div>
      
      <!-- Instructions -->
      <div class="instructions">
        <p class="desktop-instructions">Utilisez la molette, les flèches ↑↓ ou les boutons pour naviguer</p>
        <p class="mobile-instructions">Utilisez les boutons pour naviguer</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'

// Images
const images = ref([])
const currentIndex = ref(0)
const isTransitioning = ref(false)
const slideDirection = ref('down') // 'up' ou 'down' pour l'animation

// Charger les images
onMounted(async () => {
  try {
    const imageModules = import.meta.glob('../assets/carrousel/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG,GIF,WEBP}', { eager: true, import: 'default' })
    images.value = Object.values(imageModules)
    console.log('Images chargées:', images.value.length)
  } catch (error) {
    console.error('Erreur chargement images:', error)
  }
})

// Progression
const progressPercentage = computed(() => {
  if (images.value.length <= 1) return 100
  return ((currentIndex.value + 1) / images.value.length) * 100
})

// Navigation avec animation
function goToNext() {
  if (currentIndex.value < images.value.length - 1 && !isTransitioning.value) {
    slideDirection.value = 'down'
    isTransitioning.value = true
    
    setTimeout(() => {
      currentIndex.value++
      setTimeout(() => {
        isTransitioning.value = false
      }, 50)
    }, 150)
  }
}

function goToPrevious() {
  if (currentIndex.value > 0 && !isTransitioning.value) {
    slideDirection.value = 'up'
    isTransitioning.value = true
    
    setTimeout(() => {
      currentIndex.value--
      setTimeout(() => {
        isTransitioning.value = false
      }, 50)
    }, 150)
  }
}

// Gestion de la molette
function handleWheel(event) {
  if (isTransitioning.value) return
  
  event.preventDefault()
  
  if (event.deltaY > 0) {
    goToNext()
  } else {
    goToPrevious()
  }
}

// Gestion du clavier
function handleKeydown(event) {
  if (isTransitioning.value) return
  
  switch (event.key) {
    case 'ArrowDown':
    case ' ':
      event.preventDefault()
      goToNext()
      break
    case 'ArrowUp':
      event.preventDefault()
      goToPrevious()
      break
    case 'Home':
      event.preventDefault()
      currentIndex.value = 0
      break
    case 'End':
      event.preventDefault()
      currentIndex.value = images.value.length - 1
      break
  }
}

// Callback de chargement d'image
function onImageLoad() {
  console.log('Image chargée:', currentIndex.value + 1)
}
</script>

<style scoped>
.realisations-gallery {
  min-height: 100vh;
  background: #f8f5f1;
  padding: 2rem 0 0 0;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

.gallery-header {
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 10;
}

.gallery-header h2 {
  font-family: 'Times New Roman', Times, serif;
  font-size: 1.35rem;
  letter-spacing: 1px;
  font-weight: 400;
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  color: #222;
}

.position-indicator {
  background: rgba(34, 34, 34, 0.8);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  display: inline-block;
  backdrop-filter: blur(10px);
}

.main-container {
  max-width: none;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 280px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  outline: none;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  flex: 1;
}

.current-slide {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  box-sizing: border-box;
}

.slide-content {
  position: relative;
  display: inline-block;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(194, 181, 163, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease;
  padding: 20px;
  max-width: calc(100% - 40px);
  box-sizing: border-box;
}

.slide-content:hover {
  transform: scale(1.02);
}

.slide-content img {
  display: block;
  width: auto;
  height: auto;
  max-width: calc(100% - 40px);
  max-height: 70vh;
  object-fit: contain;
  border-radius: 15px;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.navigation-controls {
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-btn {
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background: rgba(194, 181, 163, 0.9);
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(194, 181, 163, 0.3);
}

.nav-btn:hover:not(:disabled) {
  background: rgba(194, 181, 163, 1);
  transform: scale(1.1);
}

.nav-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.progress-bar {
  position: fixed;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  width: 4px;
  height: 200px;
  background: rgba(194, 181, 163, 0.3);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  width: 100%;
  background: linear-gradient(to top, #c2b5a3, #8a7a6b);
  border-radius: 2px;
  transition: height 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-origin: bottom;
  position: relative;
}

.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 20px;
  background: linear-gradient(to bottom, rgba(255,255,255,0.3), transparent);
  border-radius: 2px;
}

.instructions {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  background: rgba(248, 245, 241, 0.95);
  padding: 0.8rem 1.5rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 15px rgba(194, 181, 163, 0.15);
  max-width: calc(100% - 2rem);
  box-sizing: border-box;
}

.instructions p {
  margin: 0;
  font-size: 0.85rem;
  color: #666;
  text-align: center;
}

.mobile-instructions {
  display: none;
}

/* Responsive */
@media (max-width: 900px) {
  .realisations-gallery {
    padding: 1rem 0;
  }
  
  .main-container {
    padding: 1rem 0.5rem;
    min-height: calc(100vh - 150px);
  }
  
  .slide-content {
    padding: 15px;
    margin: 0 0.5rem;
  }
  
  .slide-content img {
    max-width: calc(100% - 20px);
    max-height: 65vh;
    object-fit: contain;
  }
  
  .navigation-controls {
    right: 0.5rem;
  }
  
  .progress-bar {
    left: 0.5rem;
    height: 150px;
  }
  
  .nav-btn {
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }
  
  .instructions {
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    max-width: calc(100% - 2rem);
    box-sizing: border-box;
  }
}

@media (max-width: 600px) {
  .realisations-gallery {
    padding: 0.5rem 0;
  }
  
  .gallery-header {
    margin-bottom: 1rem;
    padding: 0 1rem;
  }
  
  .gallery-header h2 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  
  .position-indicator {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
  
  .main-container {
    padding: 0.5rem 0.25rem;
    min-height: calc(100vh - 120px);
  }
  
  .slide-content {
    padding: 10px;
    margin: 0 0.25rem;
    border-radius: 15px;
  }
  
  .slide-content img {
    max-width: calc(100% - 10px);
    max-height: 55vh;
    object-fit: contain;
    border-radius: 10px;
  }
  
  .navigation-controls {
    right: 0.25rem;
  }
  
  .nav-btn {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  .progress-bar {
    left: 0.25rem;
    height: 120px;
    width: 3px;
  }
  
  .instructions {
    bottom: 0.5rem;
    padding: 0.5rem 0.8rem;
    max-width: calc(100% - 1rem);
    font-size: 0.7rem;
  }
  
  .instructions p {
    font-size: 0.7rem;
    margin: 0;
  }
  
  .desktop-instructions {
    display: none;
  }
  
  .mobile-instructions {
    display: block;
  }
}

@media (max-width: 400px) {
  .main-container {
    padding: 0.25rem;
  }
  
  .slide-content {
    padding: 8px;
    margin: 0;
  }
  
  .slide-content img {
    max-width: calc(100% - 5px);
    max-height: 50vh;
  }
  
  .navigation-controls {
    right: 0.1rem;
  }
  
  .nav-btn {
    width: 35px;
    height: 35px;
    font-size: 1.1rem;
  }
  
  .progress-bar {
    left: 0.1rem;
    height: 100px;
    width: 2px;
  }
  
  .instructions {
    bottom: 0.25rem;
    padding: 0.4rem 0.6rem;
    font-size: 0.65rem;
  }
  
  .instructions p {
    font-size: 0.65rem;
  }
}

/* Animations de changement d'image */
.slide-content {
  animation: slideIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-origin: center;
}

.slide-content.slide-entering {
  animation: slideOut 0.15s ease-in forwards;
}

.slide-content.slide-entering.slide-direction-down {
  animation: slideOutDown 0.15s ease-in forwards;
}

.slide-content.slide-entering.slide-direction-up {
  animation: slideOutUp 0.15s ease-in forwards;
}

/* Animations d'entrée */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
    filter: blur(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

/* Animations de sortie */
@keyframes slideOutDown {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
  to {
    opacity: 0;
    transform: translateY(-30px) scale(0.9);
    filter: blur(3px);
  }
}

@keyframes slideOutUp {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
  to {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
    filter: blur(3px);
  }
}

@keyframes slideOut {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
}
</style>
