import { useState } from "react";

export default function TextArea() {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };
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
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>
        Convert to LowerCase
      </button>
      <div className="container">
        <h2>
          {text.split(" ").length} Words and {text.length} Characters
        </h2>
        <p>{0.008 * text.split(" ").length} mins to read</p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}
