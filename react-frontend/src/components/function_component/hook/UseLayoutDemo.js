import React, {Suspense, useLayoutEffect,useDebugValue} from 'react';

export default function UseLayoutDemo(props)
{
    useDebugValue('Demo debug value');
    console.log("Use render");
    useLayoutEffect(()=>{
       console.log("Run layout");
    });
    return (<div>
        Use Layout Demo
    </div>);
}