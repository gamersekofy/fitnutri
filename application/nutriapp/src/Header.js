import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';



function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const handleSearchClick = () => {
    alert("Search feature is not available at the moment.");
  };
  return (
    <header className="header">
      <img src="/Logo.png" alt="FitNutri" className="logo" />

      
      <nav className="nav-menu">
        <Link to="/" className="nav-link" onClick={() => setIsMobileOpen(false)}>Home</Link>
        <Link to="/About" className="nav-link" onClick={() => setIsMobileOpen(false)}>About</Link>
        <Link to="/Contact" className="nav-link" onClick={() => setIsMobileOpen(false)}>Contact</Link>
        <Link to="/SignIn" className="nav-link" onClick={() => setIsMobileOpen(false)}>SignIn</Link>
        <Link to="/SignUp" className="nav-link" onClick={() => setIsMobileOpen(false)}>SignUp</Link>
        <Link to="/Progress" className="nav-link" onClick={() => setIsMobileOpen(false)}>Progress</Link>
        <Link to="/NutriCommunity" className="nav-link" onClick={() => setIsMobileOpen(false)}>NutriCommunity</Link>
      </nav>

      
      <div className="hamburger1" onClick={() => setIsMobileOpen(!isMobileOpen)}>☰</div>
      
      
     <nav className="nav-menu1" style={{ display: isMobileOpen ? 'block' : 'none'}}>
        <Link to="/" className="nav-link1" onClick={() => setIsMobileOpen(false)}>Home</Link>
        <Link to="/About" className="nav-link1" onClick={() => setIsMobileOpen(false)}>About</Link>
        <Link to="/Contact" className="nav-link1" onClick={() => setIsMobileOpen(false)}>Contact</Link>
        <Link to="/SignIn" className="nav-link1" onClick={() => setIsMobileOpen(false)}>SignIn</Link>
        <Link to="/SignUp" className="nav-link1" onClick={() => setIsMobileOpen(false)}>SignUp</Link>
        <Link to="/Progress" className="nav-link1" onClick={() => setIsMobileOpen(false)}>Progress</Link>
        <Link to="/NutriCommunity" className="nav-link1" onClick={() => setIsMobileOpen(false)}>NutriCommunity</Link>
      </nav>
      
      <div className='search'>
        <input placeholder="Search..."/>
        <button onClick={handleSearchClick} className="search-button">Search</button>
      </div>
    </header>
  );
}

export default Header;
