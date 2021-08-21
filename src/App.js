import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

const showAlert = (message ,type)=>{
  setAlert({
    msg: message,
    type: type 
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode ('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been Enabled","Success!");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils Is Amazing";
      // }, 2000);
      //  setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // },1500);


    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white'; 
      document.body.style.color = 'black'
      showAlert("Light Mode has been Enabled","Success!");
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
  <>
{/* <Router> */}


 <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>

 {/* <Alert alert="Welcome To TextUtils ! Hope You Like it..."/> */}
 <Alert alert={alert} />

<div className="container my-3">
        
 {/* ---------------------------------------------------------------------------------------------------------- */}

        
        {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
         
          {/* <Route exact path="/"> */}
            <TextForm heading="Enter the text you want to analyze below ." showAlert={showAlert}/>
          {/* </Route> */}
        {/* </Switch> */}
       
  
 {/* --------------------------------------------------------------------------------------------------------- */}
</div>

{/* </Router> */}
</>
  );
}

export default App;
