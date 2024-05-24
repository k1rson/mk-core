<script setup></script>

<template>
  <div class="mx-auto h-50">
    <v-empty-state
      :headline="$t('errorViews.notFound.headline')"
      :title="$t('errorViews.notFound.title')"
      :text="$t('errorViews.notFound.text')"
      image="https://vuetifyjs.b-cdn.net/docs/images/logos/v.png"
    ></v-empty-state>
  </div>
</template>
