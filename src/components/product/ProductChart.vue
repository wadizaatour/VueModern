<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { ChartConfig } from '@/components/ui/chart'
import { VisAxis, VisStackedBar, VisXYContainer } from '@unovis/vue'
import { TrendingUp, Loader2 } from 'lucide-vue-next'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartContainer,
  ChartCrosshair,
  ChartTooltip,
  ChartTooltipContent,
  componentToString,
} from '@/components/ui/chart'

// 1. Setup the Data interface
interface PHData {
  name: string
  votes: number
  comments: number
  index: number // We add an index to use as a numeric X-axis
}

const tools = ref<PHData[]>([])
const loading = ref(true)

// 2. The Config (matching your working example's variable approach)
const chartConfig = {
  votes: {
    label: 'Upvotes',
    color: 'var(--chart-1)', // Blue
  },
  comments: {
    label: 'Comments',
    color: 'var(--chart-2)', // Green/Orange depending on your theme
  },
} satisfies ChartConfig

const fetchAITools = async () => {
  loading.value = true
  const query = `
    query {
      posts(topic: "artificial-intelligence", first: 6, order: VOTES) {
        edges {
          node {
            name
            votesCount
            commentsCount
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

    // Transform PH data into the structure the chart likes
    tools.value = result.data.posts.edges.map((edge: any, i: number) => ({
      name: edge.node.name,
      votes: edge.node.votesCount,
      comments: edge.node.commentsCount,
      index: i, // This numeric index ensures the bars align correctly
    }))
  } catch (err) {
    console.error('Fetch error:', err)
  } finally {
    loading.value = false
  }
}

onMounted(fetchAITools)

type Data = (typeof tools.value)[number]
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>AI Tool Engagement</CardTitle>
      <CardDescription> Live data from Product Hunt Topic: AI </CardDescription>
    </CardHeader>
    <CardContent>
      <div v-if="loading" class="flex h-[300px] items-center justify-center">
        <Loader2 class="h-8 w-8 animate-spin text-muted-foreground" />
      </div>

      <ChartContainer v-else :config="chartConfig">
        <VisXYContainer :data="tools" :padding="{ top: 10, bottom: 10, left: 10, right: 10 }">
          <VisStackedBar
            :x="(d: Data) => d.index"
            :y="[(d: Data) => d.votes, (d: Data) => d.comments]"
            :color="[chartConfig.votes.color, chartConfig.comments.color]"
            :rounded-corners="4"
            :bar-padding="0.1"
          />
          <VisAxis
            type="x"
            :x="(d: Data) => d.index"
            :tick-line="false"
            :domain-line="false"
            :grid-line="false"
            :num-ticks="tools.length"
            :tick-format="(i: number) => tools[i]?.name.substring(0, 8) + '...'"
            :tick-values="tools.map((d) => d.index)"
          />
          <ChartTooltip />
          <ChartCrosshair
            :template="
              componentToString(chartConfig, ChartTooltipContent, {
                labelFormatter(i) {
                  return tools[i as number]?.name || ''
                },
              })
            "
            color="#0000"
          />
        </VisXYContainer>
      </ChartContainer>
    </CardContent>
    <CardFooter class="flex-col items-start gap-2 text-sm">
      <div class="flex gap-2 font-medium leading-none">
        Dynamic market data <TrendingUp class="h-4 w-4" />
      </div>
      <div class="leading-none text-muted-foreground">Showing top 6 trending tools</div>
    </CardFooter>
  </Card>
</template>
