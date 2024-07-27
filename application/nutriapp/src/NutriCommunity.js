import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
/*import './NutriCommunity.css';*/

const NutriCommunity = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/Discussion');
  };

  return (
    <>
      <h2 className="title">FitNutri's Community</h2>
      <button className="Nutrition-button">Nutrition Advice</button>
      <div className="form-container">
        <form>
          <div className="form-group">
            <label htmlFor="textField">User:</label>
            <textarea
              type="text"
              id="textField"
              className="nutri-text-field"
              
              placeholder="Enter some text..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="fileInput">Attachment:</label>
            <input
              type="file"
             
              className="nutri-field"
            
            />
          </div>
          <button className="submit-button" type="submit" onClick={handleStartClick}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default NutriCommunity;