import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {addToDo, loadTodos, removeTodo, selectToDo, TodoItem} from "../todo/todoSlice";
import {useEffect, useState} from "react";

let id = 2;
function uuid():number{
    id ++;
    return id;
}

function TodoItemUI(props: { todoItem: TodoItem,removeTodo:(item:TodoItem)=>void }) {
    return <div>
        {
            props.todoItem.text
        }

        &nbsp;
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={()=>props.removeTodo(props.todoItem)}>
            Remove
        </button>
    </div>;
}

function TodoList(props: { todoItems: any, element: (todoItem: TodoItem) => JSX.Element }) {
    return <>
        {
            props.todoItems.map(props.element)
        }
    </>;
}

export default function ToDo()
{
    const dispatch = useAppDispatch();
    useEffect(()=>{
        console.log('Load todos');
        dispatch(loadTodos());
    },[]);
    const todoItems = useAppSelector(selectToDo);
    const [todoInput,setTodoInput] = useState('');

    const addToDoHandler = ()=>{
        let todo:TodoItem = {
            id : uuid()+'',
            text : todoInput
        };
        dispatch(addToDo(todo));
    }
    const removeToDoHandler = (item:TodoItem)=>{
        console.log('Remove to do ',item);
        dispatch(removeTodo(item));
    };
    return (<div>
        <input type={"text"}
               value={todoInput}
               onChange={(e => setTodoInput(e.target.value))}/>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={addToDoHandler}
        >Add
        </button>
        <TodoList todoItems={todoItems} element={(todoItem: TodoItem) => {
            return <TodoItemUI key={todoItem.id}
                               todoItem={todoItem}
                               removeTodo={removeToDoHandler}/>
        }}/>
    </div>)
};