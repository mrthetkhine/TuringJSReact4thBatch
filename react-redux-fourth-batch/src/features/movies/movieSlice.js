import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const movieData = [
    {
        "_id": "630b3f62882688c9117e36be",
        "title": "Titanic Update",
        "director": {
            "name": "Jame Cameron",
            "phoneNo": "09993",
            "_id": "630b3f62882688c9117e36bf"
        },
        "year": 1995,
        "__v": 0
    },
    {
        "_id": "630b457ea3ee760187d1ed44",
        "title": "Jhon Wick",
        "director": {
            "name": "Jame Cameron",
            "phoneNo": "09993",
            "_id": "630b457ea3ee760187d1ed45"
        },
        "year": 2000,
        "__v": 0
    },
    {
        "_id": "630b4922e9cd414251ca96fa",
        "title": "Titanic Two",
        "director": {
            "name": "Jame Cameron",
            "phoneNo": "09993",
            "_id": "630b4922e9cd414251ca96fb"
        },
        "year": 2000,
        "__v": 0
    },
    {
        "_id": "631321ed908ec3d02b7e914e",
        "title": "Titanic Three",
        "director": {
            "name": "Jame Cameron",
            "phoneNo": "09993",
            "_id": "631321ed908ec3d02b7e914f"
        },
        "year": 2000,
        "__v": 0
    }
];
const initialState = {
    movies:movieData
};
export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {

        addMovie: (state, action) => {
            state.movies.push( action.payload);
        },
        deleteMovie: (state, action) => {
            state.movies =state.movies.filter(movie=>movie._id!= action.payload._id);
        },
    },
});
export const { addMovie,deleteMovie} = movieSlice.actions;
export const selectMovie = (state) => state.movie.movies;
export default movieSlice.reducer;