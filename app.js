//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var items = ["buy food", "cook food", "eat food"];
var workItems = [];
//setting ejs
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function (req, res) {
  let today = new Date();
  currentDay = today.getDay();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  var day = today.toLocaleDateString("en-US", options);

  //kindOfDay is the exact same attribute in list.ejs
  res.render("list", { listTitle: day, newListItem: items });
});

app.post("/", function (req, res) {
  item = req.body.newListItem;
  items.push(item);
  res.redirect("/");
});
app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItem: workItems });
});
app.post("/work", function (req, res) {
  let item = req.body.newListItem;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(3000, function () {
  console.log(" Server running on port 3000");
});
