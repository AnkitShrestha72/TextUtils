import { useState } from "react";
import State from "./Components/State";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled" , "success");
    }else{
      setMode('dark');
      document.body.style.backgroundColor = '#272829';
      showAlert("Dark Mode has been Enabled" , "success");
    }
  }

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="body">
        <div className="container my-5" >
          <State mode={mode} heading="Enter the text to analyze" showAlert={showAlert} />
        </div>
        <div className="container my-3">
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
