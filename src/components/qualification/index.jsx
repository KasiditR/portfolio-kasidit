import React, { useState } from "react";
import "./qualification.css";

const TabButton = ({ index, isActive, onClick, icon, label }) => (
  <div
    className={`qualification__button ${
      isActive ? "qualification__active " : ""
    }button--flex`}
    onClick={() => onClick(index)}
  >
    <i className={`uil ${icon} qualification__icon`}></i>
    {label}
  </div>
);

const QualificationContent = ({ isActive, content }) => (
  <div
    className={
      isActive
        ? "qualification__content qualification__content-active"
        : "qualification__content"
    }
  >
    {content.map((item, index) => (
      <div className="qualification__data" key={index}>
        {index % 2 === 1 && (
          <>
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </>
        )}

        <div>
          <h3 className="qualification__title">{item.title}</h3>
          <span className="qualification__subtitle">{item.subtitle}</span>
          <div className="qualification__calendar">
            <i className="uil uil-calendar-alt"></i>
            {" "+item.duration}
          </div>
        </div>

        {index % 2 === 0 && (
          <>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </>
        )}
      </div>
    ))}
  </div>
);

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const educationContent = [
    {
      title: "Bangkok University",
      subtitle: "Bachelor Degree Information Technology Game and Interactive media",
      duration: "2019 - 2022",
    },
    {
      title: "NTUN",
      subtitle: "Highschool",
      duration: "2013 - 2019",
    },
  ];
  const experienceContent = [
    {
      title: "Senior Unity Developer",
      subtitle: "Anyplay Digital co.,ltd",
      duration: "Sep 2024 - Dec 2024",
    },
    {
      title: "Unity Developer",
      subtitle: "Ichigames co. ltd",
      duration: "Nov 2023 - Aug 2024",
    },
    {
      title: "Unity Developer",
      subtitle: "Glory Forever Co.,LTD (Kawebook.com)",
      duration: "Feb 2023 - Oct 2023",
    },
    {
      title: "Unity Developer Intern",
      subtitle: "WolvEden Production",
      duration: "May 2022 - Aug 2022",
    },
  ];

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <TabButton
            index={0}
            isActive={toggleState === 0}
            onClick={toggleTab}
            icon="uil-graduation-cap"
            label="Education"
          />
          <TabButton
            index={1}
            isActive={toggleState === 1}
            onClick={toggleTab}
            icon="uil-briefcase-alt"
            label="Experience"
          />
        </div>

        <div className="qualification__sections">
          <QualificationContent
            isActive={toggleState === 0}
            content={educationContent}
          />
          <QualificationContent
            isActive={toggleState === 1}
            content={experienceContent}
          />
        </div>
      </div>
    </section>
  );
};

export default Qualification;
