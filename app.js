//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//setting ejs
app.set("view engine", "ejs");
app.get("/", function (req, res) {
  var today = new Date();
  currentDay = today.getDay();

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;

    default:
      console.log("error the current day value is " + currentDay);
      break;
  }
  //kindOfDay is the exact same attribute in list.ejs
  res.render("list", { kindOfDay: day });
});

app.listen(3000, function () {
  console.log(" Server running on port 3000");
});
