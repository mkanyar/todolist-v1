//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();
const items = ["buy food", "cook food", "eat food"];
const workItems = [];
//setting ejs
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  const day = date.getDate();

  //kindOfDay is the exact same attribute in list.ejs
  res.render("list", { listTitle: day, newListItem: items });
});

app.post("/", function (req, res) {
  const item = req.body.newListItem;
  if (req.body.list === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});
app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItem: workItems });
});
app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log(" Server running on port 3000");
});
