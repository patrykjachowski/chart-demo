<script setup lang="ts">
import { WIcon, WSpacer, WStack, WText } from '@dp-watson-web/components'
</script>

<template>
  <w-spacer vertical="large" />

  <w-stack
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
</template>
