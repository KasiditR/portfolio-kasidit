import React from "react";
import "./scrollup.css";

const ScrollUp = () => {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener("scroll", function () {
    const scrollUpBtn = document.querySelector(".scrollup");
    if (window.scrollY >= 2000) {
      scrollUpBtn.classList.add("show-scroll");
    } else {
      scrollUpBtn.classList.remove("show-scroll");
    }
  });

  return (
    <button onClick={scrollUp} className="scrollup">
      <i className="bx bx-up-arrow-alt scrollup__icon"></i>
    </button>
  );
};

export default ScrollUp;
