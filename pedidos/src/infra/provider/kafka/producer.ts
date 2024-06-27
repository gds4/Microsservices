import { kafka } from ".";

export class KafkaSendMessage{
    async execute(topic: string, payload: any){
        const producer = kafka.producer()
        await producer.connect();
        
        
        await producer.send({
            topic,
            messages: [
                {
                    value: JSON.stringify(payload)
                }
            ]
        })
        console.log(`MESSAGE SENT TO TOPIC ${topic}`)
        console.log(payload)
        await producer.disconnect();
    }
}