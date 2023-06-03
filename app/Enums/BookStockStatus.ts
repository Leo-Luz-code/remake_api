export const bookStockStatus = ['FULL', 'MID', 'EMPTY'] as const
type BookStockStatusTuple = typeof bookStockStatus
export type BookStockStatus = BookStockStatusTuple[number]
