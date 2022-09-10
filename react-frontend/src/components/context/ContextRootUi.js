import React from 'react';
import ThemeContext,{themes} from "./ThemeContext";
import ContextDemo from "./ContextDemo";
export default class ContextRootUi extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            theme : themes.dark
        }
    }
    changeTheme()
    {
        this.setState({
            theme : themes.light
        })
    }
    render() {
        let obj = {};
        return (<div>
            <ThemeContext.Provider value={this.state.theme}>
                <ContextDemo/>
                <button type={"button"}
                        className={"btn btn-primary"}
                        onClick={()=>this.changeTheme()}>
                    Change

                </button>
            </ThemeContext.Provider>
        </div>);
    }
}