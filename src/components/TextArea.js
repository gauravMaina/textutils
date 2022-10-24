import {useState} from "react";

export default function TextArea() {
    const[text,setText]= useState('');
const handleOnChange = (event)=>{
setText(event.target.value);
}
const handleOnClick = ()=>{
    const newText = text.toUpperCase();
    setText(newText);
}
  return (
    <div className="container">
      <div className="mb-3">
        <h1>Enter the Text below to analysed</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={text}
          onChange={handleOnChange}
        />
      </div>
      <button className="btn btn-primary" onClick={handleOnClick}>Convert to UpperCase</button>
    </div>
  );
}
