import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
  brokers: ['accepted-mastiff-11579-us1-kafka.upstash.io:9092'],
  ssl: true,
  sasl: {
      mechanism: 'scram-sha-256',
      username: 'YWNjZXB0ZWQtbWFzdGlmZi0xMTU3OSSGvLhzmvSqKh7RgX12v1gybqniJNm8eH4',
      password: 'MDRkMjVjN2MtOWQ5Yi00OGYzLWFiMDMtYWJhNzM5MzQyNGVi'
  },
  logLevel: logLevel.ERROR,
});

export { kafka }