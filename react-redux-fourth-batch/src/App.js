import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { Counter } from './features/counter/Counter';
import './App.css';
import ToDoList from "./features/todos/ToDoList";
import ToDoCount from "./features/todos/ToDoCount";

function App() {
  return (
    <div className="App">
      <header className="App-header">

       {/* <Counter />*/}
          <ToDoCount/>
        <ToDoList/>

      </header>
    </div>
  );
}

export default App;
