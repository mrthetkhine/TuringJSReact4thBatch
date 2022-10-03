import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todos/todoSlice';
import movieReducer from '../features/movies/movieSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos : todoReducer,
    movie: movieReducer,
  },
});
