import { useRef, useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null)
  const changeMode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#111111';
    }
  }
  return (
    <>
      <Navbar title="Text Converter" search="Search Here" mode={mode} changeMode={changeMode}/>
      <Alert alertmessage="This is alert"/>
      <div className="container my-5">
        <TextForm heading="Enter Your Text" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
