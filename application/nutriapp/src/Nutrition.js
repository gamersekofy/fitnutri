// src/pages/Nutrition.js
import React from 'react';
import './Nutrition.css';

function Nutrition() {
  return (
    <div className="nutrition-container">
      <header className="nutrition-header">Nutrition Article</header>
      <div className="nutrition-content">
        <div className="nutrition-image-placeholder"></div>
        <div className="nutrition-buttons">
          <button className="nutrition-btn">Recipes</button>
          <button className="nutrition-btn">Workout</button>
        </div>
      </div>
      <footer className="nutrition-footer">
        <p>2024 FitNutri. All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Nutrition;
