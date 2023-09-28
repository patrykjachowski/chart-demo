<script setup lang="ts">
import { WCard, WSpacer, WText } from '@dp-watson-web/components'
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
  title: string
  value: string
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
      backgroundColor: '#c0ccd9',
      borderColor: '#c0ccd9',
      borderDash: [5, 5],
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
  <w-card class="chart-card">
    <w-text type="sectionHeading">{{ title }}</w-text>
    <w-spacer vertical="small">
      <w-text type="displayHeading">{{ value }}</w-text>
    </w-spacer>
    <div class="wrapper">
      <Line
        :data="data"
        :options="commonOptions"
      />
    </div>
  </w-card>
</template>

<style scoped>
.chart-card {
  width: 100%;
}
.wrapper {
  position: relative;
}
</style>
