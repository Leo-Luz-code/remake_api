import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async store({ request, response, auth }: HttpContextContract) {
    const { email, password } = request.only(['email', 'password'])

    try {
      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '10 hours',
      })
      return { user: auth.user, token }
    } catch (_error) {
      return response.unauthorized('Invalid credentials')
    }
  }

  public async update({ auth }: HttpContextContract) {
    await auth.logout()
    await auth.use('api').revoke()
    return {
      revoked: true,
    }
  }
}
