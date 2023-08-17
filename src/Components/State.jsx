
import React ,{useState} from "react";


const State = (props) => {
  
 const handleUpperCase = () => {
    //  console.log("button was clicked");
     let upperText = text.toUpperCase();
     setText(upperText)
  };

  const handleLowerCase = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText)
  }

  const handleTextBold = () => {
    text.style.fontWeight = "bold";
    setText(text);
  }

  const handleClearText = () => {
    // let newText = text;
    setText('');
  }
  const speak = () => {
    let newText = new SpeechSynthesisUtterance();
    newText.text = text;
    window.speechSynthesis.speak(newText);
  }

  const handleCopyText = (props) => {
    var text = document.getElementById("textArea");
    text.select();
    navigator.clipboard.writeText(text.value);
  }



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
     <div>
      {/* <h1>("This is ", Text)</h1> */}
      <h2  style={{color: props.mode ==='dark'?'white': 'black'}}>{props.heading}</h2>


      <div className="mb-3 my-3">
        <textarea
          style={{backgroundColor: props.mode ==='dark'?'grey': 'white' , color: props.mode ==='dark'?'white': 'black'}}
          className="form-control"
          value={text}
          placeholder="Enter Text Here..."
          id="myBox"
          rows="8"
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1"  onClick={handleUpperCase}>Change to upper case</button>
     <button className="btn btn-primary mx-1 my-1" onClick={handleLowerCase}>Change to lower case</button>
     <button className="btn btn-primary mx-1 my-1" onClick={speak}>Voice Reader</button>
     <button className="btn btn-primary mx-1 my-1" onClick={handleTextBold}>Bold Text</button>

     <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
     <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
   
    </div>
    <div className="container my-3" style={{color: props.mode ==='dark'?'white': 'black'}}>
      <h2  >Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} charaters</p>
      <p>{0.008 * text.split(" ").length} Minutes Time to red</p>
      <h2 >Preview</h2>
      <p className="border p-3">{text.length>0 ? text: "Enter the Text in the Input field to Preview here"}</p>
    </div>
    </>
   
  );
};

export default State;
