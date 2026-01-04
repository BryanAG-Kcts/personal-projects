<script setup lang="ts">
import { computed } from 'vue'
import TitlePage from '../components/atoms/TitlePage.vue'
import { useBookStore } from '../store/books'
import Chart from 'primevue/chart'
import Message from 'primevue/message'

const bookStore = useBookStore()
const booksByGenre = computed(() => {
  const counts: Record<string, number> = {}
  bookStore.books.forEach(book => {
    counts[book.genre] = (counts[book.genre] || 0) + 1
  })
  return counts
})

const booksByAuthor = computed(() => {
  const counts: Record<string, number> = {}
  bookStore.books.forEach(book => {
    counts[book.author] = (counts[book.author] || 0) + 1
  })
  return counts
})

const booksByYear = computed(() => {
  const counts: Record<number, number> = {}
  bookStore.books.forEach(book => {
    counts[book.year] = (counts[book.year] || 0) + 1
  })
  return counts
})

const priceDistribution = computed(() => {
  const buckets = {
    '<10': 0,
    '10-20': 0,
    '20-50': 0,
    '50+': 0
  }
  bookStore.books.forEach(book => {
    if (book.price < 10) buckets['<10']++
    else if (book.price <= 20) buckets['10-20']++
    else if (book.price <= 50) buckets['20-50']++
    else buckets['50+']++
  })
  return buckets
})
</script>

<template>
  <Message
    severity="info"
    icon="pi pi-spin pi-spinner"
    v-if="bookStore.loading"
  >
    Cargando libros
  </Message>

  <Message
    severity="error"
    icon="pi pi-times-circle"
    v-if="bookStore.error"
  >
    No pudimos cargar los libros
  </Message>

  <div
    v-else
    class="flex flex-col gap-2"
  >
    <TitlePage title="Gráficas">
      <i
        class="pi pi-chart-bar"
        style="font-size: 1.875rem"
      ></i>
    </TitlePage>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 gap-12 justify-between gap-x-20 items-center"
    >
      <div class="chartContainer">
        <h2>Gráfica de libros por género</h2>
        <Chart
          type="pie"
          :data="{
            labels: Object.keys(booksByGenre),
            datasets: [
              {
                data: Object.values(booksByGenre),
                backgroundColor: [
                  '#42A5F5',
                  '#66BB6A',
                  '#FFA726',
                  '#AB47BC',
                  '#FF7043'
                ]
              }
            ]
          }"
        />
      </div>

      <div class="chartContainer">
        <h2>Gráfica de distribución de precios</h2>

        <Chart
          type="doughnut"
          :data="{
            labels: Object.keys(priceDistribution),
            datasets: [
              {
                data: Object.values(priceDistribution),
                backgroundColor: ['#66BB6A', '#FFA726', '#42A5F5', '#AB47BC']
              }
            ]
          }"
        />
      </div>

      <div class="chartContainer">
        <h2>Gráfica de libros por autor</h2>
        <Chart
          type="bar"
          :data="{
            labels: Object.keys(booksByAuthor),
            datasets: [
              {
                label: 'Libros por autor',
                data: Object.values(booksByAuthor),
                backgroundColor: '#42A5F5'
              }
            ]
          }"
          :options="{ indexAxis: 'y' }"
        />
      </div>

      <div class="chartContainer">
        <h2>Gráfica de distribución por año</h2>
        <Chart
          type="line"
          :data="{
            labels: Object.keys(booksByYear).sort(),
            datasets: [
              {
                label: 'Libros por año',
                data: Object.keys(booksByYear)
                  .sort()
                  .map(year => booksByYear[parseInt(year)]),
                fill: false,
                borderColor: '#42A5F5'
              }
            ]
          }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.chartContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
