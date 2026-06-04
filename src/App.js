import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';
import Alert from './components/Alert';

import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {

    if (mode === 'light') {

      setMode('dark');
      document.body.style.backgroundColor = '#20282e';

      showAlert(
        "Dark mode has been enabled",
        "success"
      );

    } else {

      setMode('light');
      document.body.style.backgroundColor = 'white';

      showAlert(
        "Light mode has been enabled",
        "success"
      );
    }
  };

  return (
    <Router>

      <Navbar
        title="TextUtils"
        aboutText="About Us"
        logo="/logo.png"
        logoAlt="TextUtils Logo"
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />

      <div className="container my-3">

        <Routes>

          <Route
            path="/"
            element={
              <TextForm
                heading="Enter the text to analyze below"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />

          <Route
            path="/about"
            element={<AboutUs mode={mode} />}
          />

        </Routes>

      </div>

    </Router>
  );
}

export default App;