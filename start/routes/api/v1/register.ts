import Route from '@ioc:Adonis/Core/Route'

export default function registerRoutes() {
  Route.resource('register', 'RegistersController').only(['store'])
}
