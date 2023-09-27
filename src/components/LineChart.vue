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
import { options as commonOptions } from '../config/options'

const props = defineProps<{
  datasetPrimary: number[]
  datasetPrimaryTooltipLabels: string[]
  datasetSecondary?: number[]
  datasetSecondaryTooltipLabels?: string[]
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

const isSecondaryDatasetAvailable = computed(
  () => !!props.datasetSecondary && !!props.datasetSecondaryTooltipLabels,
)

const data = computed(() => ({
  labels: props.labels,
  datasets: [
    {
      data: props.datasetPrimary,
      tooltipLabels: props.datasetPrimaryTooltipLabels,
      gradient: {
        backgroundColor: {
          axis: 'y',
          colors: {
            0: 'rgba(255,255,255,0.2)',
            100: 'rgba(43,100,215,0.1)',
          },
        },
      },
      tooltip: {
        callbacks: {
          labelColor: () => ({
            borderColor: '#256dc2',
            backgroundColor: '#256dc2',
          }),
        },
      },
    },
    isSecondaryDatasetAvailable.value && {
      data: props.datasetSecondary,
      tooltipLabels: props.datasetSecondaryTooltipLabels,
      borderDash: [5, 5],
      borderColor: '#c0ccd9',
      fill: false,
      pointRadius: 0,
      tooltip: {
        callbacks: {
          labelColor: () => ({
            borderColor: 'rgb(125 142 164)',
            backgroundColor: 'rgb(125 142 164)',
          }),
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
      :options="commonOptions"
    />
  </w-card>
</template>

<style scoped></style>
