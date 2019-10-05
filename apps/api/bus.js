const Bus = require("busmq");

const bus = Bus.create({
  redis: ["redis://127.0.0.1:6379"]
});

bus.on("error", function(err) {
  console.log("an error has occurred:", err);
});

bus.on("online", function() {
  console.log("the bus is online");
});

bus.on("offline", function() {
  console.log("the bus is offline - redis is down...");
});

bus.connect();

module.exports.services = (app, services) => {
  services.forEach(name => {
    const s = bus.service(name);

    s.connect(function() {
      console.log(`connected to the service ${name}`);
    });

    app.set(name, s);
  });
};

module.exports.queues = (app, queues) => {
  queues.forEach(name => {
    const q = bus.queue(name);

    q.on("attached", function() {
      console.log(`attached to queue ${name}`);
    });

    q.attach();

    app.set(name, q);
  });
};
