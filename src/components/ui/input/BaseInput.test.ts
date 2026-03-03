import { render, fireEvent } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import BaseInput from './BaseInput.vue'

const getInputElement = (element: HTMLElement): HTMLInputElement => {
  if (!(element instanceof HTMLInputElement)) {
    throw new Error('Element is not an input element')
  }
  return element
}

describe('Input Component', () => {
  it('should render with the correct initial value', () => {
    const { getByTestId } = render(BaseInput, {
      props: { modelValue: 'Hello Gemini' },
      attrs: { 'data-testid': 'main-input' },
    })

    const input = getInputElement(getByTestId('main-input'))
    expect(input.value).toBe('Hello Gemini')
  })

  it('should update the modelValue when the input changes', async () => {
    const { getByTestId, emitted } = render(BaseInput, {
      props: { modelValue: '' },
      attrs: { 'data-testid': 'email-field' },
    })

    const input = getInputElement(getByTestId('email-field'))
    await fireEvent.update(input, 'New Value')
    const emittedEvents = emitted()
    const updateEvents = emittedEvents['update:modelValue']
    expect(updateEvents).toBeDefined()
    expect(updateEvents?.length).toBeGreaterThan(0)
    expect(updateEvents?.[0]).toEqual(['New Value'])
  })

  it('should merge custom classes correctly', () => {
    const customClass = 'extra-padding-top'
    const { getByTestId } = render(BaseInput, {
      props: { class: customClass },
      attrs: { 'data-testid': 'styled-input' },
    })

    const input = getInputElement(getByTestId('styled-input'))
    expect(input.className).toContain('extra-padding-top')
    expect(input.className).toContain('border-input')
  })

  it('should be disabled when the disabled attribute is passed', () => {
    const { getByTestId } = render(BaseInput, {
      attrs: {
        disabled: true,
        'data-testid': 'disabled-input',
      },
    })

    const input = getInputElement(getByTestId('disabled-input'))
    expect(input.disabled).toBe(true)
  })
})
