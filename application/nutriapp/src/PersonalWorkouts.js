import React from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import './PersonalWorkouts.css';

const PersonalWorkouts = () => {
  const navigate = useNavigate();
  
  const navigateToAssessmentExercises = () => {
    navigate('/FitnessAssesment');
  };

  const navigateToWorkoutVideo = () => {
    navigate('/WorkoutVideo');
  };

  return (
    <div className="pw-app-container">
      <div className="pw-workouts-wrapper">
        <div className="pw-workouts-container">
          <h2>Personal Workouts</h2>
          
          {/* Videos */}
          <section className="pw-video-section">
            <div className="pw-videos-wrapper">
              <div className="pw-video-item" onClick={navigateToWorkoutVideo}>
                <div className="pw-video-thumbnail">
                  <ReactPlayer url='https://www.youtube.com/watch?v=IT94xC35u6k' width='100%' height='100%' />
                </div>
                <div className="pw-video-details">
                  <h3>Beginner Workout - Your Path to Fitness</h3>
                  <p>Fitness is not about being better than someone else. It's about being better than you used to be.</p>
                </div>
              </div>
              <div className="pw-video-item" onClick={navigateToWorkoutVideo}>
                <div className="pw-video-thumbnail">
                  <ReactPlayer url='https://www.youtube.com/watch?v=IT94xC35u6k' width='100%' height='100%' />
                </div>
                <div className="pw-video-details">
                  <h3>Beginner Workout - Your Path to Fitness</h3>
                  <p>Fitness is not about being better than someone else. It's about being better than you used to be.</p>
                </div>
              </div>
              <div className="pw-video-item" onClick={navigateToWorkoutVideo}>
                <div className="pw-video-thumbnail">
                  <ReactPlayer url='https://www.youtube.com/watch?v=IT94xC35u6k' width='100%' height='100%' />
                </div>
                <div className="pw-video-details">
                  <h3>Beginner Workout - Your Path to Fitness</h3>
                  <p>Fitness is not about being better than someone else. It's about being better than you used to be.</p>
                </div>
            </div>
            </div>
          </section>
          <div className="pw-assessment-button-container">
            <button className="pw-assessment-button" onClick={navigateToAssessmentExercises}>Assess</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalWorkouts;