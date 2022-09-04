import React from 'react';
export default class Counter extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            counter : this.props.initalValue
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    increment(event)
    {
        console.log('Inc ', event);
       /* this.setState({
            counter :this.state.counter + this.props.incValue
        });*/
        this.setState((state, props) => ({
            counter: state.counter + props.incValue
        }));

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
            <button className="btn btn-primary"
                    type="button"
                    onClick={(event)=>this.increment(event)}>+</button>
            &nbsp;{ this.state.counter}&nbsp;
            <button className="btn btn-primary" type="button" onClick={this.decrement}>-</button>
        </div>);
    }
}