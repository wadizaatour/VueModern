import { render, fireEvent } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import AppLogin from './AppLogin.vue'

describe('Login Dialog', () => {
  it('should open the dialog when the login button is clicked', async () => {
    const { getByTestId } = render(AppLogin)
    const loginButton = getByTestId('login-trigger')
    await fireEvent.click(loginButton)
    const modal = getByTestId('login-dialog')

    expect(modal).toBeDefined()
  })
})
