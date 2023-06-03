import { DateTime } from 'luxon'

class DataService {
  public dateFormat = 'dd/MM/yyyy'
  public hourFormat = 'HH:mm:ss'

  constructor(dateFormat: string | null = null, hourFormat: string | null = null) {
    this.dateFormat = dateFormat ?? this.dateFormat
    this.hourFormat = hourFormat ?? this.hourFormat
  }

  public toDateTime(date: DateTime | null = null, time: DateTime | null = null) {
    let dateTime = DateTime.now()

    if (date) {
      dateTime = dateTime.set({ year: date.year, month: date.month, day: date.day })
    }

    if (time) {
      dateTime = dateTime.set({
        hour: time.hour,
        minute: time.minute,
        second: time.second,
        millisecond: time.millisecond,
      })
    }
    return dateTime
  }
  public toDate(dateTime: DateTime = DateTime.now()) {
    return dateTime.toFormat(this.dateFormat)
  }

  public toHour(dateTime: DateTime = DateTime.now()) {
    return dateTime.toFormat(this.hourFormat)
  }
}

export default new DataService()
