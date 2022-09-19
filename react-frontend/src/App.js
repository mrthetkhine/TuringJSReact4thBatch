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
import logProps from "./components/hoc/logProps";
import FragmentDemo from "./components/fragment/FragmentDemo";
import ForwardRefDemo from "./components/forward-ref/ForwardRefDemo";
import DatePicker from "./components/thrid_party/DatePicker";
import DynamicComponent from "./components/jsx/DynamicComponent";
import RepeatDemo from "./components/jsx/RepeatDemo";
import Tab from "./components/tab/Tab";
import RenderPropertyDemo from "./components/render-property/RenderPropertyDemo";
import PortalDemo from "./components/portal/PortalDemo";
import FunctionCounter from "./components/function_component/FunctionCounter";
import ToDoListWithHook from "./components/function_component/hook/ToDoListWithHook";
import EffectHookDemo from "./components/function_component/hook/EffectHookDemo";
import ContextHookDemo from "./components/function_component/hook/ContextHookDemo";
import ReducerHookDemo from "./components/function_component/hook/ReducerHookDemo";
import ToDoListWithReducer from "./components/function_component/hook/ToDoListWithReducer";
import MemoHookDemo from "./components/function_component/hook/MemoHookDemo";
const FragmentExample = logProps(FragmentDemo);
function App() {
    let obj = {
        name : "Tk",
    };
    let post = {
        text : "How are you",
        profile : obj
    }
    let headers = ["Profile","About","Admin"];
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
        {/*  <ToDoListWithHook/>*/}
         {/* <WelcomeDialog/>*/}
        {/*  <FocusDemo/>*/}
          {/*<Suspense fallback={<div>Loading...</div>}>
            <OuterClickExample/>
          </Suspense>*/}
       {/* <ContextRootUi/>*/}
        {/*<ErrorBoundary>
            <BuggyComponent/>
        </ErrorBoundary>*/}
        {/*  <FragmentDemo/>*/}
        {/*  <ForwardRefDemo/>*/}
        {/*  <FragmentExample loading={true}/>*/}
        {/*  <DatePicker/>*/}
         {/* <DynamicComponent userType={"User"}/>*/}
          {/*<RepeatDemo/>*/}
         {/* <Tab headers={headers}>
              <div>
                  Profile info
              </div>
              <div>
                  About Info
              </div>
              <div>
                  Admin Content info
              </div>
          </Tab>*/}
         {/* <RenderPropertyDemo/>*/}
          {/*<PortalDemo/>*/}
          {/*<FunctionCounter/>*/}
         {/* <ToDoListWithHook/>*/}
         {/* <ContextHookDemo/>*/}
         {/* <EffectHookDemo/>*/}
         {/* <ReducerHookDemo/>*/}
         {/* <ToDoListWithReducer/>*/}
          <MemoHookDemo/>
      </header>
    </div>
  );
}

export default App;
