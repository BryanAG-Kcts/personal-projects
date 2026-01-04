import { Request, Response } from 'express'
import { BookStorage } from '../services/book-storage'
import { BookZodSchema } from '../interfaces/book'
import { safeParseInt } from '../utils/safe-parse'

export const bookController = {
  getBooks(_req: Request, res: Response) {
    res.status(200).json({
      message: 'Get books',
      status: 200,
      data: BookStorage.getBooks()
    })
  },
  async postBook(req: Request, res: Response) {
    const rawBook = req.body
    const result = await BookZodSchema.safeParseAsync(rawBook)
    if (!result.success) {
      res.status(400).json({
        message: 'Bad request',
        status: 400,
        errors: result.error.issues
      })

      return
    }

    const books = BookStorage.getBooks()
    const book = { ...result.data, id: (books[books.length - 1].id ?? 0) + 1 }
    BookStorage.addBook(book)
    res.status(201).json({
      message: 'Book created',
      status: 201,
      data: book
    })
  },
  getBook(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const book = BookStorage.getBookById(id)

    if (!book) {
      res.status(404).json({
        message: 'Book not found',
        status: 404
      })

      return
    }

    res.status(200).json({
      message: 'Get book',
      status: 200,
      data: book
    })
  },
  async putBook(req: Request, res: Response) {
    const id = await safeParseInt(req.params.id)

    if (!id.success) {
      res.status(400).json({
        message: 'Bad request',
        status: 400,
        errors: id.error.issues
      })

      return
    }

    const book = BookStorage.getBookById(id.data)
    if (!book) {
      res.status(404).json({
        message: 'Book not found',
        status: 404
      })

      return
    }

    const rawBook = req.body
    const result = await BookZodSchema.safeParseAsync(rawBook)
    if (!result.success) {
      res.status(400).json({
        message: 'Bad request',
        status: 400,
        errors: result.error.issues
      })

      return
    }

    const updatedBook = { ...result.data, id: id.data }
    BookStorage.updateBook(id.data, updatedBook)
    res.status(200).json({
      message: 'Book updated',
      status: 200,
      data: updatedBook
    })
  },
  async deleteBook(req: Request, res: Response) {
    const id = await safeParseInt(req.params.id)
    if (!id.success) {
      res.status(400).json({
        message: 'Bad request',
        status: 400,
        errors: id.error.issues
      })

      return
    }

    const book = BookStorage.getBookById(id.data)
    if (!book) {
      res.status(404).json({
        message: 'Book not found',
        status: 404
      })

      return
    }

    BookStorage.deleteBook(id.data)
    res.status(204).json({
      message: 'Book deleted',
      status: 204
    })
  }
}
