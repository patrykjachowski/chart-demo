<script setup lang="ts">
import { WText } from '@dp-watson-web/components'
import LineChart from './components/LineChart.vue'
import { chartData1 } from './config/data.ts'
</script>

<template>
  <div class="wrapper">
    <LineChart
      :dataset-primary="chartData1.datasetPrimary"
      :dataset-primary-tooltip-labels="chartData1.datasetPrimaryTooltipLabels"
      :dataset-secondary="chartData1.datasetSecondary"
      :dataset-secondary-tooltip-labels="chartData1.datasetSecondaryTooltipLabels"
      :labels="chartData1.labels"
      :percentage="56"
      popover-title="Booking made throught Doctoralia"
      popover-content="Doctoralia provides a calendar so that patients can book a visit with you. This is the number of bookings that you get thanks to Doctoralia"
      title="Dotoralia Bookings"
      value="1295"
    >
      <template #disclaimer>
        <w-text
          type="subSectionHeading"
          color="secondary"
        >
          How to get more bookings?
        </w-text>
      </template>
    </LineChart>
  </div>
</template>

<style scoped>
/* DEMO STYLES */
.wrapper {
  width: 100%;
  max-width: 1430px;
  margin: 0px auto;
  padding: 20px;
}
</style>
