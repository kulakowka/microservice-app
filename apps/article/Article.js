const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/microservice-app",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

module.exports = mongoose.model("Article", {
  title: String,
  creatorId: mongoose.Schema.Types.ObjectId
});
