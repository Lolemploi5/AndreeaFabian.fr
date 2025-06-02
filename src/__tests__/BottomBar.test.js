import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BottomBar from '../components/BottomBar.vue'

describe('BottomBar', () => {
  it('affiche les informations de contact', () => {
    const wrapper = mount(BottomBar)
    
    // Vérifier le numéro de téléphone
    const phoneLink = wrapper.find('a[href="tel:0698260446"]')
    expect(phoneLink.exists()).toBe(true)
    expect(phoneLink.text()).toContain('06 98 26 04 46')
    
    // Vérifier l'email
    const emailLink = wrapper.find('a[href="mailto:andreea.fabian@hotmail.com"]')
    expect(emailLink.exists()).toBe(true)
    expect(emailLink.text()).toContain('andreea.fabian@hotmail.com')
    
    // Vérifier Instagram
    const instaLink = wrapper.find('a[href="https://www.instagram.com/studio.fabian/"]')
    expect(instaLink.exists()).toBe(true)
    expect(instaLink.text()).toContain('@studio.fabian')
  })

  it('affiche le texte de présentation', () => {
    const wrapper = mount(BottomBar)
    
    const text = wrapper.find('.bottom-bar-text')
    expect(text.exists()).toBe(true)
    expect(text.text()).toContain('Je travaille avec des artisans qualifiés depuis plus de 5 ans')
    expect(text.text()).toContain('Paris et toute la banlieue')
    expect(text.text()).toContain('Studio Fabian')
  })

  it('a la structure HTML correcte', () => {
    const wrapper = mount(BottomBar)
    
    expect(wrapper.find('footer.bottom-bar').exists()).toBe(true)
    expect(wrapper.find('.bottom-bar-content').exists()).toBe(true)
    expect(wrapper.find('.bottom-bar-row').exists()).toBe(true)
    expect(wrapper.findAll('.bottom-bar-link')).toHaveLength(3)
  })

  it('les liens externes ont les bons attributs', () => {
    const wrapper = mount(BottomBar)
    
    const instaLink = wrapper.find('a[href="https://www.instagram.com/studio.fabian/"]')
    expect(instaLink.attributes('target')).toBe('_blank')
    expect(instaLink.attributes('rel')).toBe('noopener')
  })
})
