// src/components/SkillsProgressSection.jsx
import React from "react";
import SkillProgressBar from "./SkillProgressBar";

const skills = [
  { skill: "WordPress Development", level: 90 },
  { skill: "WooCommerce", level: 88 },
  { skill: "Elementor / Page Builders", level: 92 },
  { skill: "Custom Theme Development", level: 85 },
  { skill: "Plugin Customization", level: 82 },
  { skill: "Website Speed Optimization", level: 87 },
  { skill: "Responsive Design", level: 90 },
  { skill: "HTML/CSS", level: 95 },
  { skill: "JavaScript", level: 80 },
  { skill: "jQuery", level: 80 },
  { skill: "PHP", level: 80 },
  { skill: "Magento 2", level: 90 },
  { skill: "React", level: 60 },
];

const SkillsProgressSection = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Skill Proficiency</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          {skills.map((item, index) => (
            <SkillProgressBar
              key={index}
              skill={item.skill}
              level={item.level}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsProgressSection;