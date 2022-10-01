import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './index.css';
import ToDoListPage from "./pages/ToDoListPage";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<App />} >

                      <Route path="todos" element={<ToDoListPage />} />
                     {/* <Route path="about"
                             element={
                                 <ProtectedRoute user={{name:"Something"}}>
                                     <About />
                                 </ProtectedRoute>
                             }
                      />*/}
                     {/* <Route path="login" element={<Login />} />
                      <Route path="user/*" element={<Users />} />
                      <Route path="movies" element={<Movie />} >
                          <Route path={":movieId"} element={<MovieDetails/>} />
                      </Route>*/}
                  </Route>


                  {/*<Route path="*" element={<NotFoundPage />} >
                  </Route>*/}
              </Routes>
          </BrowserRouter>


    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
