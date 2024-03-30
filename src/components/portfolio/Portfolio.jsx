import React from "react";
import ProjectCard from "./ProjectCard";
import { Row } from "react-bootstrap";
import project1 from "../../assets/work1.png";
import project2 from "../../assets/work2.png";
import project3 from "../../assets/work3.png";
import project4 from "../../assets/work4.png";
import project5 from "../../assets/scrapdown.jpg";
import "./portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      title: "SIA",
      description: "SIA is arena game you need a survive for 1st in leaderboards. (Moblie Game)",
      imgUrl: project1,
      doInProjects : [
        "Implement Login using Firebase (Login Email/Password)",
        "Implement LeaderBoard",
      ],
      websiteUrl: "https://janjao937.itch.io/sia",
      buttonOne: "See More",
      buttonOneUrl: "https://janjao937.itch.io/sia",
    },
    {
      title: "Quartz Core",
      description: "QuartzCore offers a solo journey through procedurally generated maps. As you navigate challenging levels and battle foes, each death restarts your journey, albeit with retained upgrades. It's a third-person shooter featuring intense combat, item collection, and exploration, ensuring thrilling challenges await in every corner. (PC Game)",
      doInProjects : [
        "Implement Core GamePlay",
        "Implement UI",
        "Implement Inventory System",
        "Implement Map Generate using Dungeon Architect Tools",
        "Shader Dissolve Effect",
        "Shader Ripple Effect",
      ],
      imgUrl: project2,
      websiteUrl: "https://kasiditr.itch.io/quarzt-core",
      buttonOne: "See More",
      buttonOneUrl: "https://kasiditr.itch.io/quarzt-core",
    },
    {
      title: "Innovation",
      description: "​Innovation player need to find all the key value of JD Central to pass the level. (Web Game)",
      imgUrl: project3,
      doInProjects : [
        "Implement Core GamePlay",
        "Implement UI",
      ],
      websiteUrl: "https://innovation01-c8042.web.app/",
      buttonOne: "Play",
      buttonOneUrl: "https://kasiditr.itch.io/quarzt-core",
    },
    {
      title: "Glory of Ragnarok",
      description: "In Glory Of Ragnarok, an idle game, witness the battle between the Spirit Sealers and demons threatening the five kingdoms. The powerful Star Stone faces destruction by the demon queen, Merida, endangering the world's balance and the kingdoms' survival.",
      imgUrl: project4,
      doInProjects : [
        "Implement UI using NGUI",
        "Implement In App Purchase",
      ],
      buttonOne: "Google",
      buttonOneUrl: "https://play.google.com/store/apps/details?id=com.glory.ragnarok",
      buttonTwo: "iOS",
      buttonTwoUrl: "https://apps.apple.com/us/app/glory-of-ragnarok/id6449695630",
    },
    {
      title: "Scrap Down",
      description: "Scrap Down is a party game in the style of a 2D shooter set in a space theme. It offers casual and fast-paced shooting mechanics that are easy to understand. It enhances the fun by allowing players to prank each other with in-game items. (Mobile)",
      imgUrl: project5,
      doInProjects : [
        "Implement In App Purchase",
        "Implement Authentication (Google, Apple)",
        "Implement Enemy Monster",
        "Implement Item Bully GamePlay",
        "Implement Shop UI and API",
        "Launch Game (Google Play Store, Apple Store)"
      ],
      buttonOne: "Google",
      buttonOneUrl: "https://play.google.com/store/apps/details?id=com.ichigames.scrapdown1",
      buttonTwo: "iOS",
      buttonTwoUrl: "https://apps.apple.com/th/app/scrapdown/id6476897183",
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
