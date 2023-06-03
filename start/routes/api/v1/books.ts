import Route from '@ioc:Adonis/Core/Route'

export default function bookRoutes() {
  Route.resource('books', 'BooksController').apiOnly()
}
