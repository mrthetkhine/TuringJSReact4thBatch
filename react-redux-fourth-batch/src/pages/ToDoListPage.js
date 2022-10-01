import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllToDo, selectToDo, selectToDoLoading} from "../features/todos/todoSlice";
import ToDoList from "../features/todos/ToDoList";

import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

export default function ToDoListPage(props)
{
    console.log('ToDoList page render');
    const loading = useSelector(selectToDoLoading);
    let [color, setColor] = useState("#ffffff");
    return (<div>
        <ClipLoader color={color} loading={loading} cssOverride={override} size={150} />
        <ToDoList/>
    </div>);
}