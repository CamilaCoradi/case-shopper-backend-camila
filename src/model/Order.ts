export type Items = {
    productId: number,
    productQuantity: number
}

export type Order = {
    id: string,
    clientName: string,
    dueDate: Date,
    list: Items[]
}

export interface OrderInputDTO  {
    clientName: string,
    dueDate: Date,
    list: Items[]
}