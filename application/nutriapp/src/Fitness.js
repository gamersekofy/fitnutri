// src/pages/Fitness.js
import React from 'react';
import './Fitness.css';

function Fitness() {
  return (
    <div className="fitness-container">
      <header className="header">Fitness Article</header>
      <div className="content">
        <div className="image-placeholder"></div>
        <div className="buttons">
          <button className="btn">Recipes</button>
          <button className="btn">Workout</button>
        </div>
      </div>
      <footer className="footer">
        <p>2024 FitNutri. All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Fitness;
