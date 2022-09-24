import React, {Suspense, useTransition,useState} from 'react';

function Spinner(props)
{
    return <div>
        Loading
    </div>
}
function useCustomTransition()
{
    let [pending,setPending] = useState(false);
    function run(callback)
    {
        setPending(true);
        setTimeout(()=> {
            callback();
            setPending(false);
        },200);

    }
    return [pending,run];
}
export default function UseTransitionDemo(props)
{
    const [isPending, startTransition] = useTransition();
    const [count, setCount] = useState(0);

    function handleClick() {
        startTransition(() => {
            setCount(c => c + 1);
        })
    }
    return (<div>
        <div>
            {isPending && <Spinner />}
            <button
                className={"btn btn-primary"}
                onClick={handleClick}>{count}</button>
        </div>
    </div>);
}