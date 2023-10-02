import React, { useState } from "react";

export default function TextForm(props) {
  const[text,setText]=useState("")
  const handleOnchange=(e)=>{
    // console.log("Changed the text");
    setText(e.target.value);
  }
  const handleUppercase=()=>{
    // console.log("Uppercase button is clicked")
    setText(text.toUpperCase())
  }
  const handleLowercase=()=>{
    setText(text.toLowerCase())
  }
  const handleCleartext=()=>{
    setText("");
  }
  const handleCopy=()=>{
    var text=document.getElementById("mytext");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handelRemoveSpaces=()=>{
    var newText=text.replace(/\s+/g, ' ').trim()
    setText(newText);
  }
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" placeholder={"Enter Your text Here"} value={text} onChange={handleOnchange} id="mytext" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUppercase}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowercase}>Convert to Lowercase</button>
      <button className="btn btn-primary" onClick={handleCleartext}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary" onClick={handelRemoveSpaces}>Remove Spaces</button>

    </div>
    <div className="container my-4">
        <h1>Your text summary</h1>
        <p>Number of Words : <b>{text.split(" ").length}</b></p>
        <p>Number of Characters : <b>{text.length}</b></p>
        <p>Time taken to Read : <b>{0.008*text.split(" ").length}</b> min</p>
        <h3>Preveiw</h3>
        <p>{text}</p>
    </div>
    </>
  );
}
