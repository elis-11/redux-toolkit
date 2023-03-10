import React from "react";

export const InputField = ({ title, handleInput, handleSubmit }) => {
  return (
    <label className="todort">
      <input value={title} onChange={(e) => handleInput(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
    </label>
  );
};
