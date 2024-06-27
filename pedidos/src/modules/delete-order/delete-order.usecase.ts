import { prismaClient } from "../../infra/database/prismaClient"


export class DeleteOrderUseCase {
    constructor() {}

    async execute(orderId: string){
        const order = await prismaClient.order.findFirst({
            where: {
                id: orderId
            }
        })

        if(!order) throw new Error("Order don't exists!")

        const orderDeleted = await prismaClient.order.delete({ 
            where: { 
                id: orderId 
            }
        })

        return orderDeleted
    }
}