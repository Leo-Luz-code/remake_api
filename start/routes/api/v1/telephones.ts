import Route from '@ioc:Adonis/Core/Route'

export default function telephoneRoutes() {
  Route.resource('clients.telephones', 'TelephonesController').only(['store', 'update', 'destroy'])
}
