import { mount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue'

describe('AppHeader', () => {
  test('if user is not logged in, do not show logout button', () => {
    const wrapper = mount(AppHeader)
    const button = wrapper.find('button')

    expect(button.isVisible()).toBe(false)
  })

  test('if user is logged in, show logout button', async () => {
    const wrapper = mount(AppHeader)
    const button = wrapper.find('button')

    await wrapper.setData({ loggedIn: true })

    expect(button.isVisible()).toBe(true)
  })
})
