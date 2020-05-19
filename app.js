//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//setting ejs
app.set("view engine", "ejs");
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
  res.render("list", { kindOfDay: day });
});

app.listen(3000, function () {
  console.log(" Server running on port 3000");
});
