import React from 'react';
import MouseTracker from "./MouseTracker";
import MouseWithCat from "./MouseWithCat";
import Cat from "./Cat";

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        //console.log("Event ",event);
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

                {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
                {this.props.render(this.state)}
            </div>
        );
    }
}
export default class RenderPropertyDemo extends React.Component
{
    render() {
        return (<div style={{width:'100%',height:'100%'}}>
           {/* <MouseTracker/>*/}
           {/* <MouseWithCat/>*/}
            <Mouse render={
                    (mouse)=> <Cat mouse={mouse}/>
                }
            ></Mouse>
        </div>);
    }
}