var uploadRouter = require("./route");
const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.use("/", uploadRouter);
app.listen(3000, (req, res) => {
  console.log("listening on port 3000");
});
