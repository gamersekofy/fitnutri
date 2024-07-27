import React from 'react';
import ReactPlayer from 'react-player';
/*import './WorkoutVideo.css';*/
import { useNavigate } from 'react-router-dom';

const WorkoutVideo = () => {
    const navigate = useNavigate();

    const handleNavigateToRecipes = () => {
      navigate('/PersonalRecipes');
    };

    const handleNavigateToWorkouts = () => {
        navigate('/PersonalWorkoutPlan');
      };

  return (
    <div className="recipe-video-container">
      <h2>WorkoutVideo</h2>
      <div className="video-player">
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing width='100%' height='100%' />
      </div>
      
      
      <div className="directions">
        <textarea placeholder="desc"></textarea>
      </div>
      <div className="plan-buttons">
        <button onClick={handleNavigateToRecipes}>Recipes</button>
        <button>Save Plan</button>
        <button onClick={handleNavigateToWorkouts}>Workout</button>
      </div>
    </div>
  );
}

export default WorkoutVideo;