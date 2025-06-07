<template>
  <footer class="bottom-bar">
    <div class="bottom-bar-content">
      <div class="bottom-bar-row">
        <a href="tel:0698260446" class="bottom-bar-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" stroke="#c2b5a3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          06 98 26 04 46
        </a>
        <a href="mailto:andreea.fabian@hotmail.com" class="bottom-bar-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 4h16v16H4V4zm0 0l8 8 8-8" stroke="#c2b5a3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          andreea.fabian@hotmail.com
        </a>
        <a href="https://www.instagram.com/studio.fabian/" target="_blank" rel="noopener" class="bottom-bar-link">
          <svg viewBox="0 0 50 50" width="20" height="20" fill="none">
            <defs>
              <radialGradient id="ig-gradient" cx="50%" cy="50%" r="80%">
                <stop offset="0%" stop-color="#f9ce34"/>
                <stop offset="50%" stop-color="#ee2a7b"/>
                <stop offset="100%" stop-color="#6228d7"/>
              </radialGradient>
            </defs>
            <rect x="5" y="5" width="40" height="40" rx="12" fill="url(#ig-gradient)"/>
            <circle cx="25" cy="25" r="10" stroke="#fff" stroke-width="3" fill="none"/>
            <circle cx="34" cy="16" r="2.5" fill="#fff"/>
          </svg>
          @studio.fabian
        </a>
      </div>
      <div class="bottom-bar-text">
        Je travaille avec des artisans qualifiés depuis plus de 5 ans, intervenant sur Paris et toute la banlieue. Studio Fabian, c’est la garantie d’un accompagnement sur-mesure et de prestations de qualité.
      </div>
    </div>
  </footer>
</template>

<script setup>
// Pas de logique JS nécessaire
</script>

<style scoped>
.bottom-bar {
  width: 100%;
  max-width: 100%;
  background: linear-gradient(90deg, #f8f5f1 60%, #e7d8f6 100%);
  border-top: 2px solid #bfa77a;
  color: #222;
  font-family: 'Inter', Arial, sans-serif;
  box-shadow: 0 -2px 16px 0 rgba(194,181,163,0.10);
  padding-top: 0.2rem;
  box-sizing: border-box;
}
.bottom-bar-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.7rem 2rem 0.3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.bottom-bar-row {
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 0.7rem;
}
.bottom-bar-link {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #bfa77a;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.12rem;
  letter-spacing: 0.01em;
  background: rgba(255,255,255,0.7);
  border-radius: 8px;
  padding: 0.18rem 0.7rem 0.18rem 0.5rem;
  box-shadow: 0 1px 6px 0 rgba(191,167,122,0.07);
  transition: color 0.2s, background 0.2s, box-shadow 0.2s;
}
.bottom-bar-link:hover {
  color: #fff;
  background: #bfa77a;
  box-shadow: 0 2px 12px 0 rgba(191,167,122,0.18);
}
.bottom-bar-link svg {
  filter: drop-shadow(0 1px 2px #e7d8f6);
}
.bottom-bar-text {
  font-size: 1.01rem;
  color: #222;
  text-align: center;
  margin-bottom: 0.2rem;
  font-family: 'Times New Roman', Times, serif;
  background: rgba(255,255,255,0.6);
  border-radius: 7px;
  padding: 0.4rem 1.2rem 0.3rem 1.2rem;
  box-shadow: 0 1px 6px 0 rgba(191,167,122,0.06);
}
.bottom-bar-madeby {
  font-size: 0.85rem;
  color: #bfa77a;
  text-align: center;
  margin-bottom: 0.1rem;
}
@media (max-width: 900px) {
  .bottom-bar-content {
    padding: 0.7rem 1vw 0.3rem 1vw;
  }
  .bottom-bar-row {
    gap: 1.2rem;
    font-size: 0.98rem;
  }
  .bottom-bar-text {
    font-size: 0.93rem;
    padding: 0.3rem 0.7rem 0.2rem 0.7rem;
  }
}
@media (max-width: 600px) {
  .bottom-bar-content {
    padding: 0.5rem 0.5vw 0.2rem 0.5vw;
  }
  .bottom-bar-row {
    gap: 0.7rem;
    font-size: 0.92rem;
  }
  .bottom-bar-text {
    font-size: 0.89rem;
    padding: 0.2rem 0.3rem 0.15rem 0.3rem;
  }
  .bottom-bar-madeby {
    font-size: 0.78rem;
  }
}
</style>
