<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { Breadcrumb } from 'primevue'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const route = useRoute()
const breadcrumbs = computed(() => {
  const pathSegments = route.path.split('/').filter(Boolean)
  return pathSegments.map((segment, index) => {
    const link = `/${pathSegments.slice(0, index + 1).join('/')}`
    return { label: segment, link }
  })
})

const home = ref({
  icon: 'pi pi-home',
  link: '/libros'
})
</script>

<template>
  <Breadcrumb
    :home="home"
    :model="breadcrumbs"
    class="rounded-sm"
  >
    <template #item="{ item }">
      <RouterLink
        :to="item.link"
        v-if="item.link !== route.path"
      >
        <p
          v-if="item.label"
          style="text-decoration: underline"
        >
          {{ item.label }}
        </p>
        <i
          v-else
          :class="item.icon"
        ></i>
      </RouterLink>

      <span v-else>
        <p v-if="item.label">{{ item.label }}</p>
        <i
          v-else
          :class="item.icon"
        ></i>
      </span>
    </template>
  </Breadcrumb>
</template>
