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

module.exports = bus;
