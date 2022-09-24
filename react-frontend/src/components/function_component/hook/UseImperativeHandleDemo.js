import React, {useRef,useImperativeHandle} from 'react';

function FancyInput(props, ref) {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            console.log('Use Imperative code');
            inputRef.current.focus();
        }
    }));
    return <input ref={inputRef} />;
}
FancyInput = React.forwardRef(FancyInput);
export default function UseImperativeHandleDemo(props)
{
    const ref = React.createRef();
    console.log('Ref ',ref);
    const handler = ()=>{
        ref.current.focus();
        console.log('Ref ');
    }
    return (<div>
        <FancyInput ref={ref}>Click me!</FancyInput>;
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={()=>handler()}
        >Use Imperative</button>
    </div>)
}
