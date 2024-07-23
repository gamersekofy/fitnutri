import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import SignIn from './SignIn';
import SignUp from './SignUp';
import About from './About';
import HealthInfo from './HealthInfo';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/About" element={<About />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/HealthInfo" element={<HealthInfo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
