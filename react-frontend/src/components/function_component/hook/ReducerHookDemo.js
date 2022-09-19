import React, { useState,useReducer } from 'react';


const initialState = {
    value : 0,
}
function reducer(state,action)
{
    console.log('Reducer state ',state, ' Action ', action);
    switch (action.type)
    {
        case 'increment':
            return {value : state.value + 1};
        case 'decrement':
            return {value : state.value -1};
        default:
            throw new Error('Unknown action type '+action.type);
    }
}
export default function ReducerHookDemo(props)
{
    const [state, dispatch] = useReducer(reducer,initialState);

    const incrementHandler =()=>{
        dispatch({
            type:'increment'
        });
    };
    const decrementHandler = ()=>{
        dispatch({
            type:'decrement'
        });
    }
    return (<div>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={incrementHandler}>
            +
        </button>
           &nbsp; {state.value}&nbsp;
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={decrementHandler}>
            -
        </button>
    </div>);
}