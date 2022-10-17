import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ToDo from "./features/todo/ToDo";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <div className="App">

    {/* <ToDo/>*/}
        <MoviePage></MoviePage>
    </div>
  );
}

export default App;
