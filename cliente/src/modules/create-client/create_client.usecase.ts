import { prismaClient } from "../../infra/database/prismaClient"
import { KafkaSendMessage } from "../../infra/provider/kafka/producer"



type CreateClientRequest = {
    nome: string,
    email: string,
    password: string 
    phone: string
}

export class CreateClientUseCase {
    constructor() {}

    async execute(data: CreateClientRequest) {
        const customer = await prismaClient.client.findFirst({
            where: {
            email: data.email
            }
        })

        if (customer) throw new Error("Costumer already exists!")

        const customerCreated = await prismaClient.client.create({
            data: {
                ...data
            }
        })
        
        const kafkaProducer = new KafkaSendMessage();
        await kafkaProducer.execute("CUSTOMER_CREATED", {
           id: customerCreated.id,
           email: customerCreated.email 
        })

        return customerCreated
    }
}