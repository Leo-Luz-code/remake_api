import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Book from 'App/Models/Book'
import BookValidator from 'App/Validators/BookValidator'

export default class BooksController {
  public async index({ response }: HttpContextContract) {
    const books = Book.all()
    return response.ok({ books })
  }

  public async show({ response, params }: HttpContextContract) {
    const book = Book.findOrFail(params.id)
    return response.ok({ book })
  }

  public async store({ request, response }: HttpContextContract) {
    const bookPayLoad = await request.validate(BookValidator)

    const book = new Book()
    this.setStockStatus(book)

    book.merge(bookPayLoad).save()

    return response.created({ book })
  }

  public async update({ request, response, params }: HttpContextContract) {
    const bookPayLoad = await request.validate(BookValidator)
    const book = await Book.findOrFail(params.id)

    book.merge(bookPayLoad)
    this.setStockStatus(book)

    return response.ok({ book })
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.only(['id'])

    const book = await Book.findOrFail(id)
    await book.delete()
    return response.ok({ book })
  }

  private setStockStatus(book: Book) {
    switch (book.stock) {
      case 0:
        book.bookStockStatus = 'EMPTY'
        break
      case 100: // assuming 100 is the max stock possible
        book.bookStockStatus = 'FULL'
        break
      default:
        book.bookStockStatus = 'MID'
        break
    }
  }
}
