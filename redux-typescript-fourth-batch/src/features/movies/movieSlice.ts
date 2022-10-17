import {loadTodos, TodoItem, TodoState} from "../todo/todoSlice";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

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
});

export const { addMovie,removeMovie } = movieSlice.actions;
export const selectMovie = (state: RootState) => state.movie.movies;
export default movieSlice.reducer;