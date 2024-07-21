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
  // const frontendSkills = [
  //   { name: "HTML", level: "Advanced" },
  //   { name: "CSS", level: "Advanced" },
  //   { name: "JS", level: "Advanced" },
  //   { name: "React", level: "Advanced" },
  // ];
  const unitySkills = [
    { name: "Git", level: "Advanced" },
    { name: "C#", level: "Advanced" },
    { name: "Google Authentication", level: "Advanced" },
    { name: "Apple Authentication", level: "Advanced" },
    { name: "In App Purchase", level: "Advanced" },
    { name: "Release Google Play Store", level: "Advanced" },
    { name: "Release App Store", level: "Advanced" },
    { name: "Release Steam", level: "Advanced" },
    { name: "Unity Ads", level: "Advanced" },
    { name: "Localization (Unity)", level: "Advanced" },
    { name: "API (Unity)", level: "Advanced" },
    { name: "Web Socket (Unity)", level: "Basic" },
    { name: "URP Shader Graph", level: "Basic" },
    { name: "Particle Effect", level: "Basic" },
  ];

  // const backendSkills = [
  //   { name: "Node.js", level: "Basic" },
  //   { name: "Go Lang", level: "Basic" },
  //   { name: "API (CRUD)", level: "Basic" },
  // ];

  return (
    <section className="skill section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <SkillSection title="Unity Skill" skills={unitySkills} />
        {/* <SkillSection title="Frontend Developer" skills={frontendSkills} /> */}
        {/* <SkillSection title="Backend Skill" skills={backendSkills} /> */}
      </div>
    </section>
  );
};

export default Skills;
