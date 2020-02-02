const express = require("express");
const path = require("path");

let app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("createNewUser.pug", {
    title: "Create User:",
    createUser: "Create User",
    users: ["curtis", "brad"]
  });
});
app.get("/allUsers", (req, res) => {
  res.render("allUsers.pug", {
    allUsersMessage: "This page is working"
  });
});

app.get("/users/:username", (req, res) => {
  res.end(`you clicked on: ${req.params.username}`);
});

app.listen(3000, () => {
  console.log("Express app Running on port 3000");
});
