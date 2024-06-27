import { prismaClient } from "../../infra/database/prismaClient"


type UpdateCustomerRequest = {
    nome: string,
    email: string,
    phone: string
}

export class UpdateCustomerUseCase {
    constructor() {}

    async execute(customerId: string, data: UpdateCustomerRequest) {
        const client = await prismaClient.client.findFirst({
            where: {
            id: customerId
            }
        })

        if (!client) throw new Error("Costumer don't exists!")

        const customerUpdated = await prismaClient.client.update({
            where:{
                id: customerId
            },
            data: {
                ...data
            }
        })
        
        return customerUpdated
    }
}