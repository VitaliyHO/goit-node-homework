const app = require("./app");
const mongoose = require("mongoose");
const { PORT, DB_URL } = process.env;

mongoose
  .connect(DB_URL)
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful!");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
