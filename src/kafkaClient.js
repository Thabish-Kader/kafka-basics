import { Kafka } from "kafkajs";
import ip from "ip";

const HOST = process.env.HOST_IP || ip.address();

const kafkaClient = new Kafka({
  clientId: "my-app",
  brokers: [`${HOST}:9092`],
});

export default kafkaClient;
