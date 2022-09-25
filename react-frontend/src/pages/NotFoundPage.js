import {Link} from "react-router-dom";
import React from "react";

export default function NotFoundPage(props)
{
    return (<div>
        <h4>Not found any page-404</h4>
        <Link to="/" className={"nav-link"}>Home</Link> &nbsp;
    </div>)
}