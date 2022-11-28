import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ToDo from "./features/todo/ToDo";
import MoviePage from "./pages/MoviePage";
import {useAuthentication} from "./services/authService";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./component/PrivateRoute";
import HomePage from "./pages/HomePage";
import LogoutPage from "./pages/LogoutPage";

function App() {
  return (
    <div className="App">
        learn
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/movie-list">Movie list</Link>
                        </li>
                        {
                            !useAuthentication() &&<li className="nav-item active">
                                <Link className="nav-link" to="/login?redirectTo=/">Login</Link>
                            </li>
                        }
                        {/*{
                        useAuthentication()
                        && <li className="nav-item">
                            <Link className="nav-link" to="/movie-list">Movie List</Link>
                        </li>
                    }
                */}
                        {useAuthentication() && <li className="nav-item">
                            <Link className="nav-link" to="/logout">Logout</Link>
                        </li>}


                    </ul>

                </div>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage/>}>

                </Route>

             {/*   <Route path="/movie-details/:movieId" element={<MovieDetailsPage/>}>

                </Route>*/}
                <Route path="/login" element={<LoginPage/>}>

                </Route>*
                <Route path="/movie-list" element={
                    <PrivateRoute
                        redirectTo={"/login?redirectTo=/movie-list"}
                        isAuth={useAuthentication()}>
                        <MoviePage></MoviePage>
                    </PrivateRoute>}>

                </Route>

                <Route
                    path="/movie-details/:movieId"
                    element={
                        <PrivateRoute
                            redirectTo={"/login?redirectTo=/movie-detail/:movieId"}
                            isAuth={useAuthentication()}>
                           {/* <MovieDetailsPage />*/}
                        </PrivateRoute>
                    }
                />

              <Route path="/logout" element={<LogoutPage/>}>

                </Route>



            </Routes>
        </Router>

    {/* <ToDo/>*/}

    </div>
  );
}

export default App;
