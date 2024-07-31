import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Article.css';

const Article = () => {
    const navigate = useNavigate();

    const handleNavigateToNutritionPlan = () => {
        navigate('/PersonalNutritionPlan');
    };

    const handleNavigateToArticle = () => {
        navigate('/PersonalWorkoutPlan');
    };

    return (
        <div className="article">
            <h2>Article</h2>
            <div className="content">
                <div className="image-placeholder">
                    <img src="https://via.placeholder.com/720x400" alt="Placeholder" />
                </div>
                
            </div>
            <div className="plan-buttons">
                <button onClick={handleNavigateToNutritionPlan}>Personal Nutrition Plan</button>
                <button onClick={handleNavigateToArticle}>Personal Work Paln</button>
            </div>
        </div>
    );
}

export default Article;