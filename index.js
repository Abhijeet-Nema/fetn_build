const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

app.get("/static/:dir/:file", function (req, res) {
  res.sendFile(
    path.join(__dirname, "static", `${req.params.dir}/${req.params.file}`)
  );
});

app.get("/favicon/:file", function (req, res) {
  res.sendFile(
    path.join(__dirname, "favicon", `${req.params.file}`)
  );
});

app.get("/google37c8f4fdd8152020.html", function (req, res) {
  res.sendFile("google37c8f4fdd8152020.html", { root: __dirname });
});

app.get("/sitemap.xml", function (req, res) {
  res.sendFile("sitemap.xml", { root: __dirname });
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