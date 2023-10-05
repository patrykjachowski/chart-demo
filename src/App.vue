<script setup lang="ts">
import ChartCard from './components/ChartCard.vue'
import { chartData1 } from './config/data.ts'
</script>

<template>
  <div class="wrapper">
    <ChartCard
      :chart-data="chartData1"
      popover-title="Booking made throught Doctoralia"
      popover-content="Doctoralia provides a calendar so that patients can book a visit with you. This is the number of bookings that you get thanks to Doctoralia"
    />
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
