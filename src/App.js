import './App.css';
// import Alert from './components/Alert';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert]= useState(null);
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor= '#000C66'
      showAlert("Dark mode hae been enabled", "success")
      document.title= "Textutils - Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= 'white'
      showAlert("Light mode hae been enabled", "success")
      document.title= "Textutils - Light Mode"
    }
  }
  return (
   <>
    {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <div className="container">
      <Routes>
          <Route>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Route>
          </Routes>
        </div>
    </Router>
   </>
  );
}

export default App;
