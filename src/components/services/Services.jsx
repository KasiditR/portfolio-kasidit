import React, { useState } from "react";
import "./services.css";

const ServiceItem = ({
  icon,
  title,
  description,
  services,
  isActive,
  onClick,
}) => {
  let iconName = icon + " services__icon";
  return (
    <div className="services__content">
      <div>
        <i className={iconName}></i>
        <h3 className="services__title">{title}</h3>
      </div>
      <span className="services__button" onClick={onClick}>
        View More <i className="uil uil-arrow-right services__button-icon"></i>
      </span>
      <div
        className={
          isActive ? "services__modal active-modal" : "services__modal"
        }
      >
        <div className="services__modal-content">
          <i
            onClick={onClick}
            className="uil uil-times services__modal-close"
          ></i>
          <h3 className="services__modal-title">{title}</h3>
          <p className="services__modal-description">{description}</p>

          <ul className="services__modal-services grid">
            {services.map((service, index) => (
              <li key={index} className="services__modal-service">
                <i className="uil uil-check-circle services"></i>
                <p className="services__modal-info">{service}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const serviceItems = [
    {
      icon: "uil uil-award",
      title: "Frontend Developer",
      description:
        "Service with more than 3 years of experience. Providing quality work to clients and companies.",
      services: [
        "I develop the user interface.",
        "Web page development.",
        "I create UX element interactions.",
      ],
    },
    {
      icon: "uil uil-award",
      title: "Backend Developer",
      description:
        "Service with more than 3 years of experience. Providing quality work to clients and companies.",
      services: [
        "I develop the user interface.",
        "Web page development.",
        "I create UX element interactions.",
      ],
    },
    // Add more service items as needed
  ];

  const toggleTab = (index) => {
    setToggleState(index === toggleState ? 0 : index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        {serviceItems.map((item, index) => (
          <ServiceItem
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            services={item.services}
            isActive={toggleState === index + 1}
            onClick={() => toggleTab(index + 1)}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
