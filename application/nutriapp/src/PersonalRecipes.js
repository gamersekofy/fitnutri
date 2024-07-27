import React from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
/*import './PersonalRecipes.css';*/

const PersonalRecipes = () => {
  const navigate = useNavigate();

  const navigateToRecipeVideo = () => {
    navigate('/RecipeVideo');
  };

  return (
    <div className="recipes-container">
      <h2>Personal Recipes</h2>
      
      {/* Videos */}
      <section className="video-section">
        <div className="videos-wrapper">
          <div className="video-item" onClick={navigateToRecipeVideo}>
            <div className="video-thumbnail">
              <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width='100%' height='100%' />
            </div>
            <div className="video-details">
              <h3>Title</h3>
              <p>Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
            </div>
          </div>
          <div className="video-item" onClick={navigateToRecipeVideo}>
            <div className="video-thumbnail">
              <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width='100%' height='100%' />
            </div>
            <div className="video-details">
              <h3>Title</h3>
              <p>Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
            </div>
          </div>
          <div className="video-item" onClick={navigateToRecipeVideo}>
            <div className="video-thumbnail">
              <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width='100%' height='100%' />
            </div>
            <div className="video-details">
              <h3>Title</h3>
              <p>Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalRecipes;