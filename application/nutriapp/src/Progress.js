import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Progress.css';

function Progress() {
    const navigate = useNavigate();
    const navigateToHealthInfo = () => {
        navigate('/HealthInfo');
      };


    return (
        <div>
            <div className='FP-NP'> 
                <div className='FP'>
                    <h2>Fitness Progress</h2>
                        <div className='FP-lable-input'>
                        <div className='FP-values'>
                            <label># of workout</label>
                            <input type="number" placeholder="Enter workout count"/>
                        </div>
                        <div className='FP-values'>
                            <label># of Minutes</label>
                            <input type="number" placeholder="Enter minutes"/>
                        </div>
                        <div className='FP-values'> 
                            <label># of Days</label>
                            <input type="number" placeholder="Enter days"/>
                        </div>
                        <div className='FP-values'>
                            <label>Weight Goal</label>
                            <input type="number" placeholder="Set weight goal"/>
                        </div>
                    </div>
                    <div className='Weight-Goal-Graph'>
                        
                        <div className='Weight-Graph'>
                            Weight Graph
                            <img src="charts.png" alt="Weight chart" className="detail-img" />
                        </div>
                    </div>
                    <div>Achievements Here</div>
                </div>
                <div className='NP'>
                    <h2>Nutrition Progress</h2>
                    <div className='NP-lable-input'>
                    <div className='NP-values1'>
                    <div><h5>Food Intake Tracker</h5></div>
                        <label>Breakfast (Cal)</label>
                        <input type="number" placeholder="Calories"/>
                        <label>Lunch (Cal)</label>
                        <input type="number" placeholder="Calories"/>
                        <label>Dinner (Cal)</label>
                        <input type="number" placeholder="Calories"/>
                    </div>
                    </div>
                    <div className='NP-values2'>
                    <div><h5>Micro/Vitamin</h5></div>
                        <label>Carbs (g)</label>
                        <input type="number" placeholder="Grams"/>
                        <label>Fat (g)</label>
                        <input type="number" placeholder="Grams"/>
                        <label>Protein (g)</label>
                        <input type="number" placeholder="Grams"/>
                    
                    </div>
                    <div className='Nutrition-Graph'>
                        Nutrition Graph Here
                        <img src="charts.png" alt="Nutrition chart" className="detail-img" />
                    </div>
                    
                
            </div>
            </div>
                <div className='FN-button'>
                <button type="submit" onClick={navigateToHealthInfo}>Edit</button>
                <button type="submit">Print</button>
                <button type="submit">Share</button>
                </div>
        </div>
    );
}

export default Progress;
