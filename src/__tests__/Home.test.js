import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

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

describe('Home', () => {
  it('affiche le titre principal', () => {
    const wrapper = mount(Home, {
      global: {
        plugins: [router]
      }
    })
    
    expect(wrapper.find('h1').exists()).toBe(true)
    expect(wrapper.find('h1').text()).toContain('ART DE RÉLÉVER')
  })

  it('affiche la section des tendances', () => {
    const wrapper = mount(Home, {
      global: {
        plugins: [router]
      }
    })
    
    const tendancesSection = wrapper.find('.tendances')
    expect(tendancesSection.exists()).toBe(true)
    expect(wrapper.text()).toContain('TENDANCES ACTUELLE')
  })

  it('affiche le carrousel', () => {
    const wrapper = mount(Home, {
      global: {
        plugins: [router]
      }
    })
    
    const carrousel = wrapper.find('.carousel-viewport')
    expect(carrousel.exists()).toBe(true)
  })

  it('affiche les boutons de navigation du carrousel', () => {
    const wrapper = mount(Home, {
      global: {
        plugins: [router]
      }
    })
    
    const leftBtn = wrapper.find('.left-btn')
    const rightBtn = wrapper.find('.right-btn')
    
    expect(leftBtn.exists()).toBe(true)
    expect(rightBtn.exists()).toBe(true)
  })
})
