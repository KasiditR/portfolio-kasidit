import React from "react";
import "./skills.css";

const Skill = ({ name, level }) => {
  return (
    <div className="skills__data">
      <i className="bx bx-badge-check"></i>
      <div>
        <h3 className="skills__name">{name}</h3>
        <span className="skills__level">{level}</span>
      </div>
    </div>
  );
};

const SkillSection = ({ title, skills }) => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">{title}</h3>
      <div className="skills__box">
        <div className="skills__group">
          {skills.map((skill, index) => (
            <Skill key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const frontendSkills = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JS", level: "Advanced" },
    { name: "React", level: "Advanced" },
  ];
  const unitySkills = [
    { name: "Git", level: "Advanced" },
    { name: "C#", level: "Advanced" },
    { name: "Localization", level: "Advanced" },
    { name: "In App Purchase", level: "Advanced" },
    { name: "Unity Ads", level: "Advanced" },
    { name: "Deploy Android", level: "Advanced" },
    { name: "Deploy iOS", level: "Advanced" },
    { name: "URP", level: "Basic" },
    { name: "HDRP", level: "Basic" },
    { name: "Particle Effect", level: "Intermediate" },
  ];

  const backendSkills = [
    { name: "Node.js", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "Go Lang", level: "Intermediate" },
    { name: "Database Management", level: "Intermediate" },
    { name: "API", level: "Basic" },
    { name: "AWS", level: "Basic" },
    { name: "FireBase", level: "Basic" },
  ];

  return (
    <section className="skill section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <SkillSection title="Unity Developer" skills={unitySkills} />
        <SkillSection title="Frontend Developer" skills={frontendSkills} />
        <SkillSection title="Backend Developer" skills={backendSkills} />
      </div>
    </section>
  );
};

export default Skills;
