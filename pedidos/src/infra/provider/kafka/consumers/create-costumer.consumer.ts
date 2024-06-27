import { prismaClient } from "../../../database/prismaClient";
import { kafkaConsumer } from "../kafka.consumer";


type CustomerConsumer = {
    email: string,
    id: string
}


export async function createCustomerConsumer(){
    const consumer = await kafkaConsumer("CUSTOMER_CREATED", "CUSTOMER_CREATED_GROUP")
    await consumer.run({
        eachMessage: async ({message}) =>{
        const messageToString = message.value!.toString();
        const customer = JSON.parse(messageToString) as CustomerConsumer;
        
        console.log("CUSTOMER RECEIVED: ")
        console.log(customer)
        
        await prismaClient.customer.create({
            data: {
                externalId: customer.id,
                email: customer.email
            },
        })
    }})
}

createCustomerConsumer()