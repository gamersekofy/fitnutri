import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FitnessAssessment.css';

const FitnessAssessment = () => {

    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/AssesmentWorkout');
    };

    return (
        <div className="fitness-assessment">
            <h1>Fitness Assessment Q's</h1>
            <form>
                <div className="grid-container">
                    <div className="section">
                        <h2>General Health</h2>
                        <label>
                            How many days per week do you engage in physical activity?
                            <textarea name="daysPhysicalActivity"></textarea>
                        </label>
                        <label>
                            What is the average duration of your physical activity sessions?
                            <textarea name="durationPhysicalActivity"></textarea>
                        </label>
                        <label>
                            Do you have any chronic health conditions that affect your physical activity (e.g., asthma, diabetes, heart conditions)?
                            <textarea name="chronicConditions"></textarea>
                        </label>
                    </div>
                    <div className="section">
                        <h2>Cardiovascular Fitness</h2>
                        <label>
                            How quickly do you feel out of breath during physical activity?
                            <textarea name="breathlessness"></textarea>
                        </label>
                        <label>
                            Can you briskly walk or jog a mile, and if so, how do you feel afterwards?
                            <textarea name="walkOrJog"></textarea>
                        </label>
                        <label>
                            How does your body respond to climbing several flights of stairs?
                            <textarea name="stairsResponse"></textarea>
                        </label>
                    </div>
                    <div className="section">
                        <h2>Strength</h2>
                        <label>
                            How many push-ups can you do in one go?
                            <textarea name="pushupsCount"></textarea>
                        </label>
                        <label>
                            How many sit-ups can you perform in one minute?
                            <textarea name="situpsCount"></textarea>
                        </label>
                        <label>
                            Are you able to carry groceries or heavy objects comfortably?
                            <textarea name="carryHeavyObjects"></textarea>
                        </label>
                    </div>
                </div>
                <button type="button" onClick={handleStartClick}>Assess Workout</button>
            </form>
        </div>
    );
};

export default FitnessAssessment;