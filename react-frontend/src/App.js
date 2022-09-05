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
          <WelcomeDialog/>
      </header>
    </div>
  );
}

export default App;
