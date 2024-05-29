<script setup>
</script>

<template>
  <v-card class="ml-4" min-width="350">
    <v-card-title class="border-b">
      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-row justify-start">
          <v-icon icon="mdi-bell-outline"></v-icon>
          <p class="mx-2">Notifications</p>
        </div>
        <div class="flex flex-row">
          <v-circle-btn
            v-if="notifications"
            tooltip="Clear Notifications"
            icon="mdi-trash-can-outline"
            color="red"
          ></v-circle-btn>
        </div>
      </div>
    </v-card-title>

    <v-card-text>
      <div class="flex flex-column mt-2 gap-1">
        <template v-for="(notification, index) in notifications" :key="index">
          <v-notification-item :notification="notification" />
          <v-divider></v-divider>
        </template>

        <v-empty-state
          v-if="!notifications"
          title="Notifications not found"
          icon="mdi-bell-alert-outline"
        ></v-empty-state>
      </div>
    </v-card-text>
  </v-card>
</template>
