import React from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import './PersonalRecipes.css';

const PersonalRecipes = () => {
  const navigate = useNavigate();

  const navigateToRecipeVideo = () => {
    navigate('/RecipeVideo');
  };

  return (
    <div className="pr-app-container">
      <div className="pr-recipes-wrapper">
        <div className="pr-recipes-container">
          <h2>Personal Recipes</h2>
          
          {/* Videos */}
          <section className="pr-video-section">
            <div className="pr-videos-wrapper">
              <div className="pr-video-item" onClick={navigateToRecipeVideo}>
                <div className="pr-video-thumbnail">
                  <ReactPlayer url='https://www.https://www.youtube.com/watch?v=lrwMKkyU14k' width='100%' height='100%' />
                </div>
                <div className="pr-video-details">
                  <h3>5 Keto Recipes</h3>
                  <p>Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
                </div>
              </div>
              <div className="pr-video-item" onClick={navigateToRecipeVideo}>
                <div className="pr-video-thumbnail">
                  <ReactPlayer url='https://www.https://www.youtube.com/watch?v=lrwMKkyU14k' width='100%' height='100%' />
                </div>
                <div className="pr-video-details">
                  <h3>5 Keto Recipes</h3>
                  <p>Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
                </div>
              </div>
              <div className="pr-video-item" onClick={navigateToRecipeVideo}>
                <div className="pr-video-thumbnail">
                  <ReactPlayer url='https://www.https://www.youtube.com/watch?v=lrwMKkyU14k' width='100%' height='100%' />
                </div>
                <div className="pr-video-details">
                  <h3>5 Keto Recipes</h3>
                  <p>Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PersonalRecipes;