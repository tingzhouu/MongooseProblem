const express = require("express");
const expressApp = express();
const mongoose = require("mongoose");

const MONGODB_USERNAME = "username";
const MONGODB_PASSWORD = "12345"
const connectionURL = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster1-23abc.mongodb.net/databasetestDB?retryWrites=true`

expressApp.listen(3000, function() {
  console.log("Listening to port 3000");
});

mongoose
  .connect(
    connectionURL, { useNewUrlParser: true }
  )
  .then(function() {
    console.log("db connected!");
  });

expressApp.get("/", function(req, res) {
  res.write(`hi! state: ${mongoose.connection.readyState}\n`);
  res.write(`User: ${mongoose.connection.user}\n`);
  res.write(`Port: ${mongoose.connection.port}`);
  res.end();
});