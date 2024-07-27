import React from "react";
import ReactPlayer from "react-player";
const AssessmentWorkout = () => {
  return (
    <>
      <div className="assessment-workout">
        <h2 className="main-assessment-title">Assessment Workout</h2>
        <div className="assessment-grid">
          <div className="item">
            <div className="icon">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=-hSma-BRzoo&ab_channel=OliverSjostrom"
                height={"250px"}
                width={"200px"}
              />
            </div>
            <div className="content">
              <h3 className="assessment-title">{"Flexibility & mobility"}</h3>
              <p className="text">
                Flexibility and mobility are crucial components of a
                well-rounded fitness program, contributing to overall physical
                well-being and injury prevention. Flexibility refers to the
                ability of your muscles to stretch and lengthen, while mobility
                involves the range of motion in your joints.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ygUO8eMuGnk&ab_channel=Roberta%27sGym"
                height={"250px"}
                width={"200px"}
              />
            </div>
            <div className="content">
              <h3 className="assessment-title">{"Cardiovascular"}</h3>
              <p className="text">
                Cardiovascular conditioning is essential for improving heart
                health and increasing stamina. This aspect of fitness involves
                engaging in activities that elevate your heart rate, such as
                running, cycling, or swimming.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=FSVAKyfNSLo&ab_channel=Roberta%27sGym"
                height={"250px"}
                width={"200px"}
              />
            </div>
            <div className="content">
              <h3 className="assessment-title">{"Strength"}</h3>
              <p className="text">
                Strength training focuses on building muscle mass and enhancing
                overall strength through resistance exercises. By using weights,
                resistance bands, or bodyweight exercises like squats and
                push-ups, you can target specific muscle groups and increase
                your muscle tone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssessmentWorkout;