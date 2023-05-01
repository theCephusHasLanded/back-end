const express = require("express");
const review = express.Router();
const {
  getAllReviews,
  getAReview,
  createReview,
  deleteReview,
  updateReview,
} = require("../queries/reviews");
// const { checkRequest, checkId } = require('../validations/checkReviews');

// GET all reviews
review.get("/", async (req, res) => {
  try {
    const allReviews = await getAllReviews();
    res.status(200).json(allReviews);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// GET one review
review.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const review = await getAReview(id);
    if (!review) {
      res.status(404).json({ error: "Review not found" });
    } else {
      res.status(200).json(review);
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// CREATE review
review.post("/", async (req, res) => {
  const newReview = req.body;
  try {
    const addedReview = await createReview(newReview);
    res.status(201).json(addedReview);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// UPDATE review
review.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedReview = req.body;
  try {
    const result = await updateReview(id, updatedReview);
    if (!result) {
      res.status(404).json({ error: "Review not found" });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE review
review.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteReview(id);
    if (!result) {
      res.status(404).json({ error: "Review not found" });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

module.exports = review;
