import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Movie from "./pages/Movie";
import MovieDetails from "./pages/MovieDetails";
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/Login";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} >

                  <Route index element={<Home />} />
                  <Route path="about"
                         element={
                          <ProtectedRoute user={{name:"Something"}}>
                              <About />
                          </ProtectedRoute>
                        }
                  />
                  <Route path="login" element={<Login />} />
                  <Route path="user/*" element={<Users />} />
                  <Route path="movies" element={<Movie />} >
                      <Route path={":movieId"} element={<MovieDetails/>} />
                  </Route>
              </Route>


              <Route path="*" element={<NotFoundPage />} >
              </Route>
          </Routes>
      </BrowserRouter>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
