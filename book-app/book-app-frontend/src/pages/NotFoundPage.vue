<script setup lang="ts">
import { Button } from 'primevue'
import { RouterLink } from 'vue-router'
</script>
<template>
  <div
    class="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col gap-4 items-center"
  >
    <p class="text-6xl font-bold text-red-400">404</p>
    <h1 class="text-3xl font-bold">Página no encontrada</h1>
    <p>La página que buscas no existe</p>

    <Button
      asChild
      v-slot="slotProps"
      severity="danger"
    >
      <RouterLink
        to="/libros"
        :class="slotProps.class"
      >
        <i class="pi pi-external-link"></i>
        Volver a la página principal
      </RouterLink>
    </Button>
  </div>
</template>
