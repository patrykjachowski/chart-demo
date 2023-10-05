<script setup lang="ts">
import { WCard } from '@dp-watson-web/components'
import { computed } from 'vue'
import LineChart from './LineChart.vue'
import ChartCardHeader from './ChartCardHeader.vue'
import ChartCardFooter from './ChartCardFooter.vue'

interface ChartData {
  datasetPrimary: number[]
  datasetPrimaryTooltipLabels: string[]
  datasetSecondary?: number[]
  datasetSecondaryTooltipLabels?: string[]
  labels: string[]
  title: string
  value: number
}

const props = defineProps<{
  chartData: ChartData
  popoverTitle?: string
  popoverContent?: string
}>()

const datasetPrimary = computed(() => props.chartData.datasetPrimary)
const datasetPrimaryTooltipLabels = computed(() => props.chartData.datasetPrimaryTooltipLabels)
const datasetSecondary = computed(() => props.chartData.datasetSecondary)
const datasetSecondaryTooltipLabels = computed(() => props.chartData.datasetSecondaryTooltipLabels)
const labels = computed(() => props.chartData.labels)
const title = computed(() => props.chartData.title)
const value = computed(() => props.chartData.value)
</script>

<template>
  <w-card class="chart-card">
    <ChartCardHeader
      :title="title"
      :value="value"
      :popover-title="popoverTitle"
      :popover-content="popoverContent"
    />

    <LineChart
      :dataset-primary="datasetPrimary"
      :dataset-primary-tooltip-labels="datasetPrimaryTooltipLabels"
      :dataset-secondary="datasetSecondary"
      :dataset-secondary-tooltip-labels="datasetSecondaryTooltipLabels"
      :labels="labels"
      :title="title"
      :value="value"
    />

    <ChartCardFooter />
  </w-card>
</template>

<style scoped>
.chart-card {
  width: 100%;
}
</style>
