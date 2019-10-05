const Article = require("./Article");
const bus = require("./bus");

bus
  .service("article.create")
  .on("request", (request, reply) => Article.create(request, reply))
  .serve(function() {
    console.log("article.create serving");
  });

bus
  .service("article.find")
  .on("request", (request, reply) => Article.find(request, reply))
  .serve(function() {
    console.log("article.find serving");
  });
