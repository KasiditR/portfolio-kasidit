import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({
  title,
  description,
  doInProjects,
  imgUrl,
  websiteUrl,
  buttons,
}) => {
  return (
    <Col sm={6} md={4}>
      <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <h3 className="proj_what_i_do__title">What I DO :</h3>
            <ul className="proj_what_i_do__list">
              {doInProjects &&
                doInProjects.map((task, index) => (
                  <li className="proj_what_i_do__item" key={index}>
                    - {task}
                  </li>
                ))}
            </ul>
            <div className="proj_buttons">
              {buttons &&
                buttons.map((button, index) => (
                  <a
                    key={index}
                    href={button.buttonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>{button.buttonName}</button>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
};

export default ProjectCard;
