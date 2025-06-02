import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Services from '../views/Services.vue'

describe('Services.vue', () => {
  const createWrapper = () => {
    return mount(Services, {
      global: {
        stubs: {
          'router-link': {
            template: '<a href="#"><slot /></a>'
          }
        }
      }
    })
  }

  it('should render the Services page with correct title', () => {
    const wrapper = createWrapper()
    
    expect(wrapper.find('h2').text()).toBe('SERVICES')
    expect(wrapper.find('h3').text()).toBe('NOS ENGAGEMENTS')
  })

  it('should display all service sections', () => {
    const wrapper = createWrapper()
    
    expect(wrapper.find('.engagements').exists()).toBe(true)
    expect(wrapper.find('.accompagnements').exists()).toBe(true)
  })

  it('should display all 4 service items', () => {
    const wrapper = createWrapper()
    
    const serviceItems = wrapper.findAll('.accompagnements li')
    expect(serviceItems).toHaveLength(4)
    
    // Vérifier les titres des services
    expect(serviceItems[0].text()).toContain('Visite conseil et consultation initiale')
    expect(serviceItems[1].text()).toContain('Décoration de votre espace')
    expect(serviceItems[2].text()).toContain('Etude de conception')
    expect(serviceItems[3].text()).toContain('Suivi de chantier')
  })

  it('should have contact block', () => {
    const wrapper = createWrapper()
    
    expect(wrapper.find('.contact-block').exists()).toBe(true)
  })

  it('should render proper HTML structure', () => {
    const wrapper = createWrapper()
    
    expect(wrapper.find('section.services').exists()).toBe(true)
    expect(wrapper.find('hr').exists()).toBe(true)
  })
})
