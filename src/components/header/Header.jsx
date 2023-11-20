import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="mdi-alpha-k-box-outline"
            width="32"
            height="32"
            viewBox="0 0 24 18"
          >
            <path d="M9,7H11V10.33L13,7H15L12,12L15,17H13L11,13.67V17H9V7M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z" />
          </svg>
          asidit
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link active-link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link active-link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link active-link">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#qualification" className="nav__link active-link">
                <i className="uil-graduation-cap nav__icon"></i> Qualification
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link active-link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};
export default Header;
