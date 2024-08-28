import React from "react";
import ProjectCard from "./ProjectCard";
import { Row } from "react-bootstrap";
import project1 from "../../assets/work6.jpg";
import project2 from "../../assets/work2.png";
import project3 from "../../assets/work3.png";
import project4 from "../../assets/work4.png";
import project5 from "../../assets/scrapdown.jpg";
import "./portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      title: "Duriano",
      description: "Duriano is an exhilarating 3D top-down action rogue-lite game that plunges you into the mythical world of Norse mythology. Take on the role of a heroic durian, wielding powerful weapons and divine abilities to vanquish the gods of Asgard.",
      imgUrl: project1,
      doInProjects : [
        "Release Steam",
        "Implement Core GamePlay",
        "Implement Enemy Logic",
        "Implement UI",
      ],
      websiteUrl: "https://store.steampowered.com/app/3048930/Duriano/?beta=0",
      buttonOne: "Steam Store page",
      buttonOneUrl: "https://store.steampowered.com/app/3048930/Duriano/?beta=0",
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
      buttonGitHubUrl: "https://github.com/KasiditR/QuartzCore",
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
      buttonOneUrl: "https://innovation01-c8042.web.app/",
      buttonGitHubUrl: "https://github.com/KasiditR/JD_Minigame_Innovation",
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
        "Release Game (Google Play Store, Apple Store)"
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
