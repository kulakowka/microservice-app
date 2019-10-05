const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.disable("x-powered-by");

app.use(bodyParser.json());

app.post("/users", function(req, res, next) {
  const { name } = req.body;

  req.app.get("user.create").request({ name }, function(err, reply) {
    if (err) return next(err);
    res.json(reply);
  });
});

app.get("/users", function(req, res, next) {
  req.app.get("user.find").request({}, function(err, reply) {
    if (err) return next(err);
    res.json(reply);
  });
});

app.post("/articles", function(req, res, next) {
  const { title } = req.body;
  const creatorId = "5d98cacf5073fd6fa664b0d7"; // как будто бы это берется из сессии

  req.app.get("article.create").request({ title, creatorId }, function(err, reply) {
    if (err) return next(err);
    res.json(reply);
  });
});

app.get("/articles", function(req, res, next) {
  req.app.get("article.find").request({}, function(err, reply) {
    if (err) return next(err);
    res.json(reply);
  });
});

app.post("/video", function(req, res, next) {
  const { sourceUrl } = req.body;

  req.app.get("video.download").push({ sourceUrl }, function(err, reply) {
    if (err) return next(err);
    res.json(reply);
  });
});

module.exports = app;
