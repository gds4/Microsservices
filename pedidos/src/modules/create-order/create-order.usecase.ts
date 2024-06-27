import { prismaClient } from "../../infra/database/prismaClient"
import axios from 'axios'
import { KafkaSendMessage } from "../../infra/provider/kafka/producer"

type CreateOrderRequest = {
    customerId: string
    items: [{
        productId: string,
        quantity: number
}]

}

export class CreateOrderUseCase {
    constructor() {}

    async execute(data: CreateOrderRequest) {

        const customer = await prismaClient.customer.findFirst({
            where: {
                id: data.customerId
            }
        })
        
        if(!customer) throw new Error("Customer not found!")
        
        const customerResponse =  await axios.get(`http://localhost:3001/customers?customerId=${customer.externalId}`)
        const externalCustomer = customerResponse.data
        console.log(externalCustomer)


        data.items.forEach(async element => {
            const product = await prismaClient.product.findFirst({
                where: {
                    id: element.productId
                }
            })

            const externalProductId = product?.externalId

            const response = await axios.get(`http://localhost:3003/products?productId=${externalProductId}`)
            const externalProduct = response.data

            const productFinalQuantity =  externalProduct.quantity - element.quantity

            if(productFinalQuantity < 0 ){
                throw new Error(`Product: ${externalProduct.name} - Quantity not available in stock.`)
            }

            await axios.put(`http://localhost:3003/products/${externalProductId}`, { quantity: productFinalQuantity })
        });



        const orderCreated = await prismaClient.order.create({
            data: {
                customerId: data.customerId,
                status: "AGUARDANDO_PAGAMENTO",
                OrderItems: {
                    createMany: {
                        data: data.items,
                    },
                },
            },
        });


        const KafkaMessage = new KafkaSendMessage()
        await KafkaMessage.execute("ORDER_CREATED", {
            customerName: externalCustomer.nome,
            orderId: orderCreated.id,
            status: orderCreated.status,
        })
        return orderCreated;
    }
    
}