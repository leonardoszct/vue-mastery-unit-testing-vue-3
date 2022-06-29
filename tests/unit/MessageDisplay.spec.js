import { mount } from '@vue/test-utils'
import MessageDisplay from '@/components/MessageDisplay'

import { getMessage } from '@/services/Message'

import flushPromises from 'flush-promises'

jest.mock('@/services/Message')

beforeEach(() => {
  jest.clearAllMocks()
})

describe('MessageDisplay', () => {
  it('should display a message when getMessage call is successful', async () => {
    const mockMessage = 'Hello from the db'
    getMessage.mockResolvedValueOnce({ text: mockMessage })

    const wrapper = mount(MessageDisplay)

    await flushPromises()

    const message = wrapper.find('[data-testid="message"]').text()

    expect(getMessage).toHaveBeenCalledTimes(1)
    expect(message).toEqual(mockMessage)
  })

  it('should display an error when getMessage call fails', async () => {
    const mockError = 'Oops! Something went wrong.'
    getMessage.mockRejectedValueOnce({ text: mockError })

    const wrapper = mount(MessageDisplay)

    await flushPromises()

    const errorMessage = wrapper.find('[data-testid="message-error"]').text()

    expect(getMessage).toHaveBeenCalledTimes(1)
    expect(errorMessage).toEqual(mockError)
  })
})
