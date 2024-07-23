import React from "react";
import { FaVideo } from "react-icons/fa";

const FitnessAssesmentQuestions = () => {
  const questions = [
    {
      heading: "General Heath",
      questions: [
        "1.	How many days per week do you engage in physical activity?",
        "2.	What is the average duration of your physical activity sessions?",
        "3.	Do you have any chronic health conditions that affect your physical activity (e.g., asthma, diabetes, heart conditions)?",
      ],
    },
    {
      heading: "Cardiovascular Health",
      questions: [
        "4.	How quickly do you feel out of breath during physical activity?",
        "5.	Can you briskly walk or jog a mile, and if so, how do you feel afterwards?",
        "6.	How does your body respond to climbing several flights of stairs?",
      ],
    },
    {
      heading: "Strength",
      questions: [
        "7.	How many push-ups can you do in one go?",
        "8.	How many sit-ups can you perform in one minute?",
        "9.	Are you able to carry groceries or heavy objects comfortably?",
      ],
    },
  ];

  const accessWorkout = () => {
    alert("Workout Done. Thank you!");
  };

  return (
    <>
      <h2 className="Fitness-assessment-title">Fitness Assessment Questions</h2>
      <div>
        <div className="questionnaire-container">
          {questions.map((section, sectionIndex) => (
            <div className="question-section" key={sectionIndex}>
              <h2>{section.heading}</h2>
              {section.questions.map((question, questionIndex) => (
                <div className="question-item" key={questionIndex}>
                  <label>
                    <div className="question-text">{question}</div>
                    <textarea
                      rows="4"
                      cols="50"
                      placeholder="Your answer here..."
                    ></textarea>
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>
        <button onClick={accessWorkout} className="access-button">
          Access Workout
        </button>
      </div>
    </>
  );
};

export default FitnessAssesmentQuestions;