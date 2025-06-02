import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Realisations from '../views/Realisations.vue'

// Mock import.meta.glob avec des images mock
const mockImages = {
  '../assets/carrousel/image1.jpg': { default: '/mock-image1.jpg' },
  '../assets/carrousel/image2.jpg': { default: '/mock-image2.jpg' },
  '../assets/carrousel/image3.jpg': { default: '/mock-image3.jpg' }
}

vi.mock('../assets/carrousel/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG,GIF,WEBP}', () => mockImages)

describe('Realisations.vue', () => {
  const createWrapper = () => {
    return mount(Realisations, {
      global: {
        mocks: {
          'import.meta': {
            glob: vi.fn(() => mockImages)
          }
        }
      }
    })
  }

  it('should render the Realisations page with correct title', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('h2').text()).toBe('RÉALISATIONS')
  })

  it('should render gallery grid', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('.gallery-grid').exists()).toBe(true)
    expect(wrapper.find('section.realisations-gallery').exists()).toBe(true)
  })

  it('should open modal when calling openModal method', async () => {
    const wrapper = createWrapper()
    
    // Tester la méthode openModal directement
    wrapper.vm.openModal(1)
    await wrapper.vm.$nextTick()
    
    expect(wrapper.vm.modalOpen).toBe(true)
    expect(wrapper.vm.modalIndex).toBe(1)
  })

  it('should close modal when calling closeModal method', async () => {
    const wrapper = createWrapper()
    
    // Ouvrir d'abord la modal
    wrapper.vm.openModal(0)
    await wrapper.vm.$nextTick()
    
    // Puis la fermer
    wrapper.vm.closeModal()
    await wrapper.vm.$nextTick()
    
    expect(wrapper.vm.modalOpen).toBe(false)
  })

  it('should display modal when opened', async () => {
    const wrapper = createWrapper()
    
    // Ouvrir la modal
    wrapper.vm.openModal(0)
    await wrapper.vm.$nextTick()
    
    // Vérifier que la modal est affichée
    expect(wrapper.find('.modal-overlay').exists()).toBe(true)
    expect(wrapper.find('.modal-content').exists()).toBe(true)
    expect(wrapper.find('.close-modal').exists()).toBe(true)
  })

  it('should close modal when clicking close button', async () => {
    const wrapper = createWrapper()
    
    // Ouvrir la modal
    wrapper.vm.openModal(0)
    await wrapper.vm.$nextTick()
    
    // Cliquer sur le bouton fermer
    const closeButton = wrapper.find('.close-modal')
    await closeButton.trigger('click')
    
    expect(wrapper.vm.modalOpen).toBe(false)
  })
})
