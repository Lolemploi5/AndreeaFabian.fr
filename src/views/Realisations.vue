<template>
  <section class="realisations-gallery">
    <h2>RÉALISATIONS</h2>
    <div class="gallery-grid">
      <div v-for="(img, idx) in images" :key="idx" class="gallery-item" @click="openModal(idx)">
        <img :src="img" :alt="'Réalisation ' + (idx+1)" />
      </div>
    </div>
    <div v-if="modalOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <img :src="images[modalIndex]" alt="Agrandissement réalisation" />
        <button class="close-modal" @click="closeModal">&times;</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
// Correction du chemin pour import.meta.glob selon la structure réelle
const images = ref(Object.values(import.meta.glob('../assets/carrousel/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG,GIF,WEBP}', { eager: true, import: 'default' })))
const modalOpen = ref(false)
const modalIndex = ref(0)
function openModal(idx) {
  modalIndex.value = idx
  modalOpen.value = true
}
function closeModal() {
  modalOpen.value = false
}
</script>

<style scoped>
.realisations-gallery {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 2vw 4rem 2vw;
}
.realisations-gallery h2 {
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  font-size: 1.35rem;
  letter-spacing: 1px;
  font-weight: 400;
  margin-bottom: 2.2rem;
  text-transform: uppercase;
  color: #222;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}
.gallery-item {
  background: #f8f5f1;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(194,181,163,0.08);
  cursor: pointer;
  transition: transform 0.18s, box-shadow 0.18s;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gallery-item:hover {
  transform: scale(1.04) translateY(-4px);
  box-shadow: 0 6px 24px rgba(194,181,163,0.18);
}
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: filter 0.2s;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-content {
  position: relative;
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content img {
  max-width: 80vw;
  max-height: 70vh;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.12);
}
.close-modal {
  position: absolute;
  top: 10px;
  right: 18px;
  background: none;
  border: none;
  color: #333;
  font-size: 2.2rem;
  cursor: pointer;
  z-index: 10;
  line-height: 1;
}
.close-modal:hover {
  color: #c2b5a3;
}
@media (max-width: 900px) {
  .realisations-gallery {
    padding: 1.5rem 1vw 2.5rem 1vw;
  }
  .gallery-grid {
    gap: 1rem;
  }
}
@media (max-width: 600px) {
  .realisations-gallery {
    padding: 1rem 0.5vw 1.5rem 0.5vw;
  }
  .gallery-grid {
    gap: 0.7rem;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
  .modal-content img {
    max-width: 96vw;
    max-height: 60vh;
  }
}
</style>
