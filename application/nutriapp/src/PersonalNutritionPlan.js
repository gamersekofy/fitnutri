import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
/*import axios from 'axios';*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faBrain, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import './PersonalNutritionPlan.css';

function PersonalNutritionPlan() {

  const navigate = useNavigate();

  const navigateToRecipes = () => {
    navigate('/PersonalRecipes');
  };
  const navigateToNutritionPlan = () => {
    navigate('/Article');
  };
  const navigateToWorkouts = () => {
    navigate('/PersonalWorkoutPlan');
  };

  const [showGoals, setShowGoals] = useState(false);
  const [showRoutine, setShowRoutine] = useState(false);
  const [showBenefits, setShowBenefits] = useState(false);
  const [goals, setGoals] = useState([]);
  const [routine, setRoutine] = useState({});
  const [benefits, setBenefits] = useState([]);
  const [error, setError] = useState(null);
/*
  useEffect(() => {
    axios.get('/api/goals')
      .then(response => setGoals(response.data))
      .catch(error => {
        setError(error.message);
        console.error('Error fetching goals', error);
      });
  }, []);

  useEffect(() => {
    axios.get('/api/routine')
      .then(response => setRoutine(response.data))
      .catch(error => {
        setError(error.message);
        console.error('Error fetching routine', error);
      });
  }, []);

  useEffect(() => {
    axios.get('/api/benefits')
      .then(response => setBenefits(response.data))
      .catch(error => {
        setError(error.message);
        console.error('Error fetching benefits', error);
      });
  }, []);
*/
  return (
    <div className="nutrition-plan-container">
      {error && <div className="error">Error: {error}</div>}
      <h2>Personalized Nutrition Plan</h2>
      <div>
        <h2 onClick={() => setShowGoals(!showGoals)}>
          <FontAwesomeIcon icon={faHeartbeat} className="icon" /> Goals
        </h2>
        {showGoals && (
          <ul>
            {/*{goals.map(goal => <li key={goal.id}>{goal.description}</li>)}*/}
            <li>Achieve and Maintain Ketosis: Maintain a metabolic state where the body burns fat for fuel instead of carbohydrates.</li>
            <li>Weight Management: Utilize the appetite-suppressing effect of ketosis to aid in weight loss or maintenance.</li>
            <li>Improved Mental Clarity and Energy: Leverage the consistent energy supply from ketones for better mental performance and stamina.</li>
            <li>Support Cardiovascular Health: Adjust fat intake strategically to support heart health.</li>
            <li>Reduce Blood Sugar and Insulin Levels: Lower carbohydrate intake to stabilize blood sugar and insulin levels.</li>
          </ul>
        )}
      </div>

      <div>
        <h2 onClick={() => setShowRoutine(!showRoutine)}>
          <FontAwesomeIcon icon={faDumbbell} className="icon" /> Weekly Nutrition Schedule
        </h2>
        {showRoutine && (
          <div>
            <p>Notes: This schedule provides a framework for meals across the week, emphasizing varied, balanced nutrition within the ketogenic guidelines.</p>
            <h3>Monday:</h3>
                    <ul>
                      <li>Breakfast: Avocado and egg salad with olive oil</li>
                      <li>Lunch: Grilled salmon with asparagus and butter sauce</li>
                      <li>Dinner: Zucchini noodles with pesto and pine nuts</li>
                      <li>Snacks: Macadamia nuts, celery sticks with cream cheese</li>
                      
                    </ul>
                    <h3>Tuesday:</h3>
                    <ul>
                      <li>Breakfast: Coconut yogurt with a handful of raspberries</li>
                      <li>Lunch: Cobb salad with hard-boiled eggs, bacon, blue cheese, and avocado</li>
                      <li>Dinner: Chicken thighs roasted with cauliflower and broccoli</li>
                      <li>Snacks: Cheese slices, olives</li>
                    </ul>
                    <h3>Wednesday:</h3>
                    <ul>
                      <li>Breakfast: Smoothie with spinach, avocado, cucumber, and protein powder</li>
                      <li>Lunch: Beef stir-fry with mixed green vegetables in coconut oil</li>
                      <li>Dinner: Pork chops with roasted Brussels sprouts</li>
                      <li>Snacks: Almonds, sugar-free dark chocolate</li>
                    </ul>
                    <h3>Thursday</h3>
                    <ul>
                      <li>Breakfast: Chia pudding made with unsweetened almond milk and a dash of cinnamon</li>
                      <li>Lunch: Tuna salad stuffed avocados</li>
                      <li>Dinner: Lamb curry with coconut cream and cauliflower rice</li>
                      <li>Snacks: Pork rinds, cucumber slices</li>
                    </ul>
                    <h3>Friday:</h3>
                    <ul>
                      <li>Breakfast: Bacon and mushroom omelette</li>
                      <li>Lunch: Shrimp and arugula salad with olive oil and lemon dressing</li>
                      <li>Dinner: Duck breast with roasted eggplant</li>
                      <li>Snacks: Sunflower seeds, keto-friendly protein bar</li>
                    </ul>
                    <h3>Saturday:</h3>
                    <ul>
                      <li>Breakfast: Keto pancakes with whipped cream and a few sliced strawberries</li>
                      <li>Lunch: Grilled chicken Caesar salad (no croutons)</li>
                      <li>Dinner: Grilled trout with a side of sautéed spinach</li>
                      <li>Snacks: Avocado slices, beef jerky</li>
                    </ul>
                    <h3>Sunday:</h3>
                    <ul>
                      <li>* Breakfast: Full-fat Greek yogurt with pecans</li>
                      <li>* Lunch: Leftover lamb curry and cauliflower rice</li>
                      <li>* Dinner: Ribeye steak with a side of creamy mushroom sauce and green beans</li>
                      <li>* Snacks: Hard-boiled eggs, slices of bell pepper</li>
                    </ul>
            {Object.entries(routine).map(([day, meals]) => (
              <div key={day}>
                <h4>{day}:</h4>
                <ul>
                  {/*{meals.map((meal, index) => <li key={index}>{meal}</li>)}*/}
                  
                </ul>
              </div>
            ))}
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
            <li>Weight Loss: Higher fat and protein intake tends to increase satiety, reducing overall calorie intake without feeling deprived.</li>
            <li>Stable Blood Sugar Levels: Minimizing carb intake can drastically reduce blood sugar spikes and improve insulin sensitivity, beneficial for those with type 2 diabetes or metabolic syndrome.</li>
            <li>Increased Mental Focus: Ketones provide a steady source of energy for the brain, which may help enhance focus and reduce brain fog.</li>
            <li>Improved Triglyceride and HDL Levels: A ketogenic diet can improve the lipid profile by lowering triglycerides and increasing HDL cholesterol levels.</li>
            <li>Lower Blood Pressure: Reducing carbs can lead to a notable reduction in blood pressure, reducing risks of common diseases such as heart disease and stroke.</li>
          </ul>
        )}
      </div>
      <div className="plan-buttons">
        <button onClick={navigateToRecipes}>Recipes</button>
        <button onClick={navigateToNutritionPlan}>Save Plan</button>
        <button onClick={navigateToWorkouts}>Workout</button>
      </div>
    </div>
  );
}

export default PersonalNutritionPlan;