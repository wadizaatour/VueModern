import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Badge from './AppBadge.vue'

describe('Badge Component', () => {
  it('should render the slot content correctly', () => {
    const wrapper = mount(Badge, {
      slots: {
        default: 'New Feature',
      },
    })

    expect(wrapper.text()).toBe('New Feature')
    expect(wrapper.attributes('data-slot')).toBe('badge')
  })

  it('should apply the default variant classes from badgeVariants', () => {
    const wrapper = mount(Badge)

    // Checks for a base class likely present in your badgeVariants
    // Using 'toContain' allows flexibility with Tailwind's generated strings
    expect(wrapper.classes()).toContain('inline-flex')
  })

  it('should apply the correct variant class when the variant prop is passed', () => {
    const wrapper = mount(Badge, {
      props: {
        variant: 'destructive',
      },
    })

    // This ensures your variant logic (badgeVariants) is mapping correctly
    expect(wrapper.classes()).toContain('bg-destructive')
  })

  it('should merge additional custom classes provided via props', () => {
    const customClass = 'custom-test-class'
    const wrapper = mount(Badge, {
      props: {
        class: customClass,
      },
    })

    // Validates that the 'cn' utility is working as expected
    expect(wrapper.classes()).toContain(customClass)
    expect(wrapper.classes()).toContain('inline-flex')
  })

  it('should render as the specified HTML tag when the "as" prop is used', () => {
    const wrapper = mount(Badge, {
      props: {
        as: 'span',
      },
      slots: {
        default: 'Span Badge',
      },
    })

    // Tests the polymorphic behavior of the reka-ui Primitive
    expect(wrapper.element.tagName.toLowerCase()).toBe('span')
  })
})
