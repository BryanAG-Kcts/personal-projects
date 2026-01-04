import z from 'zod'

export const BookZodSchema = z.object({
  title: z.string().min(1, 'El título es requerido'),
  author: z.string().min(1, 'El autor es requerido'),
  year: z.number().int().gte(1000, 'El año debe ser mayor a 1000'),
  genre: z.string().min(1, 'El género es requerido'),
  price: z.number().positive('El precio debe ser mayor a cero'),
  image: z.string().url('La URL de la imagen no es válida'),
  id: z.number().optional()
})

export type Book = z.infer<typeof BookZodSchema>
