import kafkaClient from "./kafkaClient.js";

const run = async () => {
  const consumer = kafkaClient.consumer({ groupId: "test-group" });

  await consumer.connect();
  await consumer.subscribe({ topics: ["thabishs-topic"], fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(
        ` Topic - ${topic}, Partition - ${partition}, , Key - ${message.key.toString()}, Message - ${message.value.toString()}
        }`
      );
    },
  });
};

run();
