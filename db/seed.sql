\c bookmarks_dev;

INSERT INTO bookmarks (name, url, category, is_favorite) VALUES
('canvas', 'https://pursuit.instructure.com/courses/32', 'educational', true),
('github', 'https://github.com/theCephusHasLanded/CephusOnBudgetFE', 'inspirational', true),
('pinterest', 'https://www.pinterest.com/homefeed/','adulting', true);

INSERT INTO reviews (reviewer, title, content, rating, bookmark_id) VALUES
('John Doe', 'Great experience', 'I had an amazing time at this restaurant. The food was delicious and the service was impeccable.', 5, 1),
('Jane Smith', 'Disappointing', 'I was really looking forward to trying this place, but the food was just okay and the service was slow.', 2, 1),
('David Lee', 'Highly recommend', 'This is one of the best restaurants I have ever been to. The food is fantastic and the atmosphere is lovely.', 5, 2),
('Sara Kim', 'Decent option', 'If you are in the area and looking for a quick bite, this place is not bad. Nothing special, though.', 3, 3);

