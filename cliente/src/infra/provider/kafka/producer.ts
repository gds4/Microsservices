
import { kafka } from ".";


export class KafkaSendMessage {

    // Define um método assíncrono chamado 'execute' que aceita dois parâmetros:
    // 'topic' (string) e 'payload' (qualquer tipo de dado)
    async execute(topic: string, payload: any) {
        // Cria um produtor Kafka, que é responsável por enviar mensagens
        const producer = kafka.producer();

        // Conecta o produtor ao cluster Kafka. Este passo é necessário
        // para que o produtor possa começar a enviar mensagens
        await producer.connect();

        console.log(`MESSAGE SENT TO TOPIC ${topic}`);
        console.log(payload);
        
        // Envia a mensagem ao tópico especificado
        await producer.send({
            topic,
            messages: [
                {
                    value: JSON.stringify(payload)
                }
            ]
        });

        // Desconecta o produtor do cluster Kafka
        await producer.disconnect();
    }
}
