import { kafkaConsumer } from "../kafka.consumer";

type OrderConsumer = {
    customerName: string
    orderId: string
    status: string
}


export async function orderNotificationConsumer(){
    const consumer = await kafkaConsumer("ORDER_CREATED", "ORDER_CREATED_GROUP")
    await consumer.run({
        eachMessage: async ({message}) =>{
        const messageToString = message.value!.toString();
        const orderConsumer = JSON.parse(messageToString) as OrderConsumer;
        
        console.log(`>>>>>NEW ORDER<<<<<:\n Client: ${orderConsumer.customerName}\n Order Id: ${orderConsumer.orderId}\n Status: ${orderConsumer.status}`)
    }})
}

orderNotificationConsumer()