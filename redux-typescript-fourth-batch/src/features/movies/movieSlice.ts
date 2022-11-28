import {loadTodos, TodoItem, TodoState} from "../todo/todoSlice";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {apiDeleteMovie, apiGetAllMovie, apiSaveMovie, apiUpdateMovie} from "./movieApi";

export interface Director {
    _id?: string;
    name :string;
    phoneNo :string,
}
export interface Movie {
    _id?: string;
    title :string;
    year :number;
    director? : Director;
}
export interface MovieList {
    movies: Array<Movie>
}
const initialState: MovieList = {
    movies: [
        {
            _id:"1",
            title:'Movie 1',
            year : 1995,
            director : {
                _id: "2",
                name :"Director 1",
                phoneNo :"1293939",
            }
        }
    ],
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
    async (movie:Movie) => {
        console.log("API get all movie");
        const response = await apiSaveMovie(movie);

        console.log("Save movie json ",response.data);
        return response.data;
    }
);
export const updateMovie = createAsyncThunk(
    'movie/updateMovie',
    async (movie:Movie) => {
        console.log("updateMovie movie");
        const response = await apiUpdateMovie(movie);

        console.log("Update movie json ",response.data);
        return response.data;
    }
);
export const deleteMovie = createAsyncThunk(
    'movie/deleteMovie',
    async (movie:Movie) => {
        console.log("deleteMovie movie");
        const response = await apiDeleteMovie(movie);

        console.log("deleteMovie movie json ",response.data);
        return response.data;
    }
);
export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers:{
        addMovie: (state, action: PayloadAction<Movie>) => {
            state.movies.push(action.payload);
        },
        removeMovie:(state, action: PayloadAction<Movie>) => {
            state.movies = state.movies.filter((movie:Movie)=>movie._id !== action.payload._id);
        },
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

export const { addMovie,removeMovie } = movieSlice.actions;
export const selectMovie = (state: RootState) => state.movie.movies;
export default movieSlice.reducer;