const review = require("../controllers/reviewController");
const db = require("../db/dbConfig");

const getAllReviews = async () => {
try {
const allReviews = await db.any("SELECT * FROM reviews");
return allReviews;
} catch (error) {
return error;
}
};

const getAReview = async (id) => {
try {
const review = await db.one("SELECT * FROM reviews WHERE id=$1", id);
return review;
} catch (error) {
return error;
}
};

const createReview = async (reviewToAdd) => {
    try {
      const newReview = await db.one(
        "INSERT INTO reviews (reviewer, title, content, rating, bookmark_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [
          reviewToAdd.reviewer,
          reviewToAdd.title,
          reviewToAdd.content,
          reviewToAdd.rating,
          reviewToAdd.bookmark_id,
        ]
      );
      return newReview;
    } catch (error) {
      return error;
    }
  };
  

const deleteReview = async (id) => {
try {
const deletedReview = await db.one(
"DELETE FROM reviews WHERE id=$1 RETURNING *",
id
);
return deletedReview;
} catch (error) {
return error;
}
};

const updateReview = async (id, reviewToUpdate) => {
try {
const updatedReview = await db.one(
"UPDATE reviews SET reviewer=$1, title=$2, content=$3, rating=$4, bookmark_id=$5 WHERE id=$6 RETURNING *",
[
reviewToUpdate.reviewer,
reviewToUpdate.title,
reviewToUpdate.content,
reviewToUpdate.rating,
reviewToUpdate.bookmark_id,
id,
]
);
return updatedReview;
} catch (error) {
return error;
}
};

module.exports = {
getAllReviews,
getAReview,
createReview,
deleteReview,
updateReview,
};