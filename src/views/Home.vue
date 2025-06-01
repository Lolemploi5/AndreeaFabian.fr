<template>
  <div class="home-container">
    <section class="intro">
      <h1>L’ART DE RÉLÉVER L’ÉLÉGANCE CACHÉE DE VOTRE INTÉRIEUR, AVEC JUSTESSE, DÉTAIL ET DISTINCTION.</h1>
    </section>

    <section class="tendances">
      <h2>TENDANCES ACTUELLE</h2>
      <div class="section-hr"></div>
      <div class="tendances-row">
        <div class="tendance-block">
          <img src="/tendance1.jpg" alt="Toilette suspendue" />
          <div class="tendance-caption">Toilette suspendue</div>
        </div>
        <div class="tendance-block">
          <img src="/tendance2.jpg" alt="Parquet point de hongrie" />
          <div class="tendance-caption">Parquet point de hongrie</div>
        </div>
        <div class="tendance-block">
          <img src="/tendance3.jpg" alt="Verrière intérieure" />
          <div class="tendance-caption">Verrière intérieure</div>
        </div>
      </div>
    </section>

    <section class="realisations">
      <h2>RÉALISATIONS</h2>
      <div class="section-hr"></div>
      <div class="carousel-viewport simple-carousel">
        <button class="carousel-btn left-btn" @click="slide('left')">&#8592;</button>
        <div class="carousel-img-container">
          <img
            :src="carouselImages[(currentIndex - 1 + carouselImages.length) % carouselImages.length]"
            alt="Précédente"
            class="carousel-img preview left-preview"
          />
          <transition :name="transitionName" mode="out-in">
            <img
              :src="carouselImages[currentIndex]"
              :key="carouselImages[currentIndex] + '-' + currentIndex"
              alt="Réalisation"
              class="carousel-img main"
              @click="openModal = true"
              style="cursor: zoom-in;"
            />
          </transition>
          <img
            :src="carouselImages[(currentIndex + 1) % carouselImages.length]"
            alt="Suivante"
            class="carousel-img preview right-preview"
          />
        </div>
        <button class="carousel-btn right-btn" @click="slide('right')">&#8594;</button>
      </div>
      <div v-if="openModal" class="modal-overlay" @click.self="openModal = false">
        <div class="modal-content">
          <img :src="carouselImages[currentIndex]" alt="Agrandissement" />
          <button class="close-modal" @click="openModal = false">&times;</button>
        </div>
      </div>
      <div class="carousel-dots" v-if="carouselImages.length">
        <span v-for="(img, idx) in carouselImages" :key="idx" class="dot" :class="{active: idx === currentIndex}" @click="goTo(idx)"></span>
      </div>
      <div v-else class="carousel-empty">Ajoutez vos images dans src/assets/carrousel/</div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const images = import.meta.glob('../assets/carrousel/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG,GIF,WEBP}', { eager: true, import: 'default' })
const carouselImages = ref(Object.values(images))
const currentIndex = ref(0)
const transitionName = ref('slide-left')
const openModal = ref(false)

function slide(direction) {
  transitionName.value = direction === 'right' ? 'slide-left' : 'slide-right'
  if (direction === 'right') {
    currentIndex.value = (currentIndex.value + 1) % carouselImages.value.length
  } else {
    currentIndex.value = (currentIndex.value - 1 + carouselImages.value.length) % carouselImages.value.length
  }
}
function goTo(idx) {
  transitionName.value = idx > currentIndex.value ? 'slide-left' : 'slide-right'
  currentIndex.value = idx
}
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2vw;
}
.intro {
  text-align: center;
  margin: 4.5rem 0 3.5rem 0;
}
.intro h1 {
  font-family: 'Times New Roman', Times, serif;
  font-size: 1.55rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 400;
  color: #222;
}
.tendances, .realisations {
  text-align: center;
  margin-top: 3.5rem;
}
.tendances h2, .realisations h2 {
  font-family: 'Times New Roman', Times, serif;
  font-size: 1.25rem;
  letter-spacing: 1px;
  font-weight: 400;
  margin-bottom: 1.2rem;
  text-transform: uppercase;
  color: #222;
}
.section-hr {
  width: 90%;
  height: 1.5px;
  background: #222;
  margin: 0 auto 2.5rem auto;
}
.images-row {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
}
.image-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
}
.image-block img {
  width: 100%;
  height: 210px;
  object-fit: cover;
  border-radius: 0;
  box-shadow: none;
}
.caption {
  margin-top: 0.7rem;
  font-size: 1.02rem;
  color: #222;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 300;
  text-align: center;
}
.realisations-row img {
  width: 260px;
  height: 260px;
  object-fit: cover;
  border-radius: 0;
  margin-bottom: 0;
}
.carousel-viewport {
  position: relative;
  width: 600px;
  height: 380px;
  margin: 2.5rem auto 1.5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.simple-carousel {
  width: 600px;
  height: 340px;
  margin: 2.5rem auto 1.5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: visible;
}
.carousel-img-container {
  width: 480px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.carousel-img.main {
  width: 320px;
  height: 320px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  background: #f3e8da;
  display: block;
  margin: 0 18px;
  z-index: 2;
}
.carousel-img.preview {
  width: 100px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  filter: blur(1.5px) grayscale(40%);
  opacity: 0.5;
  transition: filter 0.3s, opacity 0.3s;
  z-index: 1;
}
.left-preview {
  margin-right: -18px;
}
.right-preview {
  margin-left: -18px;
}
.slide-left-enter-active, .slide-right-enter-active {
  transition: all 0.4s cubic-bezier(.4,0,.2,1);
}
.slide-left-leave-active, .slide-right-leave-active {
  transition: all 0.4s cubic-bezier(.4,0,.2,1);
  position: absolute;
}
.slide-left-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-right-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.carousel-dots {
  text-align: center;
  margin-top: 1rem;
}
.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background: #c2b5a3;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;
}
.dot.active {
  background: #222;
}
.carousel-empty {
  text-align: center;
  color: #999;
  font-size: 0.9rem;
  margin-top: 1rem;
}
.carousel-btn {
  position: static;
  background: #c2b5a3;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  margin: 0 10px;
}
.carousel-btn:hover {
  background: #b3a18a;
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
@media (max-width: 600px) {
  .natural-carousel {
    width: 98vw;
    height: 40vw;
    min-width: 0;
  }
  .carousel-flex-track {
    width: 60vw;
    height: 40vw;
  }
  .carousel-img-wrapper.center {
    width: 60vw;
    height: 60vw;
    min-width: 0;
    min-height: 0;
  }
  .carousel-img-wrapper.left, .carousel-img-wrapper.right {
    width: 20vw;
    height: 28vw;
  }
}
@media (max-width: 900px) {
  .simple-carousel {
    width: 98vw;
    height: 60vw;
    min-width: 0;
  }
  .carousel-img-container {
    width: 90vw;
    height: 50vw;
  }
  .carousel-img.main {
    width: 60vw;
    height: 60vw;
    min-width: 0;
    min-height: 0;
  }
  .carousel-img.preview {
    width: 20vw;
    height: 28vw;
  }
}
.tendances-row {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 2.5rem 0 2.5rem 0;
}
.tendance-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
}
.tendance-block img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 0;
  box-shadow: none;
}
.tendance-caption {
  margin-top: 1.2rem;
  font-size: 1.08rem;
  color: #222;
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
}
</style>
