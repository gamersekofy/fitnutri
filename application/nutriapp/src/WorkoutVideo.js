import React from 'react';
import ReactPlayer from 'react-player';
import './WorkoutVideo.css';
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
        <div className="workout-video-container">
            <h2>Workout Video</h2>
            <div className="video-player">
                <ReactPlayer 
                    url='https://www.youtube.com/watch?v=IT94xC35u6k&ab_channel=MadFit'
                    playing={false}
                    controls
                    width='100%'
                    height='100%'
                />

            </div>

            <p>Exercises</p>

 
            <div className="directions">
                {/*<</div>textarea placeholder="desc"></textarea>*/}



                <div className="names-images">
      <div className="name-image">
        <img
          src="https://images.unsplash.com/photo-1608330270081-dae407dbbc50?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Placeholder 1"
        />
        <div>
          <p>Pushups</p>
          <p>3x Reps</p>
        </div>
      </div>
      <div className="name-image">
        <img
          src="https://images.unsplash.com/photo-1518310952931-b1de897abd40?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Placeholder 2"
        />
        <div>
          <p>Chinups</p>
          <p>10x Reps</p>
        </div>
      </div>
    </div>



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