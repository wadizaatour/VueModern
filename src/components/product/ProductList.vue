<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item'

interface Post {
  name: string
  tagline: string
  votesCount: number
  website: string
  url: string
}

const tools = ref<Post[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

const fetchAITools = async () => {
  loading.value = true
  const query = `
    query GetAITools {
      posts(topic: "artificial-intelligence", first: 10, order: VOTES) {
        edges {
          node {
            name
            tagline
            votesCount
            website
            url
          }
        }
      }
    }
  `

  try {
    const response = await fetch('https://api.producthunt.com/v2/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_PH_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    })
    const result = await response.json()
    if (result.errors) {
      error.value = result.errors[0].message
    } else {
      tools.value = result.data.posts.edges.map((edge: any) => edge.node)
    }
  } catch (err) {
    error.value = 'Failed to load tools.'
  } finally {
    loading.value = false
  }
}

onMounted(fetchAITools)
</script>

<template>
  <div class="max-w-4xl mx-auto p-6" data-testid="tool-directory">
    <div v-if="loading" data-testid="loading-spinner">
      <div v-for="i in 3" :key="i" class="h-20 w-full bg-gray-50 animate-pulse rounded-md" />
    </div>

    <div v-else-if="!error" class="flex flex-col gap-4" data-testid="tool-list">
      <Item v-for="tool in tools" :key="tool.name" variant="outline" data-testid="tool-item">
        <ItemContent>
          <ItemTitle data-testid="tool-name">{{ tool.name }}</ItemTitle>
          <ItemDescription>{{ tool.tagline }}</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm" :href="tool.website" data-testid="open-button-0">
            Open
          </Button>
        </ItemActions>
      </Item>
    </div>
  </div>
</template>
