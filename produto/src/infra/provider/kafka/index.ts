import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
  brokers: ['cute-owl-7069-us1-kafka.upstash.io:9092'],
  ssl: true,
  sasl: {
      mechanism: 'scram-sha-256',
      username: 'Y3V0ZS1vd2wtNzA2OST2mLwjwh7TslVnw-gpqhqE_6RJ0TREGyjqA9hg6_1C0dA',
      password: 'MjM5ZWZlNDctMDE3Mi00OWY3LTk4MjktOGM3ZmFiNzAyNmE4'
  },
  logLevel: logLevel.ERROR,
});

export { kafka }