import React from 'react';
import ReactPlayer from 'react-player';
import './RecipeVideo.css';
import { useNavigate } from 'react-router-dom';

const RecipeVideo = () => {
    const navigate = useNavigate();

    const handleNavigateToRecipes = () => {
      navigate('/PersonalRecipes');
    };

    const handleNavigateToWorkouts = () => {
        navigate('/PersonalWorkoutPlan');
      };

  return (
    <div className="recipe-video-container">
      <h2>Recipe Video</h2>
      <div className="video-player">
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing width='100%' height='100%' />
      </div>
      <div className="time-info">
        <div className="time-item">
          <label>Preparation Time</label>
          <input type="text" placeholder="Value" />
        </div>
        <div className="time-item">
          <label>Cooking Time</label>
          <input type="text" placeholder="Value" />
        </div>
        <div className="time-item">
          <label>Total Time</label>
          <input type="text" placeholder="Value" />
        </div>
        <div className="time-item">
          <label>Serving Time</label>
          <input type="text" placeholder="Value" />
        </div>
      </div>
      <div className="ingredients">
        <textarea placeholder="Enter your ingredients here."></textarea>
      </div>
      <div className="directions">
        <textarea placeholder="Enter your directions here."></textarea>
      </div>
      <div className="plan-buttons">
        <button onClick={handleNavigateToRecipes}>Recipes</button>
        <button>Save Plan</button>
        <button onClick={handleNavigateToWorkouts}>Workout</button>
      </div>
    </div>
  );
}

export default RecipeVideo;