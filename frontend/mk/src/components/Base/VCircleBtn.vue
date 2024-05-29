<script setup>
const props = defineProps({
    tooltip: {
        type: String,
        required: true,
    },
    color: {
      type: String,
    },
    icon: String,
})
</script>

<template>
  <v-btn
    v-tooltip="props.tooltip"
    :icon="props.icon"
    :color="props.color"
    :style="`box-shadow: 0px 0px 6px -1px ${props.color}`"
    density="comfortable"
    size="small"
    variant="tonal"
  ></v-btn>
</template>
