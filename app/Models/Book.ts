import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

import { BookStockStatus } from '../Enums/BookStockStatus'

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  public saleId: number

  @column()
  public name: string

  @column()
  public author: string

  @column()
  public edition: string

  @column()
  public publisher: string

  @column()
  public stock: number

  @column()
  public price: number

  @column()
  public bookStockStatus: BookStockStatus

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
