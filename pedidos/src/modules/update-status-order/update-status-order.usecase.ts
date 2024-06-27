import { prismaClient } from "../../infra/database/prismaClient"
import { KafkaSendMessage } from "../../infra/provider/kafka/producer";


type UpdateStatusOrderRequest = {
    id: string,
    status: string
}


export class UpdateStatusOrderUseCase {
    constructor() {}

    async execute(data: UpdateStatusOrderRequest) {
        const orderUpdated = await prismaClient.order.update({
            where: {
                id: data.id
            },
            data:{
                status: data.status
            }});
        const KafkaMessage = new KafkaSendMessage()
        await KafkaMessage.execute("ORDER_STATUS", {
            customerId: orderUpdated.customerId,
            status: orderUpdated.status,
        })
        return orderUpdated
    }
    
}