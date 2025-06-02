import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Contact from '../views/Contact.vue'

describe('Contact', () => {
  it('affiche le titre de la page', () => {
    const wrapper = mount(Contact)
    
    expect(wrapper.find('h2').exists()).toBe(true)
    expect(wrapper.find('h2').text()).toContain('CONTACT')
  })

  it('affiche le formulaire de contact', () => {
    const wrapper = mount(Contact)
    
    const form = wrapper.find('form')
    expect(form.exists()).toBe(true)
  })

  it('affiche tous les champs du formulaire', () => {
    const wrapper = mount(Contact)
    
    // Vérifier les champs requis
    expect(wrapper.find('input[name="name"]').exists()).toBe(true)
    expect(wrapper.find('input[name="email"]').exists()).toBe(true)
    expect(wrapper.find('input[name="phone"]').exists()).toBe(true)
    expect(wrapper.find('textarea[name="message"]').exists()).toBe(true)
  })

  it('affiche le bouton d\'envoi', () => {
    const wrapper = mount(Contact)
    
    const submitBtn = wrapper.find('button[type="submit"]')
    expect(submitBtn.exists()).toBe(true)
    expect(submitBtn.text()).toContain('Envoyer')
  })

  it('affiche les informations de contact', () => {
    const wrapper = mount(Contact)
    
    // Vérifier que les informations de contact sont présentes
    const contactInfo = wrapper.text()
    expect(contactInfo).toContain('06 98 26 04 46')
    expect(contactInfo).toContain('andreea.fabian@hotmail.com')
  })
})
