import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HealthInfo.css';

function HealthInfo() {
    const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/PersonalNutritionPlan');
  };

    return (
        <div className="health-info-container">
            <form className="health-form">
            <div><h1>Health Information</h1></div>
                    
                <div className='AHW'>
                    <input placeholder='Age'/>
               
                    <input placeholder='Height'/>
           
                    <input placeholder='Weight'/>
               </div>
                    <input placeholder='Goal Weight'/>

                    <input placeholder='A1C Reading'/>
                
                    <input placeholder='Types of Nutrition'/>
                
                    <input placeholder='Dietary Restrictions'/>
                
                    <input placeholder='Days Available'/>
              
                    <input placeholder='Types of Workout'/>
            
                <button type="submit" onClick={handleStartClick}>Generate Plan</button>
            </form>
        </div>
    );
}

export default HealthInfo;
