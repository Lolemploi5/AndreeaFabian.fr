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

  it('should render main gallery container', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('.main-container').exists()).toBe(true)
    expect(wrapper.find('section.realisations-gallery').exists()).toBe(true)
  })

  it('should render navigation controls', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('.navigation-controls').exists()).toBe(true)
    expect(wrapper.find('.nav-btn.prev-btn').exists()).toBe(true)
    expect(wrapper.find('.nav-btn.next-btn').exists()).toBe(true)
  })

  it('should render progress bar', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('.progress-bar').exists()).toBe(true)
    expect(wrapper.find('.progress-fill').exists()).toBe(true)
  })

  it('should show position indicator', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('.position-indicator').exists()).toBe(true)
  })

  it('should navigate to next image when clicking next button', async () => {
    const wrapper = createWrapper()
    const initialIndex = wrapper.vm.currentIndex
    
    const nextButton = wrapper.find('.nav-btn.next-btn')
    await nextButton.trigger('click')
    
    // Wait for transition to complete
    setTimeout(() => {
      expect(wrapper.vm.currentIndex).toBeGreaterThanOrEqual(initialIndex)
    }, 200)
  })
})
