<script setup lang="ts">
import LineChart from './components/LineChart.vue'

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
const datasetPrimary = [165, 159, 180, 181, 156, 155, 140]
const datasetSecondary = [65, 259, 280, 81, 256, 25, 140]
const datasetPrimaryTooltipLabels = [
  'Friday 8 Jan',
  'Friday 8 Feb',
  'Friday 8 Mar',
  'Friday 8 April',
  'Friday 8 May',
  'Friday 8 June',
  'Friday 8 July',
]
const datasetSecondaryTooltipLabels = [
  'Friday 1 Jan',
  'Friday 1 Feb',
  'Friday 1 Mar',
  'Friday 1 April',
  'Friday 1 May',
  'Friday 1 June',
  'Friday 1 July',
]
</script>

<template>
  <LineChart
    :dataset-primary="datasetPrimary"
    :dataset-primary-tooltip-labels="datasetPrimaryTooltipLabels"
    :dataset-secondary="datasetSecondary"
    :dataset-secondary-tooltip-labels="datasetSecondaryTooltipLabels"
    :labels="labels"
  />
</template>

<style scoped></style>
