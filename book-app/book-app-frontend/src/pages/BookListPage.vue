<script lang="ts">
import { useBookStore } from '../store/books'
import {
  DataTable,
  Message,
  Column,
  InputText,
  Popover,
  Button as PiButton
} from 'primevue'
import { defineComponent, type VNodeRef } from 'vue'
import type { Book } from '../interfaces/book'
import { RouterLink } from 'vue-router'
import { currencyFormat } from '../utils/dataFormat'
import TitlePage from '../components/atoms/TitlePage.vue'

export default defineComponent({
  name: 'BookListPage',
  data() {
    return {
      filters: {
        title: { value: null, matchMode: 'contains' },
        author: { value: null, matchMode: 'contains' },
        genre: { value: null, matchMode: 'contains' }
      },
      popoverRef: null as VNodeRef | null
    }
  },
  components: {
    DataTable,
    Message,
    Column,
    InputText,
    Popover,
    PiButton,
    RouterLink,
    TitlePage
  },
  computed: {
    bookStore() {
      return useBookStore()
    }
  },
  mounted() {
    this.popoverRef = this.$refs.popoverRef
  },
  methods: {
    togglePopover(event: Event, book: Book) {
      this.popoverRef?.toggle(event)
      this.bookStore.selectedBook = book
    },
    currencyFormat
  }
})
</script>

<template>
  <div class="flex flex-col gap-3 my-3 sm:flex-row sm:justify-between">
    <TitlePage title="Tabla de libros">
      <i
        class="pi pi-book text-3xl"
        style="font-size: 1.875rem"
      ></i>
    </TitlePage>

    <div class="flex gap-3">
      <PiButton
        asChild
        v-slot="slotProps"
      >
        <RouterLink
          to="/libros/nuevo"
          :class="`${slotProps.class} flex-1 text-center sm:flex-none`"
        >
          <i class="pi pi-external-link"></i>
          Crear libro
        </RouterLink>
      </PiButton>

      <PiButton
        asChild
        v-slot="slotProps"
      >
        <RouterLink
          to="/libros/dashboard"
          :class="`${slotProps.class} flex-1 text-center sm:flex-none`"
        >
          <i class="pi pi-external-link"></i>
          Ver gráficas
        </RouterLink>
      </PiButton>
    </div>
  </div>

  <DataTable
    v-model:filters="filters"
    paginator
    removable-sort
    filter-display="row"
    data-key="id"
    :rows="10"
    :value="bookStore.books"
    :loading="bookStore.loading"
    row-hover
    style="border-radius: 0.25rem; overflow: hidden"
  >
    <template #empty>
      <Message
        severity="error"
        icon="pi pi-times-circle"
      >
        No se encontraron los libros. Intente más tarde o elimina filtros
      </Message>
    </template>

    <template #loading>
      <Message
        severity="info"
        icon="pi pi-spin pi-spinner"
      >
        Cargando libros
      </Message>
    </template>

    <Column
      field="title"
      header="Título"
      sortable
      class="w-1/4"
    >
      <template #filter="{ filterModel, filterCallback }">
        <InputText
          v-model="filterModel.value"
          type="text"
          @input="filterCallback()"
          placeholder="Buscar por título"
          class="w-full"
        />
      </template>
    </Column>

    <Column
      field="author"
      header="Autor"
      sortable
      class="w-1/4"
    >
      <template #filter="{ filterModel, filterCallback }">
        <InputText
          v-model="filterModel.value"
          type="text"
          @input="filterCallback()"
          placeholder="Buscar por autor"
          class="w-full"
        />
      </template>
    </Column>

    <Column
      field="genre"
      header="Género"
      sortable
      class="w-1/4"
    >
      <template #filter="{ filterModel, filterCallback }">
        <InputText
          v-model="filterModel.value"
          type="text"
          @input="filterCallback()"
          placeholder="Buscar por género"
          class="w-full"
        />
      </template>
    </Column>

    <Column
      field="year"
      header="Año"
      sortable
    ></Column>

    <Column
      field="price"
      header="precio"
      sortable
    >
      <template #body="{ data }">
        {{ currencyFormat(data.price) }}
      </template>
    </Column>

    <Column
      header="Ver más"
      class="w-1/6"
    >
      <template #body="{ data }">
        <PiButton
          type="button"
          @click="togglePopover($event, data)"
          icon="pi pi-eye"
          severity="secondary"
        ></PiButton>
      </template>
    </Column>
  </DataTable>

  <Popover ref="popoverRef">
    <div class="flex flex-col gap-2 max-w-40">
      <img
        :src="bookStore.selectedBook?.image"
        :alt="bookStore.selectedBook?.title"
        class="w-full aspect-[376/500] object-cover"
      />

      <PiButton
        asChild
        v-slot="slotProps"
      >
        <RouterLink
          :to="`/libros/${bookStore.selectedBook?.id}`"
          :class="slotProps.class"
        >
          <i class="pi pi-external-link"></i>
          Más detalles
        </RouterLink>
      </PiButton>
    </div>
  </Popover>
</template>
