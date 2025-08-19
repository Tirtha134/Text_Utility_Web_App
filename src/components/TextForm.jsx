import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('Enter Text here');

  const handleUpClick = () => {
    setText(text.toUpperCase());
     props.showAlert("Converted to uppercase!","success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
     props.showAlert("Converted to lowercase!","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  
  };

  const handleCopyClick = () => {
    const textArea = document.getElementById("myBox");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    document.getSelection().removeAllRanges();
       props.showAlert("Copied to Clipboard!","success");
  };

  const handleExtraSpace = () => {
    setText(text.split(/[ ]+/).join(" "));
     props.showAlert("Removed Extra Spaces!","success");
  };

  const handleClearClick = () => {
    setText('');
     props.showAlert("Text Cleared!","success");
  };

  return (
    <>
      <div className='Container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2 style={{  fontFamily: "Comic Sans MS, cursive, sans-serif" }}>{props.heading}</h2>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
              color: props.mode === 'dark' ? 'white' : '#042743'
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button disabled={text.length===0} className='btn btn-primary mx-3 my-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className='btn btn-warning mx-3 my-2' onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0}  className='btn btn-success mx-3 my-2' onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className='btn btn-danger mx-3 my-2' onClick={handleCopyClick}>Copy Text</button>
        <button disabled={text.length===0} className='btn btn-secondary mx-3 my-2' onClick={handleExtraSpace}>Remove Extra Spaces</button>
      </div>

      <hr />

      <div className='Container my-4' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h4 className="fw-bold fst-italic">Your Text Summary</h4>
        <p>{text.split(" ").filter((word) => word.length > 0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((word) => word.length > 0).length} Minutes read</p>
        <hr />
        <h5 className="fw-bold fst-italic">Preview</h5>
        <p>{text.length > 0 ? text : "⚠️ Enter something above to preview it"}</p>

      </div>
    </>
  );
}
