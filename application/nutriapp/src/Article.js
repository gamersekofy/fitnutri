import React from 'react';
import ReactPlayer from 'react-player';
/*import './WorkoutVideo.css';*/
import { useNavigate } from 'react-router-dom';

const WorkoutVideo = () => {
    const navigate = useNavigate();

    const handleNavigateToRecipes = () => {
      navigate('/PersonalNutritionPlan');
    };

    const handleNavigateToWorkouts = () => {
        navigate('/PersonalWorkoutPlan');
      };

  return (
    <div className="recipe-video-container">
      <h2>Article</h2>
      
      
      
      <div className="directions">
        <textarea placeholder="desc"></textarea>
      </div>
      <div className="plan-buttons">
        <button onClick={handleNavigateToRecipes}>Recipes</button>
        
        <button onClick={handleNavigateToWorkouts}>Workout</button>
      </div>
    </div>
  );
}

export default WorkoutVideo;