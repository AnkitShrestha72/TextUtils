import { useState } from "react";
import Textform from "./Components/Textform";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
  
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
      document.title = "TextUtils - Light Mode";
      // Below time interval is for changing title constantly
      // setInterval(() => {
      //   document.title = 'TextUtils Is Amazing';
      // }, 3000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 2000);
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#272829";
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="body">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}></Route>

            <Route
             exact path="/"
              element={
                <Textform
                 mode={mode}
                  heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces"
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
