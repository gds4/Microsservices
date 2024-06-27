import { kafka } from "."

// Define e exporta uma função assíncrona chamada 'kafkaConsumer'
// que aceita um parâmetro 'topic' do tipo string
export const kafkaConsumer = async (topic: string, groupId: string) => {
    
    // Cria um consumidor Kafka e o associa a um grupo de consumidores
    // com o ID 'ORDER_APP'. O 'groupId' é usado para identificar o grupo
    // de consumidores que irão compartilhar a carga de processamento
    const consumer = kafka.consumer({groupId: groupId})

    // Conecta o consumidor ao cluster Kafka. Este passo é necessário
    // para que o consumidor possa começar a consumir mensagens
    await consumer.connect();

    // Inscreve o consumidor no tópico especificado pela variável 'topic'
    // 'fromBeginning: true' indica que o consumidor deve começar a ler
    // mensagens desde o início do tópico, não apenas as novas mensagens
    await consumer.subscribe({ topic })

    // Retorna o consumidor configurado
    return consumer
}
