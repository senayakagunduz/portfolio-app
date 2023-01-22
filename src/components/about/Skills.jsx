import React from "react";
import "./skills.css";
const frontendSkills = [
  {
    title: "JAVASCRIPT",

    percentage: "85%",
  },
  {
    title: "REACT.JS",

    percentage: "90%",
  },
  {
    title: "HTML",

    percentage: "100%",
  },
  {
    title: "CSS",

    percentage: "85%",
    
  },
  {
    title: "BOOTSTRAP",

    percentage: "90%",
   
  },
];
const backendSkills = [
  {
    title: "JAVA SPRING",

    percentage: "85%",
  },
  {
    title: "SQL SERVER",

    percentage: "85%",
  },
  {
    title: "POSTGRE SQL",

    percentage: "100%",
  },
];
const Skills = () => {
  return (
    <div className="skills_wrapper d-flex gap-5">
      <div className="frontend__skill w-50">
        {frontendSkills.map((item, index) => (
          <SkillItem
            key={index}
            title={item.title}
            percentage={item.percentage}
          />
        ))}
      </div>
      <div className="backend__skill w-50">
        {backendSkills.map((item, index) => (
          <SkillItem
            key={index}
            title={item.title}
            percentage={item.percentage}
          />
        ))}
      </div>
    </div>
  );
};
const SkillItem = ({ title, percentage }) => {
  return (
    <div className="skill__data mb-3">
      <div className="skill__title d-flex align-items-center justify-content-between">
        <h6>{title}</h6>
        <span>{percentage}</span>
      </div>
      <div className="skill__bar">
        <span
          className="skill__bar__percentage"
          style={{ width: `${percentage}` }}
        ></span>
      </div>
    </div>
  );
};

export default Skills;
