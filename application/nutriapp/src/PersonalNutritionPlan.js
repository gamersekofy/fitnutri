import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PersonalNutritionPlan.css';
import './style.css';

function PersonalNutritionPlan() {
  const navigate = useNavigate();

  const navigateToRecipes = () => {
    navigate('/PersonalRecipes');
  };
  const navigateToNutritionPlan = () => {
    navigate('/Article');
  };
  const navigateToWorkouts = () => {
    navigate('/PersonalWorkoutPlan');
  };

  return (
    <div className="nutrition-plan-container">
      <h2>Personalized Nutrition Plan</h2>
      <div className="nutrition-plan-content">
        <div className="selection-item">
          <select>
            <option>Goals</option>
            <option>Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.</option>
          </select>
        </div>
        <div className="selection-item">
          <select>
            <option>Meal Structure</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        <div className="selection-item">
          <select>
            <option>Micros</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        <div className="selection-item">
          <select>
            <option>Vitamins</option>
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
        <button onClick={navigateToRecipes}>Recipes</button>
        <button onClick={navigateToWorkouts}>Workouts</button>
        <button onClick={navigateToNutritionPlan}>Article</button>
      </div>
    </div>
  );
}

export default PersonalNutritionPlan;