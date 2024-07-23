import React from 'react';
import './PersonalWorkoutPlan.css';
import { useNavigate } from 'react-router-dom';

function PersonalWorkoutPlan() {
  const navigate = useNavigate();

  const navigateToRecipes = () => {
    navigate('/PersonalRecipes');
  };

  const navigateToWorkouts = () => {
    navigate('/PersonalWorkouts');
  };

  const navigateToArticle = () => {
    navigate('/Article');
  };

  return (
    <div className="workout-plan-container">
      <div className="workout-plan-content">
        <h2>Personalized Workout Plan</h2>
        <div className="workout-plan-selections">
          <div className="selection-item">
            <select>
              <option>Goals</option>
              <option>Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.</option>
            </select>
          </div>
          <div className="selection-item">
            <select>
              <option>Weekly Schedule</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
          <div className="selection-item">
            <select>
              <option>Benefits</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
          <div className="selection-item">
            <select>
              <option>Title</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
          <div className="selection-item">
            <select>
              <option>Title</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
        </div>
        <div className="navigation-buttons">
          <button onClick={navigateToWorkouts}>Workouts</button>
          <button onClick={navigateToRecipes}>Recipes</button>
          <button onClick={navigateToArticle}>Article</button>
        </div>
      </div>
    </div>
  );
}

export default PersonalWorkoutPlan;