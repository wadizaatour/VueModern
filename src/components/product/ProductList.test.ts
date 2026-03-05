import { render, screen } from '@testing-library/vue'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import ProductList from './ProductList.vue'

const mockData = {
  data: {
    posts: {
      edges: [
        {
          node: {
            name: 'Test AI Tool',
            tagline: 'The best AI for testing',
            votesCount: 100,
            website: 'https://test.com',
            url: 'https://producthunt.com/test',
          },
        },
      ],
    },
  },
}

describe('AITools Component', () => {
  beforeEach(() => {
    // Use globalThis so TypeScript is happy in both Browser/Node environments
    // We use "as any" or "as unknown" to tell TS we are intentionally mocking a global function
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    })
  })

  it('shows loading state initially', () => {
    render(ProductList)
    expect(screen.getByTestId('loading-spinner')).toBeTruthy()
  })

  it('renders the list of tools after fetching', async () => {
    render(ProductList)

    // Wait for the tool item to appear in the DOM
    const toolItems = await screen.findAllByTestId('tool-item')

    expect(toolItems).toHaveLength(1)
    expect(screen.getByTestId('tool-name').textContent).toContain('Test AI Tool')
  })
  //To do: fix the test
  it.skip('verifies the external link is correct', async () => {
    render(ProductList)

    const button = await screen.getAllByTestId('open-button')
    expect(button).toBeTruthy()
    expect(button).toBe('https://test.com')
  })
})
