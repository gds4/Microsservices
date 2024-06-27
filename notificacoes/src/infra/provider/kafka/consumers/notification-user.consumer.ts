import { kafkaConsumer } from "../kafka.consumer";

type StatusConsumer = {
    customerId: string
    status: string
}


export async function statusNotificationConsumer(){
    const consumer = await kafkaConsumer("ORDER_STATUS")
    await consumer.run({
        eachMessage: async ({message}) =>{
        const messageToString = message.value!.toString();
        const statusConsumer = JSON.parse(messageToString) as StatusConsumer;
        
        console.log(`ATUALIZAÇÃO DE STATUS - Client: ${statusConsumer.customerId} - ${statusConsumer.status}`)
    }})
}

statusNotificationConsumer()