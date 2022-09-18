import React, { useState,useEffect } from 'react';

//let [data,setData] = useState('');

function useFetchToDo(data)
{
    const [todos,setToDo] = useState(data);
    useEffect(()=>{
        let url = "https://jsonplaceholder.typicode.com/todos";
        fetch(url)
            .then(response=>response.json())
            .then(todos=>todos.map(todo=>todo.title))
            .then(titles=>setToDo(titles));
    },[]);
    return [todos,setToDo];
}
export default function ToDoListWithHook(props)
{
    let data = ["One","Two","Three"];
    const [todos,setToDo] = useFetchToDo(data);
    const [toDoItem,setToDoItem] = useState('');

    console.log('Render');
    const addToDoHandler= ()=> {
        setToDo([...todos,toDoItem]);
        setToDoItem('');
    };

    return (<div>
        <div>
            <input type={"text"}
                   className={"form-control"}
                   value={toDoItem}
                   onChange={(event)=>setToDoItem(event.target.value)}
                   />
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={addToDoHandler}>
                Add
            </button>
        </div>

        {
            todos.map((todo,index)=>{
                return <div key={index}>
                    {todo}
                </div>
            })
        }
    </div>)
}