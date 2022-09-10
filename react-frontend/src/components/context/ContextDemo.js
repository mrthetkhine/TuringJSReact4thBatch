import React from 'react';
import ThemeContext from "./ThemeContext";
class ThemedButton extends React.Component {
    // Assign a contextType to read the current theme context.
    // React will find the closest theme Provider above and use its value.
    // In this example, the current theme is "dark".
    static contextType = ThemeContext;
    render() {
        return(<div>
        Button    FB {this.context.foreground}
            BG {this.context.background}
        </div>);

    }
}

export default class ContextDemo extends React.Component
{
    render() {
        return (
            <div>
                <ThemedButton />
                <ThemeContext.Consumer>
                    {value=>{
                        return (<div> Another child {value.foreground}</div>);
                    }}
                </ThemeContext.Consumer>
            </div>

        );
    }
}