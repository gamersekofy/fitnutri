import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
/*import './FitnessAssessment.css';*/

const FitnessAssessment = () => {

    const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/AssesmentWorkout');
  };
    
    return (
        <div className="fitness-assessment">
            <h1>Fitness Assessment Questions</h1>
            <form >
                <div className="section">
                    <h2>General Health</h2>
                    <label>
                        How many days per week do you engage in physical activity?
                        <input type="text" name="daysPhysicalActivity" />
                    </label>
                    <label>
                        What is the average duration of your physical activity sessions?
                        <input type="text" name="durationPhysicalActivity"  />
                    </label>
                    <label>
                        Do you have any chronic health conditions that affect your physical activity (e.g., asthma, diabetes, heart conditions)?
                        <input type="text" name="chronicConditions"  />
                    </label>
                </div>

                <div className="section">
                    <h2>Cardiovascular Health</h2>
                    <label>
                        How quickly do you feel out of breath during physical activity?
                        <input type="text" name="breathlessness"  />
                    </label>
                    <label>
                        Can you briskly walk or jog a mile, and if so, how do you feel afterwards?
                        <input type="text" name="walkOrJog"  />
                    </label>
                    <label>
                        How does your body respond to climbing several flights of stairs?
                        <input type="text" name="stairsResponse"  />
                    </label>
                </div>

                <div className="section">
                    <h2>Strength</h2>
                    <label>
                        How many push-ups can you do in one go?
                        <input type="text" name="pushupsCount"  />
                    </label>
                    <label>
                        How many sit-ups can you perform in one minute?
                        <input type="text" name="situpsCount"  />
                    </label>
                    <label>
                        Are you able to carry groceries or heavy objects comfortably?
                        <input type="text" name="carryHeavyObjects"  />
                    </label>
                </div>

                <button type="submit" onClick={handleStartClick}>Assess Workout</button>
            </form>
        </div>
    );
};

export default FitnessAssessment;
