<script setup></script>

<template>
  <div class="container justify-center" style="max-width: 1200px">
    <v-row>
      <v-col cols="12">
        <v-row class="justify-center cursor-default gap-6">
          <v-col >
            <v-card
              density="compact"
              variant="tonal"
              color="deep-purple-lighten-2"
              elevation="4"
              link
            >
              <template #text>
                <div class="flex flex-column justify-center items-center">
                  <v-img>
                    <img src="@/assets/img/svg/icon-employee.svg" width="60" alt="icon-employee" />
                  </v-img>

                  <div class="flex flex-column justify-center items-center mt-4 font-weight-bold">
                    <p class="text-lg">Employees</p>
                    <p class="text-xl">94</p>
                  </div>
                </div>
              </template>
            </v-card>
          </v-col>

          <v-col >
            <v-card density="compact" variant="tonal" color="blue-accent-2" elevation="4" link>
              <template #text>
                <div class="flex flex-column justify-center items-center">
                  <v-img>
                    <img src="@/assets/img/svg/icon-users.svg" width="60" alt="icon-employee" />
                  </v-img>

                  <div class="flex flex-column justify-center items-center mt-4 font-weight-bold">
                    <p class="text-lg">Users</p>
                    <p class="text-xl">94</p>
                  </div>
                </div>
              </template>
            </v-card>
          </v-col>

          <v-col >
            <v-card density="compact" variant="tonal" color="red-lighten-2" elevation="4" link>
              <template #text>
                <div class="flex flex-column justify-center items-center">
                  <v-img>
                    <img src="@/assets/img/svg/icon-books.svg" width="60" alt="icon-employee" />
                  </v-img>

                  <div class="flex flex-column justify-center items-center mt-4 font-weight-bold">
                    <p class="text-lg">Books</p>
                    <p class="text-xl">12,944</p>
                  </div>
                </div>
              </template>
            </v-card>
          </v-col>

          <v-col >
            <v-card density="compact" variant="tonal" color="orange-lighten-2" elevation="4" link>
              <template #text>
                <div class="flex flex-column justify-center items-center">
                  <v-img>
                    <img
                      src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='48px'%20height='48px'%3e%3cpath%20fill='%233dd9eb'%20d='M11,18c-3.313,0-6,2.686-6,6c0,3.313,2.687,6,6,6c3.314,0,6-2.687,6-6C17,20.687,14.314,18,11,18'/%3e%3cpath%20fill='%233dd9eb'%20d='M37,5c-3.313,0-6,2.687-6,6c0,3.313,2.687,6,6,6c3.314,0,6-2.687,6-6C43,7.687,40.314,5,37,5'/%3e%3cpath%20fill='%233dd9eb'%20d='M37,31c-3.313,0-6,2.686-6,6c0,3.313,2.687,6,6,6c3.314,0,6-2.687,6-6C43,33.687,40.314,31,37,31'/%3e%3cpath%20fill='%236c19ff'%20d='M31.819,14.028L25.073,22h-8.415C16.88,22.626,17,23.299,17,24c0,0.701-0.12,1.374-0.341,2h8.414%20l6.746,7.973c0.688-1.175,1.765-2.095,3.053-2.584L28.62,24l6.251-7.389C33.583,16.123,32.507,15.202,31.819,14.028'/%3e%3cpath%20fill='%2300b3d7'%20d='M16.658,22H11v4h5.659C16.88,25.375,17,24.701,17,24C17,23.299,16.88,22.626,16.658,22'/%3e%3cpath%20fill='%2300b3d7'%20d='M35.474,9.708l-3.655,4.32c0.688,1.175,1.764,2.095,3.053,2.584l3.655-4.319L35.474,9.708'/%3e%3cpath%20fill='%2300b3d7'%20d='M34.872,31.389c-1.288,0.489-2.365,1.409-3.053,2.584l3.655,4.319l3.053-2.584L34.872,31.389'/%3e%3c/svg%3e"
                      width="60"
                      alt="icon-employee"
                    />
                  </v-img>

                  <div class="flex flex-column justify-center items-center mt-4 font-weight-bold">
                    <p class="text-lg">Tickets</p>
                    <p class="text-xl">12</p>
                  </div>
                </div>
              </template>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col cols="7">
            <v-card
              subtitle="subtitle card"
              density="compact"
              elevation="8"
              variant="outlined"
              color="blue-grey-lighten-1"
            >
              <template #title>
                <div class="flex flex-row justify-between">
                  <p>This is card</p>
                </div>
              </template>
            </v-card>
          </v-col>
          <v-col cols="5">
            <v-card
              subtitle="subtitle card"
              density="compact"
              elevation="8"
              variant="outlined"
              color="blue-grey-lighten-1"
            >
              <template #title>
                <div class="flex flex-row justify-between">
                  <p>This is card</p>
                </div>
              </template>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
