//jshint esversion:6
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose.connect("mongodb://localhost:27017/userDB");

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/register", function (req, res) {
  res.render("register");
});

app.get("/secrets", function (req, res) {
  res.render("secrets");
});

app.get("/submit", function (req, res) {
  res.render("submit");
});

app.post("/register", function (req, res) {
  console.log("Things Send To Database:");
  console.log("Username: " + req.body.username);
  console.log("Password: " + req.body.password);
});

app.post("/login", function (req, res) {
  console.log("Things Send To Database:");
  console.log("Username: " + req.body.username);
  console.log("Password: " + req.body.password);
});

app.listen(port, function () {
  console.log("Listening on port 3000");
});
