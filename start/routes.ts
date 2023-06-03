/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

/*Route.get('/', async (ctx) => {
  const userUrl = Route.makeUrl('app.users.show', [1], {
    qs: {
      test: 'testing-query-string',
      another: 'testing',
    },
    prefixUrl: 'http//localhost:3333',
  })

  const userUrlBuilder = Route.builder()
    .qs({ test: 'its-a-test' })
    .prefixUrl('/builder')
    .params({ id: 1 })
    .make('app.users.show')

  const userSignedUrl = Route.makeSignedUrl('/test-signature', {
    expiresIn: '30s',
  })

  const userUrlBuilderSigned = Route.builder().makeSigned('/test-signature', {
    expiresIn: '15s',
  })

  return { userUrl, userUrlBuilder, userSignedUrl, userUrlBuilderSigned }
})

Route.get('/test-signature', async ({ request }) => {
  return 'this is valid'
}).mustBeSigned()

Route.resource('test', '').mustBeSigned()

Route.on('/testing').goHome()

Route.get('test/:testing', () => 'cool').where('testing', Route.matchers.alphaString())*/

require('./routes/api')
