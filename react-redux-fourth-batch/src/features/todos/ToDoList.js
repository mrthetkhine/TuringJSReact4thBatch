import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {selectToDo,addToDo,removeTodo,saveToDo} from "./todoSlice";
import {nextId} from "../../util/Util";
import {nanoid} from "@reduxjs/toolkit";

const uniqueId = nanoid;

export default function ToDoList(props)
{
    const todos = useSelector(selectToDo);
    const dispatch = useDispatch();
    const [newItem,setNewItem] = useState('');

    const addHandler =()=>{
        console.log("New Item ",newItem);
        let payload = {
            id :uniqueId(),
            title : newItem
        };
        let action = addToDo(payload);
        console.log('Action ',action);
        dispatch(action);
        setNewItem('');
    };
    const saveHandler =()=>{
        dispatch(saveToDo(uniqueId()));
    }
    const removeToDoHandler = (toDoItem)=>{
        dispatch(removeTodo(toDoItem))
    };
    return(<div>
        <div>
            <input type={"text"}
                   className={"form-control"}
                   value = {newItem}
                   onChange={(event)=>setNewItem(event.target.value)}
            />
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={addHandler}>
                Add
            </button>
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={saveHandler}>
                Save
            </button>
        </div>
        {todos.map((item)=>{
            return (
                <div key={item.id}>
                    {item.title} &nbsp;
                    <button type={"button"}
                            className={"btn btn-danger"}
                            onClick={()=>removeToDoHandler(item)}>
                        Remove
                    </button>
                </div>)
        })}
    </div>)
}