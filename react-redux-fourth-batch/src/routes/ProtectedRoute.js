import React,{Component} from 'react';
import {
    Link,
    Route,
    Navigate,
} from "react-router-dom";
export default  function ProtectedRoute({ children,
                                          redirectTo,
                                          isAuth,
                                          path, ...props })  {
    console.log("Protected Route Render");
    console.log('Is auth ',isAuth, ' redirectTo ',redirectTo);
    return isAuth ? children : <Navigate to={redirectTo} />;
}
