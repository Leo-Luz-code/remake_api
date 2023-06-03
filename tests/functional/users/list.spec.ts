import { test } from '@japa/runner'

test.group('Users update', () => {
  test('update an user', async ({ client }) => {
    const userPayLoad = {
      email: 'abc@gmail.com',
      password: '12345678',
    }
    const response = await client.put('/api/v1/users/1').send()
    response.assertBody(userPayLoad)

    console.log(response.body())
  })
})
