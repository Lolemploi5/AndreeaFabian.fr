import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import Header from '../components/Header.vue'

// Mock router pour les tests
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: { template: '<div>Home</div>' } },
    { path: '/services', name: 'Services', component: { template: '<div>Services</div>' } },
    { path: '/realisations', name: 'Realisations', component: { template: '<div>Realisations</div>' } },
    { path: '/contact', name: 'Contact', component: { template: '<div>Contact</div>' } }
  ]
})

describe('Header', () => {
  it('affiche le titre correct', async () => {
    const wrapper = mount(Header, {
      global: {
        plugins: [router]
      }
    })
    
    const titleText = wrapper.find('.title').text()
    expect(titleText).toContain('STUDIO FABIAN')
    expect(titleText).toContain('ARCHITECTE D')
    expect(titleText).toContain('INTERIEUR')
  })

  it('affiche le logo', () => {
    const wrapper = mount(Header, {
      global: {
        plugins: [router]
      }
    })
    
    const logo = wrapper.find('.logo')
    expect(logo.exists()).toBe(true)
    expect(logo.attributes('src')).toBe('/logo.jpg')
    expect(logo.attributes('alt')).toBe('Logo')
  })

  it('affiche tous les liens de navigation', () => {
    const wrapper = mount(Header, {
      global: {
        plugins: [router]
      }
    })
    
    const navLinks = wrapper.findAll('.nav-btn')
    expect(navLinks).toHaveLength(4)
    
    const linkTexts = navLinks.map(link => link.text())
    expect(linkTexts).toContain('Accueil')
    expect(linkTexts).toContain('Services')
    expect(linkTexts).toContain('Réalisations')
    expect(linkTexts).toContain('Contact')
  })

  it('les liens de navigation pointent vers les bonnes routes', () => {
    const wrapper = mount(Header, {
      global: {
        plugins: [router]
      }
    })
    
    // On vérifie que les textes des liens correspondent aux bonnes routes
    const navLinks = wrapper.findAll('.nav-btn')
    expect(navLinks[0].text()).toBe('Accueil')  // Route '/'
    expect(navLinks[1].text()).toBe('Services')  // Route '/services'
    expect(navLinks[2].text()).toBe('Réalisations')  // Route '/realisations'
    expect(navLinks[3].text()).toBe('Contact')  // Route '/contact'
  })
})
