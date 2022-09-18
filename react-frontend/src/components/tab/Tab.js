import React from 'react';
import './Tab.css';
function Header(props)
{
    let classes = "header";
    if(props.active)
    {
        classes+= " active";
    }
    return (<span className={classes}
                  onClick={()=>props.clickHandler()}>
                {props.text}
            </span>);
}
export default class Tab extends React.PureComponent
//export default class Tab extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            activeTab : 0
        }
    }

    changeTab(index)
    {
        this.setState({
            activeTab : index
        })
    }
    /*shouldComponentUpdate(nextProps, nextState) {
        return this.state.activeTab != nextState.activeTab;
    }*/
    render() {
        console.log("Tab Render");
        return (
            <div>
                {
                    this.props.headers.map(
                        (header,index)=><Header key={index}
                                                text={header}
                                                active={index==this.state.activeTab}
                                                clickHandler={()=>this.changeTab(index)}
                        />
                    )
                }
                <div className={"tab-body"}>
                    {this.props.children[this.state.activeTab]}
                </div>
            </div>
        );
    }
}