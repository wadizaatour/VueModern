import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppBadge from './AppBadge.vue'

describe('AppBadge Component', () => {
  it('should render correctly using a test id', () => {
    const wrapper = mount(AppBadge, {
      slots: { default: 'Refactor Complete' },
      attrs: { 'data-testid': 'hero-badge' }, // Attribute fallthrough
    })

    // Using our custom global method
    const badge = wrapper.findByTestId('hero-badge')

    expect(badge.exists()).toBe(true)
    expect(badge.text()).toBe('Refactor Complete')
  })

  it('should apply variant classes to the element found by test id', () => {
    const wrapper = mount(AppBadge, {
      props: { variant: 'destructive' },
      attrs: { 'data-testid': 'alert-badge' },
    })

    const badge = wrapper.findByTestId('alert-badge')
    expect(badge.classes()).toContain('bg-destructive')
  })

  it('should merge custom classes correctly', () => {
    const wrapper = mount(AppBadge, {
      props: { class: 'uppercase' },
      attrs: { 'data-testid': 'custom-badge' },
    })

    const badge = wrapper.findByTestId('custom-badge')
    expect(badge.classes()).toContain('uppercase')
    expect(badge.classes()).toContain('inline-flex') // Base class
  })

  it('should render as a different HTML tag', () => {
    const wrapper = mount(AppBadge, {
      props: { as: 'span' },
      attrs: { 'data-testid': 'span-badge' },
    })

    expect(wrapper.findByTestId('span-badge').element.tagName.toLowerCase()).toBe('span')
  })
})
