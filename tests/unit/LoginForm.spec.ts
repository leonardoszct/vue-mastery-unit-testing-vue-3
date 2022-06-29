import { mount } from '@vue/test-utils'
import LoginForm from '@/components/LoginForm'

describe('LoginForm', () => {
  it('emits an event with a user data payload', () => {
    const wrapper = mount(LoginForm)
    const input = wrapper.find('input[type="text"]')
    
    input.setValue('Lady Joane')
    wrapper.trigger('submit')

    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    const expectedPayload = { name: 'Lady Joane'}

    expect(formSubmittedCalls).toHaveLength(1)
    expect(formSubmittedCalls[0][0]).toMatchObject(expectedPayload)
  })
})
