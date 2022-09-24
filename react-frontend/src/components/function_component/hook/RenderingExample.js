import React, {Suspense, useState,useCallback} from 'react';

function RenderingChild(props)
{
    console.log("Render Child");
    return (<div>
        Rendering Child {props.message}

        <button type={"button"}
                className={"btn btn-primary"}
                onClick={props.handler}>
            Handler
        </button>
    </div>);
}
const Child = React.memo(RenderingChild);
//const Child = RenderingChild;
export default function RenderingExample(props)
{
    console.log("Render Parent");
    let [counter,setCounter] = useState(0);

    const handler =useCallback( ()=>{
        console.log("Callback handler in parent");
    },[]);
    return (<div>
        RenderingExample {counter}
        &nbsp;
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={()=>setCounter(counter+1)}>
            Inc
        </button>

        <Child message={"Hello"}
                handler = {handler}/>
    </div>);
}