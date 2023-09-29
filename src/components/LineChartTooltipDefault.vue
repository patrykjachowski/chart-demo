<script setup lang="ts">
import { WBadge, WCard, WIcon, WPopover, WSpacer, WStack, WText } from '@dp-watson-web/components'
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
import { optionsTooltipDefault } from '../config/options'

const props = defineProps<{
  datasetPrimary: number[]
  datasetPrimaryTooltipLabels: string[]
  datasetSecondary?: number[]
  datasetSecondaryTooltipLabels?: string[]
  percentage?: number
  popoverTitle?: string
  popoverContent?: string
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
    <w-stack
      justify-content="space-between"
      align-items="center"
    >
      <w-stack
        gap="small"
        align-items="center"
      >
        <w-text type="sectionHeading">{{ title }}</w-text>

        <w-popover v-if="popoverTitle && popoverContent">
          <w-icon
            name="question-filled"
            size="medium"
            class="heading-icon"
          />

          <template #content>
            <w-stack
              style="padding: var(--w-space-m)"
              direction="column"
              class="popover"
              gap="small"
            >
              <w-text type="subSectionHeading">
                {{ popoverTitle }}
              </w-text>

              <w-text
                color="secondary"
                type="body"
              >
                {{ popoverContent }}
              </w-text>
            </w-stack>
          </template>
        </w-popover>
      </w-stack>
      <slot name="disclaimer"></slot>
    </w-stack>

    <w-spacer vertical="small">
      <w-stack
        gap="small"
        align-items="center"
      >
        <w-text type="displayHeading">{{ value }}</w-text>
        <w-badge
          v-if="percentage"
          type="success"
          >+{{ percentage }}%</w-badge
        >
      </w-stack>
    </w-spacer>

    <div class="wrapper">
      <Line
        :data="data"
        :options="optionsTooltipDefault"
      />
    </div>

    <w-spacer vertical="large" />

    <w-stack
      align-items="bottom"
      justify-content="flex-end"
      gap="small"
    >
      <w-text
        type="subSectionHeading"
        color="secondary"
      >
        View Details
      </w-text>

      <w-icon
        name="arrow-right"
        size="medium"
      />
    </w-stack>
  </w-card>
</template>

<style scoped>
.chart-card {
  width: 100%;
}
.wrapper {
  position: relative;
}

.heading-icon {
  cursor: pointer;
  margin-top: 5px;
}

.popover {
  width: 100%;
  max-width: 350px;
}
</style>
