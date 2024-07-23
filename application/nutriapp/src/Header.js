import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src="/path-to-logo.png" alt="FitNutri" className="logo" />
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/signIn" className="nav-link">signIn</Link>
          <Link to="/signUp" className="nav-link">signUp</Link>
          <Link to="/HealthInfo" className="nav-link">HealthInfo</Link>
          <Link to="/Progress" className="nav-link">Progress</Link>
        </nav>
        <div className='search'>
        <input placeholder="Search..."/>
      <button>Search</button>
        </div>
      
      </div>
      <div>
      
    </div>
    </header>
  );
}

export default Header;
