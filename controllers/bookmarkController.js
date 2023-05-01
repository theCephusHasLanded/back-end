const express = require("express");
const bookmark = express.Router();
const {
  getAllBookmarks,
  getABookmark,
  createBookmark,
  deleteBookmark,
  updateBookmark,
} = require("../queries/bookmarks");
const { checkRequest, checkId } = require('../validations/checkBookmarks')
// const bookmarkArray = require("../Models/bookmark.js");

//GET ROUTE
bookmark.get("/", async (req, res) => {
  const allBookmarks = await getAllBookmarks();
  // BEFORE SQL INJECTION --> res.status(202).send('Index Route');

  if (allBookmarks) {
    res.status(200).json(allBookmarks);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

//GET ONE ROUTE
bookmark.get("/:id", checkId, async (req, res) => {
  const { id } = req.params;
  const bookmark = await getABookmark(id);

  if (bookmark) {
    res.status(200).json(bookmark);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

//CREATE ROUTE
bookmark.post("/", checkRequest, async (req, res) => {
  //this will require a 'body' like a template for what object or data it will return
  const newBookmark = req.body;

  try {
    const addedBookmark = await createBookmark(newBookmark);
    res.status(200).json(addedBookmark);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

//DELETE ROUTE
bookmark.delete("/:id", checkId, async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBookmark = await deleteBookmark(id);
    res.status(200).json(deletedBookmark);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

//UPDATE ROUTE
bookmark.put("/:id", checkRequest, checkId, async (req, res) => {
  const { id } = req.params;

  // Retrieve the bookmark to update
  const bookmarkToUpdate = await getABookmark(id);

  // If the bookmark is not found, return an error response
  if (!bookmarkToUpdate) {
    return res.status(404).json({ error: 'Bookmark not found' });
  }

  // Retrieve the updated bookmark data from the request body
  const updatedBookmark = req.body;

  try {
    // Update the bookmark with the updated data
    const result = await updateBookmark(id, updatedBookmark);

    // Return the updated bookmark
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});



module.exports = bookmark;


//! HERES POTENTIAL UPDATES TO THE CURRENT CODE FOR MAKING SYNTACTIC SUGAR!

// const errorHandler = (err, req, res, next) => {
//   console.error(err);
//   res.status(err.status || 500).json({ error: err.message });
// };

// // ...

// const router = express.Router();

// router.get('/', async (req, res, next) => {
//   try {
//     const allBookmarks = await getAllBookmarks();
//     res.status(200).json(allBookmarks);
//   } catch (err) {
//     next(err);
//   }
// });

// // ...

// router.use(errorHandler);

// module.exports = router;

