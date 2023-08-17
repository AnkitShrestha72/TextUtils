import { useState } from "react";
import State from "./Components/State";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }else{
      setMode('dark');
      document.body.style.backgroundColor = '#272829';
    }
  }

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="body">
        <div className="container my-5" >
          <State mode={mode} heading="Enter the text to analyze" />
        </div>
        <div className="container my-3">
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
