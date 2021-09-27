const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("/*", function (req, res) {
  res.sendFile("index.html", {
    root: path.join(__dirname, "../frontend/dist"),
  });
});

app.listen(3000, () => {
  console.log("App listening at port 3000...");
});
