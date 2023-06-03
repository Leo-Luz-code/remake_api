import Route from '@ioc:Adonis/Core/Route'

Route.where('userId', {
  match: /^[0-9]+$/,
  cast: (id) => Number(id),
})

export default function userRoutes() {
  Route.resource('users', 'UsersController').apiOnly()
}
