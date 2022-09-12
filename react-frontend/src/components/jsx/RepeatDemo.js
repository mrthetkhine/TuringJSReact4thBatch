import React from 'react';

function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }
    return <div>{items}</div>;
}
export default class RepeatDemo extends React.Component
{
    render() {
        return (
            <Repeat numTimes={5}>
                {(index)=><div key={index}>This is item {index} in the list</div>}
            </Repeat>
        );
    }
}