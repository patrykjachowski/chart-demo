<script setup lang="ts">
import { WCard, WText } from '@dp-watson-web/components'
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import gradient from 'chartjs-plugin-gradient'
import { computed } from 'vue'
import { Line } from 'vue-chartjs'
import { options } from '../config/options'

const props = defineProps<{
  dataset: number[]
  labels: string[]
}>()

ChartJS.register(
  CategoryScale,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  gradient,
)

const data = computed(() => ({
  labels: props.labels,
  datasets: [
    {
      data: props.dataset,
      gradient: {
        backgroundColor: {
          axis: 'y',
          colors: {
            0: 'rgba(255,255,255,0.2)',
            100: 'rgba(43,100,215,0.1)',
          },
        },
      },
    },
  ],
}))
</script>

<template>
  <w-text type="displayHeading"> DEMO!! </w-text>
  <w-card>
    <Line
      :data="data"
      :options="options"
    />
  </w-card>
</template>

<style scoped></style>
