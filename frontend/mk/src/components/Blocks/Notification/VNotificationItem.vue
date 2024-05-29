<script setup>
const props = defineProps({
  notification: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="transition-all hover:bg-zinc-700 rounded-lg cursor-pointer p-4">
    <div class="flex flex-row justify-start items-center gap-4">
      <v-icon icon="mdi-wrench-cog-outline"></v-icon>

      <div class="flex flex-column">
        <p class="text-muted text-sm">
          {{ props.notification.type }} • {{ props.notification.invoke_at }}
        </p>
        <p class="text-md mb-1">{{ props.notification.title }}</p>

        <p class="text-muted text-sm text-wrap" style="max-width: 400px;">{{ props.notification.description }}</p>
      </div>
    </div>
  </div>
</template>
