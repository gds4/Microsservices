import { prismaClient } from "../../../database/prismaClient";
import { kafkaConsumer } from "../kafka.consumer";


type ProductConsumer = {
    id: string,
    code: string
}


export async function createProductConsumer(){
    const consumer = await kafkaConsumer("PRODUCT_CREATED", "PRODUCT_CREATED_GROUP")
    await consumer.run({
        eachMessage: async ({message}) =>{
        const messageToString = message.value!.toString();
        const product = JSON.parse(messageToString) as ProductConsumer;

        await prismaClient.product.create({
            data: {
                externalId: product.id,
                code: product.code
            },
        })
    }})
}

createProductConsumer()