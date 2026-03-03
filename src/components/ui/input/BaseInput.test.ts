import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BaseInput from './BaseInput.vue'

describe('Input Component', () => {
  it('should renders with the correct initial value', () => {
    const wrapper = mount(BaseInput, {
      props: { modelValue: 'Hello Gemini' },
    })

    const input = wrapper.find('input')
    expect((input.element as HTMLInputElement).value).toBe('Hello Gemini')
  })

  it('should updates the modelValue when the input changes', async () => {
    const wrapper = mount(BaseInput, {
      props: { modelValue: '' },
    })

    const input = wrapper.find('input')
    await input.setValue('New Value')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['New Value'])
  })

  it('should applies the defaultValue when no modelValue is provided', () => {
    const wrapper = mount(BaseInput, {
      props: { defaultValue: 'Default Text' },
    })

    const input = wrapper.find('input')
    expect((input.element as HTMLInputElement).value).toBe('Default Text')
  })

  it('should merges custom classes correctly via the cn utility', () => {
    const customClass = 'extra-padding-top'
    const wrapper = mount(BaseInput, {
      props: { class: customClass },
    })

    const input = wrapper.find('input')
    expect(input.classes()).toContain('extra-padding-top')
    expect(input.classes()).toContain('border-input')
  })

  it('should is disabled when the disabled attribute is passed', () => {
    const wrapper = mount(BaseInput, {
      attrs: { disabled: true },
    })

    const input = wrapper.find('input')
    expect((input.element as HTMLInputElement).disabled).toBe(true)
  })
})
