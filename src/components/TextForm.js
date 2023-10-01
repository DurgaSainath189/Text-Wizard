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
  return (
    <div>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" placeholder={"Enter Your text Here"} value={text} onChange={handleOnchange} id="mytext" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUppercase}>Convert to Uppercase</button>
      {/* <button className="btn btn-primary">Convert to Lowercase</button> */}
    </div>
  );
}
