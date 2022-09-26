import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {counterSlice, incrementAsync} from "../counter/counterSlice";
import {fetchCount} from "../counter/counterAPI";
import {saveToDoApi} from "./todoAPI";

const initialState = {
   items: [
       {
       id : 0,
       text : 'One'
        },
       {
           id : 1,
           text : 'Two'
       },
   ]
};
export const saveToDo = createAsyncThunk(
    'todos/saveToDo',
    async (id) => {
        console.log('SaveToDo ',id);
        const response = await saveToDoApi(id);
        // The value we return becomes the `fulfilled` action payload
        console.log('Response ',response);
        return response;
    }
);

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addToDo:(state, action) => {
            state.items.push(action.payload);
        },
        removeTodo:(state, action) => {
            state.items = state.items.filter(item=> item.id != action.payload.id);
        },
    },
    extraReducers: (builder) => {
        builder
           /* .addCase(incrementAsync.pending, (state) => {
                state.status = 'loading';
            })*/
            .addCase(saveToDo.fulfilled, (state, action) => {
                state.items.push( action.payload);
            });
    },
});
export const { addToDo,removeTodo } = todoSlice.actions;
export const selectToDo = (state) => state.todos.items;
export default todoSlice.reducer;