import React, { useState,useEffect } from 'react';

export default function EffectHookDemo(props)
{
    const [count, setCount] = useState(0);
    const [text,setText] = useState('');
    // Similar to componentDidMount and componentDidUpdate:

    useEffect(()=>{
        console.log("API call");
    },[]);
    useEffect(() => {
        console.log('Counter effect');
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
        return ()=>{
            console.log("Clean Up Function");
        };
    },[count]);
    useEffect(()=>{
       console.log("Another effect");
    });
    console.log('Render ');
    return (
        <div>
            <p>You clicked {count} times</p>
            <button
                className={"btn btn-primary"}
                onClick={() => setCount(count + 1)}
                >
                Click me
            </button>
            <input type={"text"}
                   value={text}
                   onChange={(event)=>setText(event.target.value)}
                />
        </div>
    );
}