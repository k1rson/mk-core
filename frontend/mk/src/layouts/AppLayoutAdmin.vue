<script setup></script>

<template>
  <v-layout>
    <v-navigation-drawer class="cursor-default" :width="56">
      <v-list density="compact" nav style="background-color: rgb(52, 61, 92) !important; border-bottom-left-radius: 25px;">
        <router-link :to="{name: 'admin-dashboard'}">
          <v-img class="mb-2 cursor-pointer" rounded="circle" src="../src/assets/images/svg/logo-evo-none-text.svg"></v-img>
        </router-link>
       
        <v-list-item
          v-tooltip:end="'Choosing a service'"
          title="Services"
          prepend-icon="mdi-dots-grid"
          value="services"
          rounded="lg"
        ></v-list-item>
        <v-list-item
          v-tooltip:end="'Searching a service'"
          title="Search"
          prepend-icon="mdi-magnify"
          value="search"
          rounded="lg"
        ></v-list-item>
      </v-list>

      <template v-slot:append>
        <v-list density="compact" nav>
          <v-list-item
            v-tooltip:end="'Favorites services'"
            title="Favorites services"
            prepend-icon="mdi-star-outline"
            value="favorites"
            rounded="lg"
          ></v-list-item>
          <v-list-item
            v-tooltip:end="'Notifications'"
            title="Notifications"
            prepend-icon="mdi-bell-outline"
            value="notifications"
            rounded="lg"
          ></v-list-item>
          <v-list-item
            v-tooltip:end="'Settings'"
            title="Settings"
            prepend-icon="mdi-cog-outline"
            value="settings"
            rounded="lg"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <div class="flex flex-column justify-center items-center mt-2 mb-2">
          <div
            v-tooltip:end="'Account'"
            class="hover:cursor-pointer hover:bg-zinc-800 transition ease-in-out delay-50 rounded-lg p-1"
          >
            <v-avatar
              image="https://99px.ru/sstorage/1/2024/02/image_1150224120805293845.gif"
              size="34"
            ></v-avatar>
          </div>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main class="m-4">
      <slot></slot>
    </v-main>
  </v-layout>
</template>
