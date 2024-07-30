import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './RecipeVideo.css';
import { useNavigate } from 'react-router-dom';

const RecipeVideo = () => {
  const navigate = useNavigate();
  const [plan, setPlan] = useState({
    preparationTime: '5 minutes',
    cookingTime: '15 minutes',
    totalTime: '20 minutes',
    servingTime: '',
    ingredients: `2 Avocados
2 Cherry Tomatoes
Red Chili Peppers
2 Eggs
Salt (to taste)
Cheddar cheese
Bacon
Cherry Tomatoes`,
    directions: `Set the oven's temperature to 375°F, or 190°C.
Cut the avocados in half and remove the pits to prepare the avocados. 
To provide space for the eggs, remove a little portion of the meat.
Spread out the halves of avocado on a baking sheet. In each half of an avocado, crack one egg. 
Add chopped red chili peppers and diced cherry tomatoes after sprinkling with salt.
Bake for 15 minutes, place the baking sheet in the oven.
Add Cheese and Bacon: Cook the bacon on a separate sheet or pan and sprinkle the shredded cheese over the avocados during the final five minutes of roasting.
After baking, ready to serve.`
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlan(prevPlan => ({
      ...prevPlan,
      [name]: value
    }));
  };

  const handleNavigateToRecipes = () => {
    navigate('/PersonalRecipes');
  };

  const handleNavigateToWorkouts = () => {
    navigate('/PersonalWorkoutPlan');
  };

  const handleSavePlan = () => {
    localStorage.setItem('recipePlan', JSON.stringify(plan));
    alert('Plan saved successfully!');
  }; 

  return (
    <div className="rv-recipe-video-container">
    <h2>Recipe Video</h2>
    <div className="rv-video-player">
      <ReactPlayer url='https://www.youtube.com/watch?v=lrwMKkyU14k' playing width='100%' height='100%' />
    </div>
    <div className="rv-time-info">
      <div className="rv-time-item">
        <label>Preparation Time</label>
        <input type="text" name="preparationTime" placeholder="Value" value={plan.preparationTime} onChange={handleInputChange} />
      </div>
      <div className="rv-time-item">
        <label>Cooking Time</label>
        <input type="text" name="cookingTime" placeholder="Value" value={plan.cookingTime} onChange={handleInputChange} />
      </div>
      <div className="rv-time-item">
        <label>Total Time</label>
        <input type="text" name="totalTime" placeholder="Value" value={plan.totalTime} onChange={handleInputChange} />
      </div>
     {/* <div className="rv-time-item">
        <label>Serving Time</label>
        <input type="text" name="servingTime" placeholder="Value" value={plan.servingTime} onChange={handleInputChange} />
      </div>
      */}
    </div>
    <div className="rv-ingredients">
      <textarea name="ingredients" placeholder="Enter your ingredients here." value={plan.ingredients} onChange={handleInputChange}></textarea>
    </div>
    <div className="rv-directions">
      <textarea name="directions" placeholder="Enter your directions here." value={plan.directions} onChange={handleInputChange}></textarea>
    </div>
    <div className="rv-plan-buttons">
      <button onClick={handleNavigateToRecipes}>Personal Recipes</button>
      <button onClick={handleSavePlan}>Save Plan</button>
      <button onClick={handleNavigateToWorkouts}>Personal Workout Plan</button>
    </div>
  </div>
  );
}

export default RecipeVideo;
