<script setup lang="ts">
import LineChart from './components/LineChart.vue'

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
const dataset = [65, 59, 80, 81, 56, 55, 40]
</script>

<template>
  <LineChart
    :dataset="dataset"
    :labels="labels"
  />
</template>

<style scoped></style>
