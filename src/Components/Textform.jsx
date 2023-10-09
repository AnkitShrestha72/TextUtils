import React, { useState } from "react";

const Textform = (props) => {
  const handleUpperCase = () => {
    //  console.log("button was clicked");
    let upperText = text.toUpperCase();
    setText(upperText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLowerCase = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleClearText = () => {
    // let newText = text;
    setText("");
    props.showAlert("Text Cleared", "success");
  };
  const speak = () => {
    let newText = new SpeechSynthesisUtterance();
    newText.text = text;
    window.speechSynthesis.speak(newText);
    props.showAlert("Voice Command", "success");
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges(); // this will remove selected text
    props.showAlert("Text Copied to Clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/ [ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  // const [text, setText] = useState("Enter your text here");
  const [text, setText] = useState("");

  // text = "Enter your text" // wrong way to change the value
  //   setText("hi there");  // correct way to change the value

  return (
    <>
      <div className="container my-1">
        {/* <h1>("This is ", Text)</h1> */}
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h2>

        <div className="mb-3 my-3">
          <textarea
            
            className="form-control"
            value={text}
            placeholder="Enter Text Here..."
            id="textArea"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpperCase}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowerCase}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={speak}
        >
          Voice Reader
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearText}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopyText}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.trim().length} charaters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes Time to red
        </p>
        <div className="my-4">
          <h2>Preview</h2>
          <p className="border p-3">
            {text.length > 0
              ? text
              : "Nothing to Preview!"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Textform;
