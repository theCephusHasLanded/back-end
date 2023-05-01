const express = require("express");
const app = express();
const cors = require("cors")
const logger = require("morgan")
const bookmarkController = require('./controllers/bookmarkController.js')
const { validateURL } = require('./validations/checkBookmarks.js')
const reviewController = require('./controllers/reviewController.js')

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(logger('dev'))

// /bookmark is the base url endpoint for the bookmarks routes
app.use("/bookmark", bookmarkController);

// /reviews is the base url endpoint for the reviews routes
app.use("/review", reviewController);

app.get("/", (_, res) => {
  res.send("Welcome to the Bookmarks App PART DEUX 🪐");
})

// 404 page
app.get("*", (req, res) => {
  res.status(404).json({ error: "oopsie! Try Again" });
})

module.exports = app;
