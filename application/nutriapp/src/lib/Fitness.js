
import React from 'react';
import './Fitness.css';

function Fitness() {
  return (
    <div className="fitness-container">
      <header className="fitness-header">Fitness Article</header>
      <div className="fitness-content">
        <div className="fitness-image-placeholder"></div>
        <div className="fitness-buttons">
          <button className="fitness-btn">Recipes</button>
          <button className="fitness-btn">Workout</button>
        </div>
      </div>
     
    </div>
  );
}

export default Fitness;
