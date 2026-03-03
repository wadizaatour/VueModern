import { config } from '@vue/test-utils'

// Simple plugin that adds findByTestId method
const findByTestIdPlugin = (wrapper) => {
  return {
    findByTestId(testId) {
      return wrapper.find(`[data-testid="${testId}"]`)
    },
  }
}
config.plugins.VueWrapper.install(findByTestIdPlugin)
config.plugins.DOMWrapper.install(findByTestIdPlugin)
