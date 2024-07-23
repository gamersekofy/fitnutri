import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import SignIn from './SignIn';
import SignUp from './SignUp';
import About from './About';
import HealthInfo from './HealthInfo';
import Progress from './Progress';
import Contact from './pages/Contact';
import Nutrition from './pages/Nutrition';
import Fitness from './pages/Fitness';



function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/HealthInfo" element={<HealthInfo />} />
          <Route path="/Progress" element={<Progress />} />
          <Route path="/contact" element={<Contact />} />  
          <Route path="/nutrition" element={<Nutrition />} /> 
          <Route path="/fitness" element={<Fitness />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
