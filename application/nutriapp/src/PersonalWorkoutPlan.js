import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faDumbbell, faBrain, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
/*import axios from 'axios';*/
import './PersonalWorkoutPlan.css';


function PersonalWorkoutPlan() {
  const [showGoals, setShowGoals] = useState(false);
  const [showRoutine, setShowRoutine] = useState(false);
  const [showBenefits, setShowBenefits] = useState(false);
  const [goals, setGoals] = useState([]);
  const [routine, setRoutine] = useState({});
  const [benefits, setBenefits] = useState([]);

  const navigate = useNavigate();

  const navigateToRecipes = () => {
    navigate('/PersonalRecipes');
  };
  const navigateToartical = () => {
    navigate('/Article');
  };
  const navigateToWorkouts = () => {
    navigate('/PersonalWorkouts');
  };


/*
useEffect(() => {
  axios.get('/api/goals')
    .then(response => setGoals(response.data))
    .catch(error => console.error('Error fetching goals', error));
}, []);


useEffect(() => {
  axios.get('/api/routine')
    .then(response => setRoutine(response.data))
    .catch(error => console.error('Error fetching routine', error));
}, []);


useEffect(() => {
  axios.get('/api/benefits')
    .then(response => setBenefits(response.data))
    .catch(error => console.error('Error fetching benefits', error));
}, []);

*/

  return (
    <div className="workout-plan-container">
      <h1>Personal Workout Plan</h1>
      <div>
        <h2 onClick={() => setShowGoals(!showGoals)}>
          <FontAwesomeIcon icon={faHeartbeat} className="icon" /> Goals
        </h2>
        {showGoals && (
          <ul>
            {/*{goals.map(goal => <li key={goal.id}>{goal.description}</li>)}*/}
            <li>Fat Loss: Make use of the body's stored fat as fuel.</li>
            <li>Maintain lean muscular mass through muscle maintenance.</li>
            <li>Enhanced Vitality: Boost vitality and mental acuity.</li>
          </ul>
        )}
      </div>

      <div>
        <h2 onClick={() => setShowRoutine(!showRoutine)}>
          <FontAwesomeIcon icon={faDumbbell} className="icon" /> Weekly Schedule & Exercise Routine
        </h2>
        {showRoutine && (
          <div>
            {/*<p>Frequency: {routine.frequency}</p>*/}
            <p>Frequency: 3 times a week (Monday, Tuesday, and Friday)</p>
            {/*<p>Duration: {routine.duration}</p>*/}
            <p>Duration: 30 minutes per session</p>
            <h3>Exercise Routine:</h3>
            <ul>
            {/*
            {routine.exercises && routine.exercises.map(exercise => (
                <li key={exercise.id}>{exercise.name}: {exercise.sets} sets {exercise.reps} reps</li>
              ))}
              */}  
             <li>Warm-Up: 5 minutes of light cardio walking</li>
              <li>Strength Training: 30 minutes</li>
              <li>Squats: 3 sets 12 reps</li>
              <li>Push-ups: 3 sets 12 reps</li>
              <li>Shoulder press: 3 sets 12 reps</li>
              <li>Bent-over-rows: 3 sets 12 reps</li>
              <li>Shoulder Press: 3 sets 12 reps</li>
            </ul>
          </div>
        )}
      </div>

      <div>
        <h2 onClick={() => setShowBenefits(!showBenefits)}>
          <FontAwesomeIcon icon={faBrain} className="icon" /> Benefits
        </h2>
        {showBenefits && (
          <ul>
            {/*{benefits.map(benefit => <li key={benefit.id}>{benefit.description}</li>)}*/}
            <li>Weight Loss: Quick fat loss as a result of the body going into ketosis.</li>
            <li>Appetite Control: Less hunger and yearnings for food.</li>
            <li>Better Mental Clarity: Focus and cognitive performance can be improved with stable blood sugar levels.</li>
            <li>Enhanced Energy: Maintaining a constant level of energy throughout the day.</li>
            <li>Enhanced insulin sensitivity, blood pressure, and cholesterol are health markers.</li>
          </ul>
        )}
      </div>
      <div className="plan-buttons">
        <button onClick={navigateToRecipes}>Personal Recipes </button>
        <button onClick={navigateToartical}>Article</button>
        <button onClick={navigateToWorkouts}>Personal Workout</button>
      </div>
    </div>
  );
}

export default PersonalWorkoutPlan;
