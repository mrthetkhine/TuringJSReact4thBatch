import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAllMovie, saveMovie, updateMovie} from "../movies/movieSlice";
import {apiGetAllMovie} from "../movies/movieApi";
import {apiGetAllReviewByMovie} from "./reviewApi";

const reviewData = [];
const initialState = {
    reviews:reviewData
};
export const getAllReviewByMovie = createAsyncThunk(
    'review/getAllReviewByMovie',
    async (movieId) => {
        console.log("API get all getAllReviewByMovie");
        const response = await apiGetAllReviewByMovie(movieId);

        console.log("All apiGetAllReviewByMovie json ",response.data);
        return response.data;
    }
);
export const reviewSlice = createSlice({
    name: 'review',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {


    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllReviewByMovie.fulfilled, (state,action) => {
                state.reviews = action.payload;
            });


    },
});
//export const { addMovie} = reviewSlice.actions;
export const selectReview = (state) => state.review.reviews;
export default reviewSlice.reducer;