<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { BookZodSchema, type Book } from '../../interfaces/book'
import {
  DatePicker,
  Select,
  Image,
  InputText,
  Button,
  InputNumber,
  useToast,
  Toast
} from 'primevue'
import { GENRES } from '../../constants/book'
import MessageValidator from '../atoms/MessageValidator.vue'

const props = defineProps<{
  book?: Book
}>()

const emit = defineEmits<{
  (e: 'handleSubmit', book: Book): void
}>()

const title = ref('')
const author = ref('')
const year = ref(new Date().getFullYear())
const genre = ref({ name: '' })
const price = ref(0)
const image = ref('')
const date = ref(new Date())

const selectGenres = ref(
  GENRES.map(genre => ({
    name: genre
  }))
)

const toast = useToast()
const validators = computed(() => {
  return {
    title: validate('title', title.value),
    author: validate('author', author.value),
    year: validate('year', year.value),
    genre: validate('genre', genre.value?.name),
    price: validate('price', price.value),
    image: validate('image', image.value)
  }
})

onMounted(() => {
  if (props.book) {
    title.value = props.book.title
    author.value = props.book.author
    year.value = props.book.year
    genre.value = { name: props.book.genre }
    price.value = props.book.price
    image.value = props.book.image
    date.value = new Date(props.book.year, 0, 1)
  }
})

function submit() {
  const book: Book = {
    title: title.value,
    author: author.value,
    year: date.value.getFullYear(),
    genre: genre.value.name,
    price: price.value,
    image: image.value,
    id: props.book?.id
  }

  const result = BookZodSchema.safeParse(book)
  if (!result.success) {
    toast.add({
      severity: 'error',
      summary: 'No se pudo guardar el libro',
      detail: 'Revise los datos ingresados en el formulario',
      life: 3000
    })

    return
  }

  toast.add({
    severity: 'success',
    summary: 'Libro guardado',
    detail: 'El libro se guardó correctamente',
    life: 3000
  })

  emit('handleSubmit', result.data)
}

function validate(field: keyof Book, value: string | number) {
  return BookZodSchema.shape[field].safeParse(value).error?.issues[0].message
}
</script>

<template>
  <form
    class="flex flex-col gap-7 sm:flex-row"
    @submit.prevent="submit"
  >
    <div class="flex flex-col gap-2 flex-1">
      <Image
        :src="image"
        alt="No se pudo cargar la imagen"
        preview
        class="w-full aspect-[376/500]"
      ></Image>

      <label for="title">Imagen</label>
      <InputText
        id="image"
        v-model="image"
        placeholder="Imagen del libro"
      />
      <MessageValidator :validator="validators.image" />
    </div>

    <div class="flex-1 flex flex-col gap-3">
      <div class="flex flex-col gap-2">
        <label for="title">Título</label>
        <InputText
          id="title"
          v-model="title"
          placeholder="Título del libro"
        />

        <MessageValidator :validator="validators.title" />
      </div>

      <div class="flex flex-col gap-2">
        <label for="author">Autor</label>
        <InputText
          id="author"
          v-model="author"
          placeholder="Autor del libro"
        />

        <MessageValidator :validator="validators.author" />
      </div>

      <div class="flex flex-col gap-2">
        <label for="year">Año</label>
        <DatePicker
          v-model="date"
          view="year"
          dateFormat="yy"
        />

        <MessageValidator :validator="validators.year" />
      </div>

      <div class="flex flex-col gap-2">
        <label for="genre">Género</label>
        <Select
          v-model="genre"
          :options="selectGenres"
          optionLabel="name"
          placeholder="Seleccione un género"
        />

        <MessageValidator :validator="validators.genre" />
      </div>

      <div class="flex flex-col gap-2">
        <label for="price">Precio</label>
        <InputNumber
          id="price"
          v-model="price"
          type="number"
          placeholder="Precio en USD"
        />

        <MessageValidator :validator="validators.price" />
      </div>

      <Button
        type="submit"
        label="Guardar"
      />
    </div>
  </form>

  <Toast position="bottom-right"></Toast>
</template>
