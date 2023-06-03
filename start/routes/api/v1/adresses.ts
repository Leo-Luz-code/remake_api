import Route from '@ioc:Adonis/Core/Route'

Route.where('client_id', {
  match: /^[0-9]+$/,
  cast: (id) => Number(id),
})

export default function adressRoutes() {
  Route.resource('clients.adresses', 'AdressesController').only(['store', 'update', 'destroy'])
}
