<script setup lang="ts">
import { Message } from 'primevue'

defineProps({
  validator: String
})
</script>

<template>
  <Message
    severity="error"
    v-if="validator"
  >
    {{ validator }}
  </Message>
</template>
