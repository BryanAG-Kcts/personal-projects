<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useBookStore } from '../store/books'
import { onMounted } from 'vue'
import BreadCrumbRoute from '../components/organisms/BreadCrumbRoute.vue'

onMounted(useBookStore().fetchBooks)
</script>

<template>
  <div class="max-w-5xl mx-auto my-20 flex flex-col gap-2 p-4">
    <BreadCrumbRoute />
    <RouterView />
  </div>
</template>
