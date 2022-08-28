const mongoose = require('mongoose');
let Reviews = require('../model/Review');
let Movies = require('../model/Movie');

const getAllReview = async ()=>{
    return Reviews.find();
}
const getReviewById = async(reviewId)=>{
    return Reviews.findById(reviewId).populate("movie");
}
const saveReview = async(review)=>{
    const newReview = new Reviews({
        movie: mongoose.Types.ObjectId(review.movie),
        rating: review.rating,
        review: review.review,

    });

    await newReview.save();
    return newReview.populate('movie');
}
module.exports = {
    getAllReview,
    getReviewById,
    saveReview,
    /*
    updateReview,
    deleteReview,

    getReviewByMovieId*/
}