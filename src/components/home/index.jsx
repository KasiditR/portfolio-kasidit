import React, { useEffect } from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
  useEffect(() => {
    // Function to add the animation class after the component mounts
    const addAnimationClass = () => {
      const handElements = document.querySelectorAll('.home__hand');
      handElements.forEach(hand => {
        hand.classList.add('animate-on-load');
      });
    };

    addAnimationClass(); // Trigger animation class addition when component mounts
  }, []);

  useEffect(() => {
    const descriptionElement = document.querySelector('.home__description');
    if (descriptionElement) {
      const text = descriptionElement.textContent;
      descriptionElement.textContent = ''; // Clear the text content initially

      let i = 0;
      const typeEffect = () => {
        if (i < text.length) {
          descriptionElement.textContent += text.charAt(i);
          i++;
          setTimeout(typeEffect, 1); // Adjust the speed of typing here (in milliseconds)
        }
      };
      typeEffect();
    }
  }, []);

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
