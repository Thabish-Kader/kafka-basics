// https://kafka.js.org/docs/2.0.0/admin#docsNav
import kafkaClient from "./kafkaClient.js";

const init = async () => {
  const admin = kafkaClient.admin();
  await admin.connect();
  await admin.createTopics({
    topics: [
      {
        topic: "thabishs-topic",
        numPartitions: 2,
      },
    ],
  });
  console.log("---------Topic created----------");
  await admin.disconnect();
  console.log("--------Admin Disconnected--------");
};

init();
