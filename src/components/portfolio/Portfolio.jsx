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
      description: "Idle game Glory Of Ragnarok, the war between the Spirit Sealers Association and the demons who are ready to destroy the 5 kingdoms.“Star Stone” is a magical power refined from the spirits of earth and heaven, but! Instead, it was destroyed by the demon queen named Merida. The power of the Star Stone reverted to destroying the world, and the five kingdoms were soon about to collapse.",
      imgUrl: project4,
      websiteUrl: "https://play.google.com/store/apps/details?id=com.glory.ragnarok",
      buttonOne: "Google",
      buttonOneUrl: "https://play.google.com/store/apps/details?id=com.glory.ragnarok",
      buttonTwo: "iOS",
      buttonTwoUrl: "https://apps.apple.com/us/app/glory-of-ragnarok/id6449695630",
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
