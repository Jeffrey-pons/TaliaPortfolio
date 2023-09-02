import React, { useEffect } from "react";
import "./works.css";

const Works = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elementsToFade = document.querySelectorAll(".works-bloc img");

      elementsToFade.forEach((img) => {
        const boundingRect = img.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const distanceFromBottom = windowHeight - boundingRect.bottom;
        const distanceFromTop = boundingRect.top;

        const opacity =
          1 -
          Math.max(0, Math.min(Math.abs(distanceFromTop), distanceFromBottom)) /
            windowHeight;

        img.style.opacity = opacity.toFixed(2);
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="works">
      <div className="works-bloc works-bloc-one">
        <img src="./IMG/10.webp" alt="" />
      </div>
      <div className="works-bloc works-bloc-two">
        <img src="./IMG/12.webp" alt="" />
        <img src="./IMG/13.webp" alt="" />
      </div>
      <div className="works-bloc works-bloc-three">
        <img src="./IMG/14.webp" alt="" />
      </div>
      <div className="works-bloc works-bloc-four">
        <img src="./IMG/15.webp" alt="" />
      </div>
      <div className="works-bloc works-bloc-five">
        <img src="./IMG/17.webp" alt="" />
      </div>
      <div className="works-bloc works-bloc-six">
        <img src="./IMG/19.webp" alt="" />
      </div>
      <div className="works-bloc works-bloc-seven">
        <img src="./IMG/20.webp" alt="" />
      </div>
    </div>
  );
};

export default Works;
