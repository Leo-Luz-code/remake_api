import Route from '@ioc:Adonis/Core/Route'

Route.where('client_id', {
  match: /^[0-9]+$/,
  cast: (id) => Number(id),
})

export default function clientRoutes() {
  Route.resource('clients', 'ClientsController').apiOnly()
}
