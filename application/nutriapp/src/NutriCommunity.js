import React, { useState } from "react";

const NutriCommunity = () => {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);

  const handleTextChange = (e) => setText(e.target.value);
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Text:", text);
    console.log("File:", file);
  };

  return (
    <>
      <h2 className="title">FitNutri's Community</h2>
      <button className="Nutrition-button">Nutrition Advice</button>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="textField">User:</label>
            <textarea
              type="text"
              id="textField"
              className="nutri-text-field"
              value={text}
              onChange={handleTextChange}
              placeholder="Enter some text..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="fileInput">Attachment:</label>
            <input
              type="file"
              id="fileInput"
              className="nutri-field"
              onChange={handleFileChange}
            />
          </div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default NutriCommunity;