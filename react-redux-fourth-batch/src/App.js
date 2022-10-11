import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet, NavLink
} from "react-router-dom";

import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { Counter } from './features/counter/Counter';
import './App.css';
import ToDoList from "./features/todos/ToDoList";
import ToDoCount from "./features/todos/ToDoCount";
import {useDispatch} from "react-redux";
import {fetchAllToDo} from "./features/todos/todoSlice";
import {useAuthentication} from "./services/authService";

function App() {
    console.log('App Render');
    function getActiveStyle() {
        return ({isActive}) => {
            return {
                /* display: "block",
                 margin: "1rem 0",*/
                color: isActive ? "blue" : "",
            };
        };
    }
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log('Run fetch all todos');
        dispatch(fetchAllToDo());
    },[]);
    return (
    <div className="App">
    {/*  <header className="App-header">

        <Counter />
          <ToDoCount/>
        <ToDoList/>

      </header>*/}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/"
                                 style={getActiveStyle()}
                                 className={"nav-link"}>Home</NavLink> &nbsp;
                    </li>
                    <li className="nav-item active">
                        <NavLink to="/todos"
                                 style={getActiveStyle()}
                                 className={"nav-link"}>To Do List</NavLink> &nbsp;

                    </li>
                    <li className="nav-item active">
                        <NavLink to="/movies"
                                 style={getActiveStyle()}
                                 className={"nav-link"}>Movie</NavLink> &nbsp;

                    </li>


                    {
                        useAuthentication() && <li className="nav-item">
                        <NavLink to="/logout"
                                 style={getActiveStyle()}
                                 className={"nav-link"}>Logout</NavLink> &nbsp;
                        </li>
                    }


                </ul>

            </div>
        </nav>
        <Outlet/>
    </div>
  );
}

export default App;
