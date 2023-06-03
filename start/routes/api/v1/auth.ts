import Route from '@ioc:Adonis/Core/Route'

export default function authRoutes() {
  Route.resource('auth', 'AuthController').only(['store', 'update'])
}
