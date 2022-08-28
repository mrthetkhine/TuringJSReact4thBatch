var express = require('express');
var router = express.Router();
var review = require('./../controller/ReviewController');


router.get('/', review.getAllReview);
//router.get('/:movieId', movies.getMovieById);
//router.get('/title/:title',movies.findMovieByTitle);
router.post('/',review.saveReview);

module.exports = router;