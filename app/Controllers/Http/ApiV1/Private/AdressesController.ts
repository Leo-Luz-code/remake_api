import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Adress from 'App/Models/Adress'
import Client from 'App/Models/Client'
import AdressValidator from 'App/Validators/AdressValidator'

export default class AdressesController {
  public async store({ request, response }: HttpContextContract) {
    const adressPayLoad = await request.validate(AdressValidator)
    const { clientId } = request.only(['clientId'])

    const client = await Client.findOrFail(clientId)
    const adress = await client.related('adress').create(adressPayLoad)

    return response.created({ adress })
  }

  public async update({ request, response }: HttpContextContract) {
    const adressPayLoad = await request.validate(AdressValidator)
    const { clientId, id } = request.only(['clientId', 'id'])

    const adress = await Adress.findOrFail(id)
    const client = await Client.findOrFail(clientId)
    adress.merge(adressPayLoad)
    await client.related('adress').save(adress)

    return response.ok({ adress })
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { clientId } = request.only(['clientId'])

    const client = await Client.findOrFail(clientId)
    const adress = await client.related('adress').delete()

    return response.ok({ adress })
  }
}
