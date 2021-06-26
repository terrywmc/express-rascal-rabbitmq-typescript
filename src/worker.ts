import { BrokerAsPromised } from "rascal";
import config from "./config/broker";

import { getBrokerConnection } from "./broker";

let broker: any;

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = (async () => {
  try {
    broker = await getBrokerConnection();
    const subscription = await broker.subscribe("demo_sub");
    subscription.on(
      "message",
      async (message: any, content: any, ackOrNack: any) => {
        console.log(content);
        await delay(2000);
        console.log({"message":"Pong!"});

        ackOrNack();
        //   subscription.cancel(); //cancel subscription if needed
      }
    );
  } catch (error) {
    console.error(error);
  }
})();
