const express = require("express");
const app = express();
const cors = require("cors")
const logger = require("morgan")
const bookmarkController = require('./controllers/bookmarkController.js')
// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(logger('dev'))

// /bookmark is the base url endpoint for the routes
// middleware
app.use("/bookmark", bookmarkController);

// Separation of concerns
// app.use((req, res, next) => {
//   console.log("This code runs for every request");
//   next();
// });

app.get("/", (_, res) => {
  res.send("Welcome to the Bookmarks App PART DEUX 🪐");
})

// 404 page
app.get("*", (req, res) => {
  res.status(404).json({ error: "oopsie! Try Again" });
})

module.exports = app;