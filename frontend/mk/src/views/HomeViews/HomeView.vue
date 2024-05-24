<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
</script>

<template>
    <div class="">
        {{ route.name }}
    </div>
</template>