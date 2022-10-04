import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {apiDeleteMovie, apiGetAllMovie, apiSaveMovie, apiUpdateMovie} from "./movieApi";
import {incrementAsync} from "../counter/counterSlice";
const movieData = [
    /*{
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
    }*/
];
const initialState = {
    movies:movieData
};
export const getAllMovie = createAsyncThunk(
    'movie/getAllMovie',
    async () => {
        console.log("API get all movie");
        const response = await apiGetAllMovie();

        console.log("All movie json ",response.data);
        return response.data;
    }
);
export const saveMovie = createAsyncThunk(
    'movie/saveMovie',
    async (movie) => {
        console.log("API get all movie");
        const response = await apiSaveMovie(movie);

        console.log("Save movie json ",response.data);
        return response.data;
    }
);
export const updateMovie = createAsyncThunk(
    'movie/updateMovie',
    async (movie) => {
        console.log("updateMovie movie");
        const response = await apiUpdateMovie(movie);

        console.log("Update movie json ",response.data);
        return response.data;
    }
);
export const deleteMovie = createAsyncThunk(
    'movie/deleteMovie',
    async (movie) => {
        console.log("deleteMovie movie");
        const response = await apiDeleteMovie(movie);

        console.log("deleteMovie movie json ",response.data);
        return response.data;
    }
);
export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {

        addMovie: (state, action) => {
            state.movies.push( action.payload);
        },
        /*deleteMovie: (state, action) => {
            state.movies =state.movies.filter(movie=>movie._id!= action.payload._id);
        },*/
       /* updateMovie :(state, action) => {
            state.movies =state.movies.map(movie=>movie._id === action.payload._id?action.payload:movie);
        },*/
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllMovie.fulfilled, (state,action) => {
                state.movies = action.payload;
            })
            .addCase(saveMovie.fulfilled, (state,action) => {
                state.movies = [... state.movies, action.payload];
            })
            .addCase(updateMovie.fulfilled, (state,action) => {
                state.movies =state.movies.map(movie=>movie._id === action.payload._id?action.payload:movie);
            });

    },
});
export const { addMovie} = movieSlice.actions;
export const selectMovie = (state) => state.movie.movies;
export const selectMovieById =  (state,movieId) => state.movie.movies.filter(movie=>movie._id ==movieId)[0];
export default movieSlice.reducer;