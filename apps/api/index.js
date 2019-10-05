const app = require("./app");
const bus = require("./bus");

bus.services(app, ["user.create", "user.find", "article.create", "article.find"]);
bus.queues(app, ["video.download"]);

app.listen(3000, function() {
  console.log("Server started: http://localhost:3000");
});
