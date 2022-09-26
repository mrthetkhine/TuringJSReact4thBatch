import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {selectToDo} from "./todoSlice";
export default function ToDoCount(props)
{
    const todos = useSelector(selectToDo);
    const dispatch = useDispatch();
    return(<div>
      To Do Count  {todos.length}
    </div>)
}