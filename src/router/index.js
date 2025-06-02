import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'
import Realisations from '../views/Realisations.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/services', name: 'Services', component: Services },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/realisations', name: 'Realisations', component: Realisations }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
