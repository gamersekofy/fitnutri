import React, { useState } from 'react';

function HealthInfo() {
    // backend
    const [healthData, setHealthData] = useState({
        a1cReading: '',
        typesOfNutrition: '',
        dietaryRestrictions: '',
        daysAvailable: '',
        typesOfWorkout: '',
    });

    const handleChange = (e) => {
        setHealthData({
            ...healthData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted Health Data:', healthData);
        // backend
    };
    // backend
    return (
        <div style={{ padding: '20px', border:'1px solid' }}>
            <form onSubmit={handleSubmit} style={{ border:'1px solid', display: 'flex', alignItems:'center', justifyContent:'space-between', flexDirection:'column', height:'600px' }}>
                <h2>Health Information</h2>
                <label>
                   
                    <input placeholder=' age'
                        type="text"
                        name="age"
                        value={healthData.age}
                        onChange={handleChange}
                    />
                </label>
                <label>
                 
                    <input placeholder=' height'
                        type="text"
                        name="height"
                        value={healthData.height}
                        onChange={handleChange}
                    />
                </label>
                <label>
                  
                    <input placeholder=' wight'
                        type="text"
                        name="wight"
                        value={healthData.wight}
                        onChange={handleChange}
                    />
                </label>
                
                <label>
                   
                    <input placeholder='A1C Reading'
                        type="text"
                        name="a1cReading"
                        value={healthData.a1cReading}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    
                    <input placeholder=' Types of Nutrition'
                        type="text"
                        name="typesOfNutrition"
                        value={healthData.typesOfNutrition}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    
                    <input placeholder='Dietary Restrictions'
                        type="text"
                        name="dietaryRestrictions"
                        value={healthData.dietaryRestrictions}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    
                    <input placeholder='Days Available'
                        type="text"
                        name="daysAvailable"
                        value={healthData.daysAvailable}
                        onChange={handleChange}
                    />
                </label>
                <label>
                   
                    <input placeholder=' Types of Workout'
                        type="text"
                        name="typesOfWorkout"
                        value={healthData.typesOfWorkout}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Generate Plan</button>
            </form>
        </div>
    );
}

export default HealthInfo;
