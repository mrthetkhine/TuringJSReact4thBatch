import logo from './logo.svg';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import Hello from "./components/function_component/Hello";
import Post from "./components/Post";
import Counter from "./components/Counter";

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
          <Counter initalValue={4}/>
      </header>
    </div>
  );
}

export default App;
