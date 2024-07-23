import React from "react";
import { FaVideo } from "react-icons/fa";
const AssessmentWorkout = () => {
  return (
    <>
      <div className="assessment-workout">
        <h2 className="main-assessment-title">Assessment Workout</h2>
        <div className="assessment-grid">
          <div className="item">
            <div className="icon">
              <FaVideo size={200} />
            </div>
            <div className="content">
              <h3 className="assessment-title">{"Title"}</h3>
              <p className="text">
                {
                  "Body text for whatever you would like to say. "
                }
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <FaVideo size={200} />
            </div>
            <div className="content">
              <h3 className="assessment-title">{"Title"}</h3>
              <p className="text">
                {" "}
                {
                  "Body text for whatever you would like to say. "
                }
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <FaVideo size={200} />
            </div>
            <div className="content">
              <h3 className="assessment-title">{"Title"}</h3>
              <p className="text">
                {" "}
                {
                  "Body text for whatever you would like to say.. "
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssessmentWorkout;