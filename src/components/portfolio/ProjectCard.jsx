import React from 'react';
import { Col } from 'react-bootstrap';

const ProjectCard = ({ title, description, imgUrl, websiteUrl, buttonOne, buttonOneUrl, buttonTwo, buttonTwoUrl }) => {
  return (
    <Col sm={6} md={4}>
      <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            {buttonOne && (
              <a href={buttonOneUrl} target="_blank" rel="noopener noreferrer">
                <button>{buttonOne}</button>
              </a>
            )}
            {buttonTwo && (
              <a href={buttonTwoUrl} target="_blank" rel="noopener noreferrer">
                <button>{buttonTwo}</button>
              </a>
            )}
          </div>
        </div>
      </a>
    </Col>
  );
};

export default ProjectCard;
