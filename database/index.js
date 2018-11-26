const mongoose = require('mongoose');

<<<<<<< HEAD
mongoose.connect('mongodb://localhost/whats_lunch');

const restaurantSchema = mongoose.Schema({
  id: Number,
  restaurant_name: String,
  reviews: [{
    user_name: String,
    user_avatar: String,
    location: String,
    date: String,
    score: Number,
    food_image: String,
  }],
});

const Restaurant = mongoose.model('restaurant_reviews', restaurantSchema);

// retrieve
const retrieve = (id, callback) => {
  Restaurant.find({ id }, (err, res) => {
    if (err) {
      callback(err, null);
=======
// connect to database
const connection = mysql.createConnection({
  // host: 'database',
  user: 'root',
  database: 'yump_SF',
});

const restaurantReviews = (id, callback) => {
  // const query = `
  //   select restaurant.name, user_info.user_avatar, user_info.user_name,
  //   user_info.location, user_info.number_reviews, user_info.number_photos,
  //   users_reviews.date, users_reviews.review_comment, users_reviews.score,
  //   users_reviews.picture_food, restaurant.name FROM users_reviews 
  //   INNER JOIN restaurant ON restaurant.id = users_reviews.id  
  //   INNER JOIN user_info ON user_info.user_id = users_reviews.user_id
  //   WHERE restaurant.id = ${id}
  //   ORDER BY users_reviews.date desc
  // `;
  const query = `
    select restaurant.name, reviews.user_avatar, reviews.user_name,
    reviews.location, reviews.date, reviews.review_comment, reviews.score,
    reviews.food_image, restaurant.name FROM reviews 
    INNER JOIN restaurant ON restaurant.id = reviews.id  
    ORDER BY reviews.date desc
  `;
  connection.query(query, (error, results) => {
    if (error) {
      callback(error, null);
>>>>>>> 120b116db8885360688788a2bf49c32e16bfa8c1
    } else {
      callback(null, res);
    }
  });
};

<<<<<<< HEAD
const addRestaurant = (restaurant_name, callback) => {
  Restaurant.create({ restaurant_name }, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports.retrieve = retrieve;
module.exports.addRestaurant = addRestaurant;
=======
const getOne = (id, callback) => {
  const query = 'SELECT * FROM restaurant WHERE id = (?)';
  connection.query(query, [id], (error, results) => {
    if (error) {
      callback(error);
    }
    callback(null, results);
  });
};

const addRestaurant = (name, callback) => {
  const query = 'INSERT INTO restaurant (name) VALUES (?)';
  connection.query(query, [name], (error, results) => {
    if (error) {
      callback(error);
    }
    callback(null, results);
  });
};

const editRestaurant = (id, newName, callback) => {
  const query = `UPDATE restaurant SET name = (?) WHERE id = ${id}`;
  connection.query(query, [newName], (error) => {
    if (error) {
      callback(error);
    }
    callback(null);
  });
};

const deleteRestaurant = (id, callback) => {
  const query = 'DELETE from restaurant WHERE id = ?';
  connection.query(query, [Number(id)], (error) => {
    if (error) {
      callback(error);
    }
    callback(null);
  });
};

module.exports = {
  connection, restaurantReviews, addRestaurant, editRestaurant, deleteRestaurant, getOne,
};
>>>>>>> 120b116db8885360688788a2bf49c32e16bfa8c1
