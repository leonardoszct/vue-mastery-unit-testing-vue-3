import { mount } from '@vue/test-utils'
import RandomNumber from '@/components/RandomNumber.vue'

describe('RandomNumber', () => {
  test('By default, randomNumber data value should be 0', () => {
    const wrapper = mount(RandomNumber)
    const randomNumber = parseInt(wrapper.find('span').text())

    expect(randomNumber).toBe(0)
  })

  test('if the button is clicked, random number should be between 1 and 10', async () => {
    const wrapper = mount(RandomNumber)
    const button = wrapper.find('button')

    await button.trigger('click')

    const randomNumber = parseInt(wrapper.find('span').text())

    expect(randomNumber).toBeGreaterThanOrEqual(1)
    expect(randomNumber).toBeLessThanOrEqual(10)
  })

  test('if the button is clicked, random number should be between 200 and 300', async () => {
    const wrapper = mount(RandomNumber, {
      props: {
        min: 200,
        max: 300
      }
    })
    const button = wrapper.find('button')

    await button.trigger('click')

    const randomNumber = parseInt(wrapper.find('span').text())

    expect(randomNumber).toBeGreaterThanOrEqual(200)
    expect(randomNumber).toBeLessThanOrEqual(300)
  })
})
