import React, { useState } from 'react';

export default function FunctionCounter(props)
{
    const [count, setCount] = useState(0);
    const [enabled,setEnable] = useState(true);
    /*
    this.state = {
    count:0
    }
    setCount(val) = this.setState({
        count : val
    });
    * */
    let inc = ()=>{
        setCount(count +1);
    };
    let enableHandler =()=>{
        setEnable(!enabled);
    };
    return (<div>
        Counter {count} &nbsp;
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={inc}
                disabled={enabled}>
            +
        </button>
        &nbsp;
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={enableHandler}
               >
           Toggle
        </button>

    </div>);
}