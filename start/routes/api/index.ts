import Route from '@ioc:Adonis/Core/Route'

import adressRoutes from './v1/adresses'
import authRoutes from './v1/auth'
import clientRoutes from './v1/clients'
import registerRoutes from './v1/register'
import telephoneRoutes from './v1/telephones'
import userRoutes from './v1/users'
import bookRoutes from './v1/books'

// validates id
Route.where('id', {
  match: /^[0-9]+$/,
  cast: (id) => Number(id),
})

Route.group(() => {
  Route.group(() => {
    userRoutes()
    clientRoutes()
    telephoneRoutes()
    adressRoutes()
    bookRoutes()
  })
    .namespace('App/Controllers/Http/ApiV1/Private')
    .as('ApiV1')
    .middleware('auth:api')

  Route.group(() => {
    registerRoutes()
    authRoutes()
  })
    .namespace('App/Controllers/Http/ApiV1/Public')
    .as('ApiV1/Public')
}).prefix('api/v1')
