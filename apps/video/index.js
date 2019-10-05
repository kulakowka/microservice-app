const bus = require("./bus");

const q = bus.queue("video.download");

q.on("attached", function() {
  console.log("attached to queue video.download");
});

q.on("error", function(err) {
  console.log("an error has occurred:", err);
});

q.on("message", function(message, id) {
  console.log(`on message ${id} video.download`, typeof message);
  setTimeout(() => console.log(`on message ${id} progress 20%`), 1000);
  setTimeout(() => console.log(`on message ${id} progress 40%`), 2000);
  setTimeout(() => console.log(`on message ${id} progress 60%`), 3000);
  setTimeout(() => console.log(`on message ${id} progress 80%`), 4000);
  setTimeout(() => {
    console.log(`on message ${id} progress 100%`);
    q.ack(id, function(err) {
      console.log("an error has occurred:", err);
    });
  }, 5000);
});

q.attach();

q.consume({ reliable: true, remove: true });
