import React from "react";
import ProjectCard from "./ProjectCard";
import { Row } from "react-bootstrap";
import project1 from "../../assets/work1.png";
import project2 from "../../assets/work2.png";
import project3 from "../../assets/work3.png";
import project4 from "../../assets/work4.png";
import "./portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      title: "SIA",
      description: "SIA is arena game you need a survive for 1st in leaderboards. (Moblie Game)",
      imgUrl: project1,
      websiteUrl: "https://janjao937.itch.io/sia",
    },
    {
      title: "Quartz Core",
      description: "​Quartz Core players will play the role of a white blood cell out to fight monsters. (PC Game)",
      imgUrl: project2,
      websiteUrl: "https://kasiditr.itch.io/quarzt-core",
    },
    {
      title: "Innovation",
      description: "​Innovation player need to find all the key value of JD Central to pass the level. (Web Game)",
      imgUrl: project3,
      websiteUrl: "https://innovation01-c8042.web.app/",
    },
    {
      title: "Glory of Ragnarok",
      description: "​Innovation player need to find all the key value of JD Central to pass the level. (Web Game)",
      imgUrl: project4,
      websiteUrl: "https://innovation01-c8042.web.app/",
      buttonOne: "Google",
      buttonOneUrl: "https://www.google.com",
      buttonTwo: "iOS",
      buttonTwoUrl: "https://www.apple.com",
    },
  ];
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My Portfolio project</span>
      <Row>
        {projects.map((project, index) => {
          return <ProjectCard key={index} {...project} />;
        })}
      </Row>
    </section>
  );
};

export default Portfolio;
