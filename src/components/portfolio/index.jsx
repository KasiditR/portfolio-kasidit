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
        "Release Game (Steam)",
        "Implement Core Gameplay",
        "Implement Enemy Logic",
        "Implement Stat system",
        "Implement UI",
      ],
      websiteUrl: "https://store.steampowered.com/app/3048930/Duriano/?beta=0",
      buttons: 
      [
        {
          buttonName : "Steam Store page",
          buttonUrl : "https://store.steampowered.com/app/3048930/Duriano/?beta=0"
        },
      ],
    },
    {
      title: "Quartz Core",
      description: "QuartzCore offers a solo journey through procedurally generated maps. As you navigate challenging levels and battle foes, each death restarts your journey, albeit with retained upgrades. It's a third-person shooter featuring intense combat, item collection, and exploration, ensuring thrilling challenges await in every corner. (PC Game)",
      doInProjects : [
        "Implement Core Gameplay",
        "Implement UI",
        "Implement Save and load",
        "Implement Inventory System",
        "Implement Map Generate using Dungeon Architect Tools",
        "Shader Graph Effect URP",
      ],
      imgUrl: project2,
      websiteUrl: "https://kasiditr.itch.io/quarzt-core",
      buttons: 
      [
        {
          buttonName : "See More",
          buttonUrl : "https://kasiditr.itch.io/quarzt-core"
        },
        {
          buttonName : "GitHub",
          buttonUrl : "https://github.com/KasiditR/QuartzCore"
        },
      ],
    },
    {
      title: "Innovation",
      description: "​Innovation player need to find all the key value of JD Central to pass the level. (Web Game)",
      imgUrl: project3,
      doInProjects : [
        "Implement Core Gameplay",
        "Implement UI",
      ],
      websiteUrl: "https://innovation01-c8042.web.app/",
      buttons: 
      [
        {
          buttonName : "Play",
          buttonUrl : "https://innovation01-c8042.web.app/"
        },
        {
          buttonName : "GitHub",
          buttonUrl : "https://github.com/KasiditR/JD_Minigame_Innovation"
        },
      ],
    },
    {
      title: "Glory of Ragnarok",
      description: "In Glory Of Ragnarok, an idle game, witness the battle between the Spirit Sealers and demons threatening the five kingdoms. The powerful Star Stone faces destruction by the demon queen, Merida, endangering the world's balance and the kingdoms' survival.",
      imgUrl: project4,
      doInProjects : [
        "Implement UI using NGUI",
        "Implement In App Purchase",
      ],
      buttons: 
      [
        {
          buttonName : "Google",
          buttonUrl : "https://play.google.com/store/apps/details?id=com.glory.ragnarok"
        },
        {
          buttonName : "iOS",
          buttonUrl : "https://apps.apple.com/us/app/glory-of-ragnarok/id6449695630"
        },
      ],
    },
    {
      title: "Scrap Down",
      description: "Scrap Down is a party game in the style of a 2D shooter set in a space theme. It offers casual and fast-paced shooting mechanics that are easy to understand. It enhances the fun by allowing players to prank each other with in-game items. (Mobile)",
      imgUrl: project5,
      doInProjects : [
        "Implement In App Purchase",
        "Implement Authentication (Google, Apple)",
        "Implement Enemy Monster",
        "Implement Item Bully Gameplay",
        "Implement Shop UI and API",
        "Release Game (Google Play Store, Apple Store)"
      ],
      buttons: 
      [
        {
          buttonName : "Google",
          buttonUrl : "https://play.google.com/store/apps/details?id=com.ichigames.scrapdown1"
        },
        {
          buttonName : "iOS",
          buttonUrl : "https://apps.apple.com/th/app/scrapdown/id6476897183"
        },
      ],
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
