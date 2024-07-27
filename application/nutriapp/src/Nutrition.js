// src/pages/Nutrition.js
import React from 'react';
/*import './Nutrition.css';*/

function Nutrition() {
  return (
    <div className="nutrition-container">
      <header className="header">Nutrition Article</header>
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

export default Nutrition;
