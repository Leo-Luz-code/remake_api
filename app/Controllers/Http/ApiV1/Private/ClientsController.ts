import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import ClientValidator from 'App/Validators/ClientValidator'

export default class ClientsController {
  public async index({ response }: HttpContextContract) {
    const clients = await Client.query().preload('telephone')

    return response.ok({ clients })
  }

  public async store({ request, response }: HttpContextContract) {
    const payLoad = await request.validate(ClientValidator)

    const client = new Client()
    await client.merge(payLoad).save()

    return response.created(client)
  }

  public async show({ params, response }: HttpContextContract) {
    const client = await Client.findOrFail(params.id)
    const adress = await client.related('adress').query()
    const telephones = await client.related('telephone').query()

    return response.ok({ client, adress, telephones })
  }

  public async update({ request, response }: HttpContextContract) {
    const clientPayLoad = await request.validate(ClientValidator)
    const { id } = request.only(['id'])

    const client = await Client.findOrFail(id)

    await client.merge(clientPayLoad).save()

    return response.ok({ client })
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.only(['id'])
    const client = await Client.findOrFail(id)

    await client.delete()

    return response.ok({ client })
  }
}
