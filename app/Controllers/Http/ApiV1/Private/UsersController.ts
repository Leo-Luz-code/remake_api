import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
//import DateService from 'App/Services/DateService'
//import DiscordLogger from '@ioc:Logger/Discord'
import User from 'App/Models/User'
import UserValidator from 'App/Validators/UserValidator'
// import { inject } from '@adonisjs/fold'

// @inject

export default class UsersController {
  /*
  this constructor is for the @inject

  constructor(public dateService: DateService) {}
  */

  public async index({ response }: HttpContextContract) {
    const users = await User.all()
    return response.ok({ users })
  }

  public async create({}: HttpContextContract) {
    //const dateTime = DateService.toDateTime()
    //const formattedDate = DateService.toDate(dateTime)
    //const formattedHour = DateService.toHour(dateTime)
    //await DiscordLogger.info('New user created', { dateTime })
    //return `USER: create an user date: ${formattedDate} hour: ${formattedHour}`
  }

  public async store({ request, response }: HttpContextContract) {
    const payLoad = await request.validate(UserValidator)

    const user = new User()
    await user.merge(payLoad).save()

    return response.created(user)
  }

  public async show({ response, params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    return response.ok({ user })
  }

  public async update({ request, response, bouncer }: HttpContextContract) {
    const userPayLoad = await request.validate(UserValidator)
    const { id } = request.only(['id'])

    const user = await User.findOrFail(id)

    await bouncer.authorize('updateUser', user)

    user.merge(userPayLoad)
    await user.save()

    return response.ok({ user })
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.only(['id'])
    const user = await User.findOrFail(id)

    await user.delete()

    return response.ok({ user })
  }
}
