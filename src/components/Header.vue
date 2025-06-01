<template>
  <header class="header">
    <div class="header-left">
      <router-link to="/">
        <img src="/logo.jpg" alt="Logo" class="logo" />
      </router-link>
      <div class="title-block">
        <span class="title">STUDIO FABIAN<br />ARCHITECTE D’INTERIEUR</span>
      </div>
    </div>
    <div class="nav">
      <router-link to="/" class="nav-btn">Accueil</router-link>
      <router-link to="/services" class="nav-btn">Services</router-link>
      <router-link to="/contact" class="nav-btn">Contact</router-link>
    </div>
  </header>
  <div class="header-underline"></div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2.5rem 0 1.5rem 0;
  max-width: 1200px;
  margin: 0 auto;
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
  width: 100vw;
  height: 2px;
  background: #e7d8f6;
  margin-bottom: 2.5rem;
}
@media (max-width: 900px) {
  .header {
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 0 1rem 0;
  }
  .header-left {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  .title {
    text-align: center;
  }
  .nav {
    margin-top: 1rem;
  }
}
</style>
