import z from 'zod'

export const BookZodSchema = z.object({
  title: z.string(),
  author: z.string(),
  year: z.number(),
  genre: z.string(),
  price: z.number(),
  image: z.string().url(),
  id: z.number().optional()
})

export type Book = z.infer<typeof BookZodSchema>
