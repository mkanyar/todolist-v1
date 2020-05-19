//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var items = [];

//setting ejs
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  var today = new Date();
  currentDay = today.getDay();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  var day = today.toLocaleDateString("en-US", options);

  //kindOfDay is the exact same attribute in list.ejs
  res.render("list", { kindOfDay: day, newItem: items });
});

app.post("/", function (req, res) {
  item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log(" Server running on port 3000");
});
