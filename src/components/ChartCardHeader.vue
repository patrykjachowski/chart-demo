<script setup lang="ts">
import { WBadge, WIcon, WPopover, WSpacer, WStack, WText } from '@dp-watson-web/components'

defineProps<{
  title: string
  popoverTitle?: string
  popoverContent?: string
  value: number
}>()
</script>

<template>
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

    <w-text
      type="subSectionHeading"
      color="secondary"
    >
      How to get more bookings?
    </w-text>
  </w-stack>

  <w-spacer vertical="small">
    <w-stack
      gap="small"
      align-items="center"
    >
      <w-text type="displayHeading">{{ value }}</w-text>
      <w-badge
        v-if="value"
        type="success"
        >+56%</w-badge
      >
    </w-stack>
  </w-spacer>
</template>

<style scoped>
.heading-icon {
  cursor: pointer;
  margin-top: 5px;
}

.popover {
  width: 100%;
  max-width: 350px;
}
</style>
