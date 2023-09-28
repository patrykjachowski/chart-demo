<script setup lang="ts">
import { WStack, WStackItem } from '@dp-watson-web/components'
import LineChart from './components/LineChart.vue'
import { chartData1, chartData2, chartData3, chartData4 } from './config/data.ts'
</script>

<template>
  <w-stack
    direction="column"
    gap="medium"
    class="wrapper"
  >
    <w-stack-item class="full-width">
      <w-stack
        gap="medium"
        full-width
      >
        <LineChart
          :dataset-primary="chartData1.datasetPrimary"
          :dataset-primary-tooltip-labels="chartData1.datasetPrimaryTooltipLabels"
          :dataset-secondary="chartData1.datasetSecondary"
          :dataset-secondary-tooltip-labels="chartData1.datasetSecondaryTooltipLabels"
          :labels="chartData1.labels"
          title="Dotoralia Bookings"
          value="1295"
        />
        <LineChart
          :dataset-primary="chartData2.datasetPrimary"
          :dataset-primary-tooltip-labels="chartData2.datasetPrimaryTooltipLabels"
          :dataset-secondary="chartData2.datasetSecondary"
          :dataset-secondary-tooltip-labels="chartData2.datasetSecondaryTooltipLabels"
          :labels="chartData2.labels"
          title="Profile Bookings"
          value="18"
        />
      </w-stack>
    </w-stack-item>

    <w-stack-item class="full-width">
      <w-stack
        gap="medium"
        full-width
      >
        <LineChart
          :dataset-primary="chartData3.datasetPrimary"
          :dataset-primary-tooltip-labels="chartData3.datasetPrimaryTooltipLabels"
          :dataset-secondary="chartData3.datasetSecondary"
          :dataset-secondary-tooltip-labels="chartData3.datasetSecondaryTooltipLabels"
          :labels="chartData3.labels"
          title="Automatic Confirmations"
          value="1295"
        />
        <LineChart
          :dataset-primary="chartData4.datasetPrimary"
          :dataset-primary-tooltip-labels="chartData4.datasetPrimaryTooltipLabels"
          :dataset-secondary="chartData4.datasetSecondary"
          :dataset-secondary-tooltip-labels="chartData4.datasetSecondaryTooltipLabels"
          :labels="chartData4.labels"
          title="Score from patients"
          value="4.2"
        />
      </w-stack>
    </w-stack-item>
  </w-stack>
</template>

<style scoped>
/* DEMO STYLES */
.wrapper {
  width: 100%;
  max-width: 1430px;
  margin: 0px auto;
  padding: 20px;
}

.full-width {
  width: 100%;
}
</style>
