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
                  <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width='100%' height='100%' />
                </div>
                <div className="pw-video-details">
                  <h3>Title</h3>
                  <p>Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
                </div>
              </div>
              <div className="pw-video-item" onClick={navigateToWorkoutVideo}>
                <div className="pw-video-thumbnail">
                  <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width='100%' height='100%' />
                </div>
                <div className="pw-video-details">
                  <h3>Title</h3>
                  <p>Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
                </div>
              </div>
              <div className="pw-video-item" onClick={navigateToWorkoutVideo}>
                <div className="pw-video-thumbnail">
                  <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width='100%' height='100%' />
                </div>
                <div className="pw-video-details">
                  <h3>Title</h3>
                  <p>Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
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