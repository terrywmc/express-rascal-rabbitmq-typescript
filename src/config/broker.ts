export default {
  vhosts: {
    "/": {
      connection: {
        url: "amqp://localhost:5672",
        heartbeat: 1,
        socketOptions: {
          timeout: 1000,
        },
      },
      exchanges: ["demo_ex"],
      queues: ["demo_q"],
      bindings: ["demo_ex[a.b.c] -> demo_q"],
      publications: {
        demo_pub: {
          exchange: "demo_ex",
          routingKey: "a.b.c",
        },
      },
      subscriptions: {
        demo_sub: {
          queue: "demo_q",
        },
      },
    },
  },
};
