<script setup lang="ts">
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
import { hoverLine } from '../plugins/hoverLine'

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
  hoverLine,
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
      borderColor: '#c0ccd9',
      borderDash: [5, 5],
      fill: false,
      pointRadius: 0,
      pointHoverRadius: 0,
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
  <div class="wrapper">
    <Line
      :data="data"
      :options="options"
    />
  </div>
</template>

<style scoped>
.chart-card {
  width: 100%;
}
.wrapper {
  position: relative;
  height: 300px;
}
</style>
