import React from 'react';
export default class HelloWorld extends React.Component
{
    constructor(props) {
        super(props);
    }
    toUpper(str)
    {
        return str.toUpperCase();
    }
    render() {

        let obj =this.props.obj;
        console.log("Render");
        let element = <div>
            <h1>Hello {this.toUpper(obj.name)}</h1>
            <hr/>
        </div>;

        return element;
    }
}