import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todo/todoSlice';
import movieReducer from '../features/movies/movieSlice';
import authReducer from '../features/auth/authSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    movie : movieReducer,
    auth : authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
