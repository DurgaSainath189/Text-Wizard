import { useRef, useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
   setTimeout(() => {
    setAlert(null);
   }, 2000);
  }
  const changeMode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Switched to Light Mode","Success")
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#111111';
      showAlert("Switched to Dark Mode","Success")
    }
  }
  return (
    <>
      <Navbar title="Text Converter" search="Search Here" mode={mode} changeMode={changeMode}/>
      <Alert alert={alert}/>
      <div className="container my-5">
        <TextForm heading="Enter Your Text" showAlert={showAlert} mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
