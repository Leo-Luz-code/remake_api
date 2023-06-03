import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import UserValidator from 'App/Validators/UserValidator'

export default class RegistersController {
  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(UserValidator)
    const user = await User.create(data)

    return response.ok({ user })
  }
}
