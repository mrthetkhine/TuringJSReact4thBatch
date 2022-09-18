import React, { Suspense } from 'react';
const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
        {props.children}
    </button>
));
export default class ForwardRefDemo extends React.Component
{
    render() {
        const ref = React.createRef();
        console.log("Ref ",ref);
        return (
            <div>

                <FancyButton ref={ref}>Click me!</FancyButton>;
            </div>
        );
    }
}