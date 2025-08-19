import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// ScrollToTop ensures top scroll on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => setAlert(null), 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        homeText="Home"
        aboutText="About"
      />
      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route path="/Home/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          <Route path="/Home/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
