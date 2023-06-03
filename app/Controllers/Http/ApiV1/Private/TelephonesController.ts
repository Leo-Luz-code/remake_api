import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import Telephone from 'App/Models/Telephone'
import TelephoneValidator from 'App/Validators/TelephoneValidator'

export default class TelephonesController {
  public async store({ request, response }: HttpContextContract) {
    const telephonePayLoad = await request.validate(TelephoneValidator)
    const { clientId } = request.only(['clientId'])

    const client = await Client.findOrFail(clientId)
    const telephone = await client.related('telephone').create(telephonePayLoad)

    return response.created({ telephone })
  }

  public async update({ request, response }: HttpContextContract) {
    const telephonePayLoad = await request.validate(TelephoneValidator)
    const { clientId, id } = request.only(['clientId', 'id'])

    const telephone = await Telephone.findOrFail(id)
    const client = await Client.findOrFail(clientId)
    telephone.merge(telephonePayLoad)
    await client.related('telephone').save(telephone)

    return response.ok({ telephone })
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.only(['id'])

    const telephone = await Telephone.findOrFail(id)
    await telephone.delete()
    return response.ok({ telephone })
  }
}
