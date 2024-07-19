import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/path-to-logo.png" alt="FitNutri" style={{ marginRight: '10px' }} />
        <nav>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
          <Link to="/HealthInfo" style={{ marginRight: '10px' }}>HealthInfo</Link>
          <Link to="/PersonalPlan">Personal Plan</Link>
        </nav>
        <Search />
      </div>
    </header>
  );
}

export default Header;
