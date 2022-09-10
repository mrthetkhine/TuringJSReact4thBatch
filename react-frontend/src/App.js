import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HelloWorld from "./components/HelloWorld";
import Hello from "./components/function_component/Hello";
import Post from "./components/Post";
import Counter from "./components/Counter";
import Greeting from "./components/function_component/Greeting";
import ListDemo from "./components/ListDemo";
import FormDemo from "./components/FromDemo";
import BasicForm from "./components/formik/BasicForm";
import YupForm from "./components/formik/YupForm";
import ToDoList from "./components/ToDoList";
import WelcomeDialog from "./components/WelcomeDialog";
import FocusDemo from "./components/FocusDemo";
import ContextDemo from "./components/context/ContextDemo";
//import OuterClickExample from './components/OuterClickExample';

/*const OuterClickExample = React.lazy(() => import('./components/OuterClickExample'));
import("./OurMath").then(math => {
    console.log("Add ",math.add);
    console.log(math.add(16, 26));
});*/
import ThemeContext from "./components/context/ThemeContext";
import ContextRootUi from "./components/context/ContextRootUi";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import BuggyComponent from "./components/error-boundary/BuggyComponent";
import FragmentDemo from "./components/fragment/FragmentDemo";
function App() {
    let obj = {
        name : "Tk",
    };
    let post = {
        text : "How are you",
        profile : obj
    }
  return (
    <div className="App">
      <header className="App-header">
        {/*  <HelloWorld obj={obj} />*/}

       {/* <HelloWorld  obj={obj}/>
          <Hello/>
       <Post post={post}></Post>*/}
          {/*<Counter initalValue={4} incValue={2}/>*/}
          {/*<Greeting isLoggedIn={false}/>*/}
         {/* <ListDemo/>*/}
         {/* <FormDemo/>*/}
          {/*<BasicForm/>*/}
         {/* <YupForm/>*/}
        {/*  <ToDoList/>*/}
         {/* <WelcomeDialog/>*/}
        {/*  <FocusDemo/>*/}
          {/*<Suspense fallback={<div>Loading...</div>}>
            <OuterClickExample/>
          </Suspense>*/}
       {/* <ContextRootUi/>*/}
        {/*<ErrorBoundary>
            <BuggyComponent/>
        </ErrorBoundary>*/}
          <FragmentDemo/>
      </header>
    </div>
  );
}

export default App;
