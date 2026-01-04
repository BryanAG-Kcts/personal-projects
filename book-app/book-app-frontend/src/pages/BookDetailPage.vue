<script setup lang="ts">
import { onMounted } from 'vue'
import TitlePage from '../components/atoms/TitlePage.vue'
import { useBookStore } from '../store/books'
import { useRoute } from 'vue-router'
import { Message, Button } from 'primevue'
import BookForm from '../components/organisms/BookForm.vue'
import type { Book } from '../interfaces/book'
import ToastDialog from '../components/atoms/ToastDialog.vue'
import { ref } from 'vue'

const route = useRoute()
const bookStore = useBookStore()
const dialogRef = ref<InstanceType<typeof ToastDialog> | null>(null)

onMounted(async () => {
  await bookStore.getBookById(Number(route.params.id as string))
})

async function handleSubmit(book: Book) {
  await bookStore.updateBook(book)
  await bookStore.fetchBooks()
}

async function handleDelete() {
  await bookStore.deleteBook(bookStore.selectedBook?.id as number)
  await bookStore.fetchBooks()
  bookStore.selectedBook = null
}

function show() {
  dialogRef.value?.show()
}
</script>

<template>
  <Message
    severity="info"
    icon="pi pi-spin pi-spinner"
    v-if="bookStore.loading"
  >
    Cargando libro
  </Message>

  <Message
    severity="error"
    icon="pi pi-times-circle"
    v-if="!bookStore.selectedBook && !bookStore.loading"
  >
    No se encontró el libro solicitado
  </Message>

  <div
    v-if="bookStore.selectedBook"
    class="flex flex-col gap-3"
  >
    <div
      class="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center"
    >
      <TitlePage :title="`Detalles de ` + bookStore.selectedBook?.title">
        <i
          class="pi pi-file"
          style="font-size: 1.875rem"
        ></i>
      </TitlePage>

      <Button
        severity="danger"
        @click="show"
      >
        <i class="pi pi-trash"></i>
        Eliminar libro
      </Button>
    </div>

    <BookForm
      :book="bookStore.selectedBook ?? undefined"
      @handleSubmit="handleSubmit"
    ></BookForm>

    <ToastDialog
      title="Eliminar libro"
      message="¿Estás seguro de eliminar este libro?"
      :accept="handleDelete"
      icon="pi pi-trash"
      severity="danger"
      :reject="() => {}"
      ref="dialogRef"
    ></ToastDialog>
  </div>
</template>
