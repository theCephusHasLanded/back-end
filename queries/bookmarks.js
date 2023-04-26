const bookmark = require("../controllers/bookmarkController");
const db = require("../db/dbConfig");

const getAllBookmarks = async () => {
  try {
    const allBookmarks = await db.any("SELECT * FROM bookmarks");
    return allBookmarks;
  } catch (error) {
    return error;
  }
};

// and query we write will start with 'db'
const getABookmark = async (id) => {
  try {
    const bookmark = await db.one("SELECT * FROM bookmarks WHERE id=$1", id);
    return bookmark;
  } catch (error) {
    return error;
  }
};

//4/25/23
//* we are creating something and we are expected to respons back with that resource. then we must insert into the DB -- order for columns doesnt matter but the actual values must correspond with the values --> the id will be added by SQL --> we must tell it what values they are and add as an array. each position in array will correspond with the index in the value --> there is a CLEANER destructured methos below!

const createBookmark = async (bookmarkToAdd) => {
  // const { name, url, category, is_favorite} = bookmarkToAdd
  // VALUES ($[name], $[url], $[category], $[is_favorite])
  try {
    const newBookmark = await db.one(
      "INSERT INTO bookmarks (name, url, category, is_favorite) VALUES ($1, $2, $3, $4)  RETURNING *",
      [
        bookmarkToAdd.name,
        bookmarkToAdd.url,
        bookmarkToAdd.category,
        bookmarkToAdd.is_favorite,
      ]
    );
    return newBookmark;
  } catch (error) {
    return error;
  }
};

const deleteBookmark = async (id) => {
  try {
    const deletedBookmark = await db.one(
      "DELETE FROM bookmarks WHERE id=$1 RETURNING *",
      id
    );
    return deletedBookmark;
  } catch (error) {
    return error;
  }
};

const updateBookmark = async (id, bookmarkToUpdate) => {
  try {
    const updatedBookmark = await db.one(
      "UPDATE bookmarks SET name=$1, url=$2, category=$3, is_favorite=$4 WHERE id=$5 RETURNING *",
      [
        bookmarkToUpdate.name,
        bookmarkToUpdate.url,
        bookmarkToUpdate.category,
        bookmarkToUpdate.is_favorite,
        id,
      ]
    );
    return updatedBookmark;
  } catch (error) {
    return error;
  }
};


module.exports = {
  getAllBookmarks,
  getABookmark,
  createBookmark,
  deleteBookmark,
  updateBookmark,
};
