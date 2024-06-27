import { prismaClient } from "../../infra/database/prismaClient"

export class DeleteCustomerUseCase {
    constructor() {}

    async execute(customerId: string) {
        const client = await prismaClient.client.findFirst({
            where: {
            id: customerId
            }
        })

        if (!client) throw new Error("Costumer don't exists!")

        const customerDeleted = await prismaClient.client.delete({
            where:{
                id: customerId
            }
        })
        
        return customerDeleted
    }
}