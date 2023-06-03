import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

import Client from './Client'

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public clientId: number

  @column()
  public country: string

  @column()
  public state: string

  @column()
  public city: string

  @column()
  public postalCode: string

  @column()
  public streetAdress: string

  @column()
  public adressLineTwo: string

  @belongsTo(() => Client)
  public client: BelongsTo<typeof Client>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
