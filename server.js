const app = require("./app");
const db = require("./database/index");

const PORT = process.env.PORT || 5000;

db.connect().then(() => {
  app.listen(PORT, () => {
    console.log("Listening on port: " + PORT);
  });
});
