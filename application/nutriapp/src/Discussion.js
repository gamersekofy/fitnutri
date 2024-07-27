import React from "react";
/*import "./Discussion.css";*/


const Discussion = () => {
  return (
    <div className="community-discussion">
      <h2 className="title">Community Discussion</h2>

      <div className="top-section">
        <div>
          <div className="left-section">
            <img
              src="https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"
              alt="User"
              className="user-image"
            />
            <span className="user-name">username</span>
          </div>
          
        </div>

        <div className="right-section">
          <textarea
            placeholder="Write your message here..."
            className="text-area"
          />
        </div>
      </div>

      <div className="top-section">
        <div>
          <div className="left-section">
            <img
              src="https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"
              alt="User"
              className="user-image"
            />
            <span className="user-name">username</span>
          </div>
          
        </div>

        <div className="right-section">
          <textarea
            placeholder="Write your message here..."
            className="text-area"
          />
        </div>
      </div>
    </div>
  );
};

export default Discussion;