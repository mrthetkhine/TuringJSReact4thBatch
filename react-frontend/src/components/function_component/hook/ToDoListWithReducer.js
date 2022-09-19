import React, { useState,useReducer,useCallback } from 'react';

const nextIdGenerator = function (initialValue)
{
    let current = initialValue;
    return function ()
    {
        return current++;
    }
}
const nextId = nextIdGenerator(2);
const initialState = {
    items : [
        {
            id : 0,
            text : 'One'
        },
        {
            id : 1,
            text : 'Two'
        },

    ],
};
const reducer = function (state,action)
{
    switch (action.type)
    {
        case 'addToDo':
            return{
                items: [...state.items, action.payload]
            };
        case 'removeToDo':
            return{
                items: state.items.filter(item=> item.id!=action.payload.id)
            };
        case 'updateToDo':
            return{
                items: state.items.map(item=> item.id==action.payload.id ?
                                                action.payload : item)
            };
    }
}

//action creators
function addToDo(newItemText) {
    return {
        type: 'addToDo',
        payload: {
            id: nextId(),
            text: newItemText
        }
    };
}
function removeToDo(todoItem) {
    return {
        type: 'removeToDo',
        payload: todoItem
    };
}
function updateToDo(todoItem)
{
    return {
        type: 'updateToDo',
        payload: todoItem
    };
}
let factoryCache ;
export default function ToDoListWithReducer(props)
{
    const [newItemText,setNewItemText] = useState('');
    const [updateItem,setUpdateItem] = useState({});
    const [todos,dispatch] = useReducer(reducer,initialState,);
    //console.log('State ',state);

    let factory = useCallback(()=>{
        console.log('Todo ',todos);
        return todos;
    },[todos]);
    console.log('Factory ',factory == factoryCache);
    factoryCache = factory;

    const addToDoHandler = ()=>{
        dispatch(addToDo(newItemText));
        setNewItemText('');
    };
    const removeToDoHandler = (item)=>{
        dispatch(removeToDo(item));
    };
    const editHandler = (item)=>{
        setUpdateItem(item);
        setNewItemText(item.text);
    };
    const updateHandler = ()=>{
        console.log("Id ", updateItem.id);
        console.log("Text ",newItemText);
        const payload = {
            id : updateItem.id,
            text :newItemText
        };
        dispatch(updateToDo(payload));
        setNewItemText('');
    };
    return <div>
        To Do List
        <input type={"text"}
               className={"form-control"}
               value={newItemText}
               onChange={(event)=> setNewItemText(event.target.value)}
                />
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={addToDoHandler}>
            Add
        </button>
        &nbsp;
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={updateHandler}>
            Update
        </button>
        {
            todos.items.map(item=>{
                return <div key={item.id}>
                    {item.text}
                    <button type={"button"}
                        className={"btn btn-primary"}
                        onClick={()=>removeToDoHandler(item)}>
                        Delete
                    </button>
                    &nbsp;
                    <button type={"button"}
                            className={"btn btn-primary"}
                            onClick={()=>editHandler(item)}>
                        Edit
                    </button>
                </div>
            })
        }
    </div>
}