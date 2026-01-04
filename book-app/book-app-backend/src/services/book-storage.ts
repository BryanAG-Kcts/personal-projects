import path from 'path'
import { Book } from '../interfaces/book'
import fs from 'fs/promises'

export class BookStorage {
  private static books: Book[] = []

  static {
    fs.readFile(path.join(__dirname, '../mock/books.json'), 'utf8')
      .then(data => {
        this.books = JSON.parse(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  public static getBooks(): Book[] {
    return this.books
  }

  public static addBook(book: Book): void {
    this.books.push(book)
  }

  public static deleteBook(id: number): void {
    this.books = this.books.filter(book => book.id !== id)
  }

  public static getBookById(id: number): Book | undefined {
    return this.books.find(book => book.id === id)
  }

  public static updateBook(id: number, book: Book): void {
    const index = this.books.findIndex(book => book.id === id)
    this.books[index] = book
  }
}
