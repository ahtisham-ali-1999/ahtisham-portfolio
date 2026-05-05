// src/components/SkillProgressBar.jsx
import React from "react";

const SkillProgressBar = ({ skill, level }) => {
  return (
    <div className="mb-4">
      <h6 className="mb-1">{skill}</h6>
      <div className="progress" style={{ height: "8px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${level}%` }}
          aria-valuenow={level}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default SkillProgressBar;
