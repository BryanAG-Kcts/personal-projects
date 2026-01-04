<script setup lang="ts">
import TitlePage from '../components/atoms/TitlePage.vue'
import BookForm from '../components/organisms/BookForm.vue'
import type { Book } from '../interfaces/book'
import { useBookStore } from '../store/books'

const bookStore = useBookStore()

async function submit(book: Book) {
  await bookStore.createBook(book)
  await bookStore.fetchBooks()
}
</script>

<template>
  <TitlePage title="Crear libro">
    <i
      class="pi pi-address-book"
      style="font-size: 1.875rem"
    ></i>
  </TitlePage>
  <BookForm @handle-submit="submit"></BookForm>
</template>
