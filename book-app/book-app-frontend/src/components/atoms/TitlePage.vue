<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div class="flex p-2 gap-2 text-3xl items-center">
    <slot></slot>
    <h1 class="font-semibold">
      {{ title }}
    </h1>
    <slot name="after"></slot>
  </div>
</template>
