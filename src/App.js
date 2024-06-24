
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './component/Login';
import Signup from './component/Signup';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Personal from './component/Personal';
import Home from './component/Home'
import Certification from './component/Certification';
import Education from './component/Education';

const App = () => {

  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
        setLoggedInUser(user);
    }
}, []);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };
  
  const handleSignup = (user) => {
    setLoggedInUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
  };

  return (
    <Router>
      <div className="App">
      {!loggedInUser && (<div>
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
      </Routes>
      </div>
      )}
      {loggedInUser && (
                    <>
                        <Header onLogout={handleLogout} />
                        <div className="main-container">
                            <Sidebar />
                            <div className="content">
                                <Routes>
                                    <Route path="/" element={<Navigate to="/home" />} />
                                    <Route path="/home" element={<Home />} />
                                    <Route path="/personal" element={<Personal />} />
                                    <Route path="/certification" element={<Certification />} />
                                    <Route path="/education" element={<Education />} />
                                </Routes>
                            </div>
                        </div>
                    </>
                )}
    </div>
    </Router>
    
  );
}

export default App;
