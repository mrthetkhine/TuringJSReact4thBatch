import React from 'react';
export default class Counter extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            counter : this.props.initalValue
        }
    }
    increment()
    {
        console.log('Inc');
        this.setState({
            counter :this.state.counter +1
        })
    }
    decrement()
    {
        console.log('Dec');
        this.setState({
            counter :this.state.counter -1
        })
    }
    render() {
        console.log("Render");
        return (<div>
            Counter
            <button type="button" onClick={()=>this.increment()}>+</button>
            &nbsp;{ this.state.counter}&nbsp;
            <button type="button" onClick={()=>this.decrement()}>-</button>
        </div>);
    }
}