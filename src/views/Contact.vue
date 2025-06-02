<template>
  <section class="contact">
    <h2>CONTACT</h2>
    <div class="section-hr"></div>
    <form class="contact-form" @submit.prevent="handleSubmit">
      <label for="name">Nom</label>
      <input type="text" id="name" name="name" v-model="name" required />

      <label for="email">Email</label>
      <input type="email" id="email" name="email" v-model="email" required />

      <label for="phone">Téléphone</label>
      <input type="tel" id="phone" name="phone" v-model="phone" required />

      <label for="message">Message</label>
      <textarea id="message" name="message" rows="5" v-model="message" required></textarea>

      <button type="submit" :disabled="sending" :class="{ sent: sent }">
        <span v-if="!sent && !sending">Envoyer</span>
        <span v-if="sending">Envoi...</span>
        <span v-if="sent" class="checkmark">✔️ Envoyé</span>
      </button>
    </form>
    <transition name="notif-fade">
      <div v-if="sent" class="notif-success">
        <span class="notif-icon">✅</span>
        Message envoyé avec succès !
        <div class="notif-bar">
          <div class="notif-bar-inner" :style="{ width: notifBarWidth + '%' }"></div>
        </div>
      </div>
    </transition>
    <div class="contact-info">
      <div class="info-row">
        <span class="icon mail-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 4h16v16H4V4zm0 0l8 8 8-8" stroke="#c2b5a3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
        <span class="info-label">Email :</span>
        <a href="mailto:Andreea.fabian@hotmail.com" class="info-value">andreea.fabian@hotmail.com</a>
      </div>
      <div class="info-row">
        <span class="icon phone-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" stroke="#c2b5a3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
        <span class="info-label">Téléphone :</span>
        <a href="tel:0698260446" class="info-value">06 98 26 04 46</a>
      </div>
      <div class="info-row instagram-row">
        <span class="icon insta-icon">
          <svg viewBox="0 0 50 50" width="22" height="22" fill="none">
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
        </span>
        <span class="info-label">Instagram :</span>
        <a href="https://www.instagram.com/_andreeaf__/" target="_blank" rel="noopener" class="info-value insta-link" @mouseover="instaAnim = true" @mouseleave="instaAnim = false">
          <span :class="['insta-text', { 'insta-anim': instaAnim }]">@_andreeaf__</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const instaAnim = ref(false)

// Remplace les valeurs par import.meta.env
const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID
const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
const sending = ref(false)
const sent = ref(false)
const error = ref('')
const notifBarWidth = ref(100)
let notifTimer = null
let notifBarTimer = null

function formatPhoneForTel(phone) {
  // Nettoie le numéro et convertit en format international si FR
  let cleaned = phone.replace(/\D/g, '')
  if (cleaned.startsWith('0') && cleaned.length === 10) {
    // 06... => +336...
    return '+33' + cleaned.slice(1)
  }
  if (cleaned.startsWith('33') && cleaned.length === 11) {
    return '+' + cleaned
  }
  if (cleaned.startsWith('7') && cleaned.length === 9) {
    return '+33' + cleaned
  }
  return phone // fallback
}

function sendToTelegram(name, email, phone, message) {
  const now = new Date().toLocaleString('fr-FR')
  const phoneHref = formatPhoneForTel(phone)
  const text = `\n<b>🆕 NOUVEAU CLIENT</b>\n━━━━━━━━━━━━━━━━━━━\n\n👤 <b>Nom :</b> <i>${name}</i>\n✉️ <b>Email :</b> <a href="mailto:${email}">${email}</a>\n📞 <b>Téléphone :</b> <a href="tel:${phoneHref}">${phoneHref}</a>\n🕒 <b>Date :</b> <i>${now}</i>\n\n💬 <b>Message :</b>\n<blockquote> ${message} </blockquote>\n━━━━━━━━━━━━━━━━━━━\n`
  return fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text,
      parse_mode: 'HTML',
      disable_web_page_preview: true
    }),
  })
}

function handleSubmit() {
  sending.value = true
  sent.value = false
  error.value = ''
  sendToTelegram(name.value, email.value, phone.value, message.value)
    .then(res => {
      if (res.ok) {
        sent.value = true
        name.value = ''
        email.value = ''
        phone.value = ''
        message.value = ''
        notifBarWidth.value = 100
        if (notifTimer) clearTimeout(notifTimer)
        if (notifBarTimer) clearInterval(notifBarTimer)
        // Barre de progression sur 3s
        let elapsed = 0
        notifBarTimer = setInterval(() => {
          elapsed += 50
          notifBarWidth.value = 100 - (elapsed / 3000) * 100
          if (elapsed >= 3000) {
            clearInterval(notifBarTimer)
            notifBarWidth.value = 0
          }
        }, 50)
        notifTimer = setTimeout(() => {
          sent.value = false
        }, 3000)
      } else {
        error.value = "Erreur lors de l'envoi."
      }
    })
    .catch(() => {
      error.value = "Erreur lors de l'envoi."
    })
    .finally(() => {
      sending.value = false
    })
}
</script>

<style scoped>
.contact {
  max-width: 500px;
  margin: 4rem auto 0 auto;
  text-align: center;
}
.section-hr {
  width: 80%;
  height: 1.5px;
  background: #222;
  margin: 0 auto 2.5rem auto;
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 2.5rem;
}
.contact-form label {
  font-family: 'Times New Roman', Times, serif;
  font-size: 1rem;
  text-align: left;
}
.contact-form input,
.contact-form textarea {
  padding: 0.7rem;
  border-radius: 6px;
  border: 1px solid #c2b5a3;
  font-size: 1rem;
  font-family: inherit;
}
.contact-form button {
  background: #c2b5a3;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}
.contact-form button.sent {
  background: #3a7c3a;
  color: #fff;
  position: relative;
  transition: background 0.3s, color 0.3s;
}
.contact-form button.sent .checkmark {
  animation: pop-check 0.5s cubic-bezier(.4,0,.2,1);
}
@keyframes pop-check {
  0% { transform: scale(0.7); opacity: 0; }
  60% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}
.contact-info {
  margin-top: 2.5rem;
  font-size: 1.1rem;
  color: #222;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: flex-start;
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
  background: #f8f5f1;
  border-radius: 14px;
  padding: 2rem 2.2rem 1.5rem 2.2rem;
  box-shadow: 0 2px 16px rgba(194,181,163,0.08);
}
.info-row {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 0.2rem;
}
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 28px;
  min-height: 28px;
  transition: transform 0.3s cubic-bezier(.4,0,.2,1), filter 0.3s;
}
.info-row:hover .icon {
  transform: scale(1.18) rotate(-8deg);
  filter: drop-shadow(0 2px 8px #c2b5a3aa);
}
.info-label {
  font-weight: 500;
  color: #bfa77a;
  min-width: 90px;
  font-family: 'Inter', Arial, sans-serif;
  letter-spacing: 0.5px;
}
.info-value {
  font-family: 'Times New Roman', Times, serif;
  color: #222;
  font-size: 1.08rem;
  text-decoration: none;
  transition: color 0.2s;
}
.info-value:hover {
  color: #c2b5a3;
  text-decoration: underline;
}
.insta-link {
  position: relative;
  overflow: visible;
}
.insta-text {
  display: inline-block;
  background: linear-gradient(90deg,#f9ce34,#ee2a7b,#6228d7);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
  transition: transform 0.3s cubic-bezier(.4,0,.2,1);
}
.insta-anim {
  animation: insta-bounce 0.7s cubic-bezier(.4,0,.2,1);
}
@keyframes insta-bounce {
  0% { transform: scale(1); }
  30% { transform: scale(1.18) rotate(-6deg); }
  60% { transform: scale(0.95) rotate(4deg); }
  100% { transform: scale(1); }
}
.instagram-row .insta-icon {
  animation: insta-gradient 2s linear infinite;
}
.notif-success {
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: #3a7c3a;
  color: #fff;
  padding: 1rem 2.2rem 1.7rem 2.2rem;
  border-radius: 12px;
  font-size: 1.15rem;
  font-weight: bold;
  box-shadow: 0 4px 24px rgba(58,124,58,0.13);
  display: flex;
  align-items: center;
  gap: 0.7rem;
  z-index: 2000;
  flex-direction: column;
}
.notif-bar {
  width: 100%;
  height: 5px;
  background: #e0e0e0;
  border-radius: 3px;
  margin-top: 0.7rem;
  overflow: hidden;
}
.notif-bar-inner {
  height: 100%;
  background: linear-gradient(90deg,#bfa77a,#3a7c3a);
  transition: width 0.05s linear;
}
.notif-fade-enter-active, .notif-fade-leave-active {
  transition: opacity 0.5s;
}
.notif-fade-enter-from, .notif-fade-leave-to {
  opacity: 0;
}
.success-msg {
  color: #3a7c3a;
  margin-top: 1rem;
  font-weight: bold;
}
.error-msg {
  color: #b33a3a;
  margin-top: 1rem;
  font-weight: bold;
}
@media (max-width: 900px) {
  .contact {
    max-width: 98vw;
    padding: 0 1vw;
  }
  .contact-info {
    max-width: 98vw;
    padding: 1.2rem 0.7rem 1.2rem 0.7rem;
    font-size: 1rem;
  }
  .info-label {
    min-width: 70px;
    font-size: 0.98rem;
  }
  .contact-form input,
  .contact-form textarea {
    font-size: 0.98rem;
  }
  .contact-form button {
    padding: 0.8rem 1.2rem;
    font-size: 1rem;
  }
}
@media (max-width: 600px) {
  .contact {
    margin: 2rem auto 0 auto;
    padding: 0 2vw;
  }
  .contact-info {
    padding: 1rem 0.3rem 1rem 0.3rem;
    font-size: 0.97rem;
  }
  .info-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.2rem;
  }
  .info-label {
    min-width: 0;
    font-size: 0.95rem;
  }
  .contact-form {
    gap: 0.7rem;
  }
  .contact-form input,
  .contact-form textarea {
    font-size: 0.95rem;
    padding: 0.5rem;
  }
  .contact-form button {
    width: 100%;
    padding: 0.8rem 0;
    font-size: 1rem;
  }
  .notif-success {
    font-size: 1rem;
    padding: 0.7rem 1rem 1.2rem 1rem;
  }
}
</style>
