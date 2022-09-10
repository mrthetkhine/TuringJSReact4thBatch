import React from 'react';
export default class FocusDemo extends React.Component
{
    constructor(props) {
        super(props);
        // Create a ref to store the textInput DOM element
        this.textInput = React.createRef();
    }
    focus() {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.textInput.current.focus();
    }
    show()
    {
        console.log("This textInput ",this.textInput.current.value);
    }
    render() {
        return (<div>
            Focus Demo
            <input
                type="text"
                ref={this.textInput}
            />
            <button type="button" onClick={()=>this.focus()}
                    className={"btn btn-primary"}>Focus</button>
            <button type="button" onClick={()=>this.show()}
                    className={"btn btn-primary"}>Show</button>
        </div>);
    }
}