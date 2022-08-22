const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

app.get("/static/:dir/:file", function (req, res) {
  res.sendFile(
    path.join(__dirname, "static", `${req.params.dir}/${req.params.file}`)
  );
});
app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: __dirname });
});

// app.get("/test", function (req, res) {
//   res.send("Working")
// });

app.listen(port, () => {
  console.log(`FETN in running on port ${port}`);
});      