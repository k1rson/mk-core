<script setup>
import { getActivePinia } from 'pinia'
import { ref } from 'vue'

// data()
const visibleServices = ref(false)
const visibleNotifications = ref(false)

const visibleDrawer = ref(true)

const services = ref([
  {
    title: 'Admin Dashboard',
    icon: 'mdi-home-outline',
    pathName: 'admin-dashboard',
    nextDivider: true
  },
  { title: 'Email', icon: 'mdi-email-outline', pathName: 'admin-email' },
  { title: 'Technical Support', icon: 'mdi-face-agent', pathName: '', nextDivider: true },
  { title: 'Book Storage', icon: 'mdi-book-open-blank-variant-outline', pathName: '' },
  { title: 'User Storage', icon: 'mdi-account-outline', pathName: '', nextDivider: true },
  { title: 'MK Cloud', icon: 'mdi-cloud-outline', pathName: '' },
  { title: 'MK Logs', icon: 'mdi-file-document-outline', pathName: '' },
  { title: 'MK Servers', icon: 'mdi-server-outline', pathName: '' }
])

// func()
</script>

<template>
  <v-layout ref="app">
    <!-- left aside -->
    <v-navigation-drawer v-model="visibleDrawer" width="55">
      <div class="flex flex-column justify-between h-full">
        <div
          class="flex flex-column justify-center items-center w-full"
          style="background-color: rgb(52, 61, 92) !important; border-bottom-left-radius: 25px"
        >
          <router-link :to="{ name: 'home' }">
            <v-img width="45" class="hover:animate-pulse mb-2 mt-1">
              <img src="@/assets/img/svg/logo-evo-none-text.svg" alt="" />
            </v-img>
          </router-link>

          <v-icon
            v-tooltip:end="'Select service'"
            icon="mdi-dots-grid"
            class="transition-all hover:bg-slate-500 rounded-lg cursor-pointer mb-1 p-5"
            @click="visibleServices = !visibleServices"
          ></v-icon>

          <v-expand-transition>
            <div v-if="visibleServices" class="flex flex-column mb-2">
              <router-link
                v-for="(service, index) in services"
                :key="index"
                :to="{ name: service.pathName }"
              >
                <v-icon
                  :icon="service.icon"
                  v-tooltip:end="service.title"
                  class="transition-all hover:bg-slate-500 rounded-lg cursor-pointer p-5"
                ></v-icon>

                <v-divider class="m-1" v-if="service.nextDivider"></v-divider>
              </router-link>
            </div>
          </v-expand-transition>
        </div>

        <div class="flex flex-column justify-center items-center w-full">
          <v-menu v-model="visibleNotifications" :close-on-content-click="false" location="end">
            <template #activator="{ props }">
              <v-icon
                v-tooltip:end="'Notifications'"
                v-bind="props"
                icon="mdi-bell-outline"
                size="small"
                class="transition-all hover:bg-zinc-700 rounded-lg cursor-pointer mb-1 p-5"
              ></v-icon>
            </template>

            <v-notifications></v-notifications>
          </v-menu>

          <v-dialog transition="dialog-bottom-transition" fullscreen>
            <template #activator="{ props: activatorProps }">
              <v-icon
                v-tooltip:end="'Settings'"
                v-bind="activatorProps"
                icon="mdi-cog-outline"
                size="small"
                class="transition-all hover:bg-zinc-700 rounded-lg cursor-pointer mb-1 p-5"
              ></v-icon>
            </template>

            <v-card> settings </v-card>
          </v-dialog>

          <v-divider class="w-full m-2" />

          <div
            v-tooltip:end="'Account'"
            class="flex justify-center items-center transition-all hover:bg-zinc-700 rounded-lg cursor-pointer mb-2 p-1"
          >
            <v-avatar
              image="https://99px.ru/sstorage/1/2024/02/image_1150224120805293845.gif"
              size="34"
            ></v-avatar>
          </div>
        </div>
      </div>
    </v-navigation-drawer>

    <!-- header -->
    <v-app-bar density="compact">
      <v-btn
        v-tooltip:end="visibleDrawer ? 'Hide Left Bar' : 'Show Left Bar'"
        :icon="visibleDrawer ? 'mdi-chevron-left' : 'mdi-chevron-right'"
        variant="plain"
        density="comfortable"
        @click="visibleDrawer = !visibleDrawer"
      ></v-btn>
    </v-app-bar>

    <!-- main content <SLOT in MAIN> -->
    <v-main class="flex justify-center m-4">
      <slot></slot>
    </v-main>

    <!-- footer -->
    <v-footer app> </v-footer>
  </v-layout>
</template>
