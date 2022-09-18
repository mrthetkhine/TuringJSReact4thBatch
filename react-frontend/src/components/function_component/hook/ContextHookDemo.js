import React,{useContext} from 'react';
import ThemeContext from "../../context/ThemeContext";


export default function ContextHookDemo(props)
{
    const theme = useContext(ThemeContext);
    return (<div>
        Context Hook Demo foreground {theme.foreground}
    </div>);
}