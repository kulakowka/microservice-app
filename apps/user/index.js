const User = require("./User");
const bus = require("./bus");

bus
  .service("user.create")
  .on("request", (request, reply) => User.create(request, reply))
  .serve(function() {
    console.log("user.create serving");
  });

bus
  .service("user.find")
  .on("request", (request, reply) => User.find(request, reply))
  .serve(function() {
    console.log("user.find serving");
  });
