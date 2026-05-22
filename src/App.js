import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert'
// import AboutUs from './components/AboutUs';




function App() {
   const [mode, setMode] = useState('light');
   const [alert, setalert] = useState(null);
   const showAlert = (message ,type )=>{
     setalert({
       msg : message,
       type : type
     })
     setTimeout(() => {
       setalert(null);
     }, 1500);
   }
    const toggleMode = () => {
      if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#2b3740';
        showAlert("Dark mode has been enabled","success");
       
      } else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled","success");
      }
    }
  return (
   
    <>
     <Navbar
       heading="TextUtils"
       title="TextUtils"
       aboutText="About Us"
       logo="/logo.png"
       logoAlt="Textutils logo"
       mode={mode}
       toggleMode={toggleMode}
     />
     <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below"  mode={mode} showAlert={showAlert}/>
        {/* <AboutUs /> */}
      </div>
    </>
  );
}

export default App;