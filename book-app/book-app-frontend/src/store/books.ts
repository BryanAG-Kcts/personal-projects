import { defineStore } from 'pinia'
import type { Book } from '../interfaces/book'
import { saveFetch } from '../utils/saveFetch'
import { BOOKS_ENDPOINT } from '../constants/api'
import type {
  BooksEndpoint,
  GetBookByIdEndpoint,
  GetBooksEndpoint
} from '../interfaces/bookEndpoints'

export const useBookStore = defineStore('book', {
  state: () => ({
    books: [] as Book[],
    selectedBook: null as Book | null,
    loading: false,
    error: null as string | null
  }),
  actions: {
    async fetchBooks() {
      this.loading = true
      this.error = null
      const [data, error] = await saveFetch<GetBooksEndpoint>(
        fetch(BOOKS_ENDPOINT)
      )
      this.loading = false
      this.error = error?.message ?? null
      this.books = data?.data ?? []
    },
    async getBookById(id: number) {
      this.loading = true
      this.error = null
      const [data, error] = await saveFetch<GetBookByIdEndpoint>(
        fetch(`${BOOKS_ENDPOINT}/${id}`)
      )
      this.loading = false
      this.error = error?.message ?? null
      this.selectedBook = data?.data ?? null
    },
    async deleteBook(id: number) {
      this.loading = true
      this.error = null
      const [, error] = await saveFetch<BooksEndpoint>(
        fetch(`${BOOKS_ENDPOINT}/${id}`, {
          method: 'DELETE'
        })
      )
      this.loading = false
      this.error = error?.message ?? null
    },
    async createBook(book: Book) {
      this.loading = true
      this.error = null
      const [, error] = await saveFetch<BooksEndpoint>(
        fetch(BOOKS_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(book)
        })
      )
      this.loading = false
      this.error = error?.message ?? null
    },
    async updateBook(book: Book) {
      this.loading = true
      this.error = null
      const [, error] = await saveFetch<BooksEndpoint>(
        fetch(`${BOOKS_ENDPOINT}/${book.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(book)
        })
      )
      this.loading = false
      this.error = error?.message ?? null
    }
  }
})
