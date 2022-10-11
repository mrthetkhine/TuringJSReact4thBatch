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
import {injectStore} from "./setting/our_axios";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './index.css';
import ToDoListPage from "./pages/ToDoListPage";
import MovieListPage from "./pages/MovieListPage";
import MovieDetailPage from "./features/reviews/MovieDetailPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import {useAuthentication} from "./services/authService";
import LogoutPage from "./pages/LogoutPage";

const container = document.getElementById('root');
const root = createRoot(container);

function AppRouter() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>

                <Route path="todos" element={<ToDoListPage/>}/>
                <Route path="/login" element={<LoginPage/>}>

                </Route>
                <Route path="/logout" element={<LogoutPage/>}>
                </Route>
                <Route path="/movies" element={
                    <ProtectedRoute
                        redirectTo={"/login?redirectTo=/movies"}
                         isAuth={useAuthentication()}>
                        <MovieListPage/>
                    </ProtectedRoute>}>

                </Route>

                <Route
                    path={"movies/:movieId"}
                    element={
                        <ProtectedRoute
                            redirectTo={"/login?redirectTo=/movie-detail/:movieId"}
                            isAuth={useAuthentication()}>
                            <MovieDetailPage/>
                        </ProtectedRoute>
                    }
                />
                {/* <Route path="movies" element={<MovieListPage />} >

                      </Route>*/}
                {/* <Route path={"movies/:movieId"} element={<MovieDetailPage/>} />*/}
                {/* <Route path="about"
                             element={
                                 <ProtectedRoute user={{name:"Something"}}>
                                     <About />
                                 </ProtectedRoute>
                             }
                      />*/}
                {/* <Route path="login" element={<Login />} />
                      <Route path="user/*" element={<Users />} />
                      */}
            </Route>


            {/*<Route path="*" element={<NotFoundPage />} >
                  </Route>*/}
        </Routes>
    </BrowserRouter>;
}

injectStore(store);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <AppRouter/>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
