import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import {fetchCount} from "../counter/counterAPI";
import {apiGetAllTodos} from "./todoApi";
import {incrementAsync} from "../counter/counterSlice";

export interface TodoItem
{
    id?:string,
    text : string,
}
export interface TodoState {
    items: Array<TodoItem>
}
const initialState: TodoState = {
    items: [
        {
            id:"1",
            text:'Task1'
        },
        {
            id:"2",
            text:'Task 2'
        },
    ],
};
export const loadTodos = createAsyncThunk(
    'todo/loadTodos',
    async () => {
        console.log('LoadTodos async');
        const response = await apiGetAllTodos();
        // The value we return becomes the `fulfilled` action payload
        return response;
    }
);
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addToDo: (state, action: PayloadAction<TodoItem>) => {
            state.items.push(action.payload);
        },
        removeTodo:(state, action: PayloadAction<TodoItem>) => {
            state.items = state.items.filter((item:TodoItem)=>item.id !== action.payload.id);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadTodos.fulfilled, (state, action) => {
                console.log('Action payload ',action.payload);
                state.items = action.payload;
            });

    },
});
export const { addToDo,removeTodo } = todoSlice.actions;
export const selectToDo = (state: RootState) => state.todo.items;
export default todoSlice.reducer;