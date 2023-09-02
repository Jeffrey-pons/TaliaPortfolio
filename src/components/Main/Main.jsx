import React, { useState, useEffect } from "react";
import "./main.css";

const scrollingImagesLeft = [
  "./IMG/1.webp",
  "../IMG/2.webp",
  "../IMG/3.webp",
  "../IMG/5.webp",
];

const scrollingImagesRight = [
  "../IMG/6.webp",
  "../IMG/7.webp",
  "../public/IMG/8.webp",
  "./public/IMG/9.webp",
  "./IMG/10.webp",
];

const Main = () => {
  const [displayedImageIndexLeft, setDisplayedImageIndexLeft] = useState(0);
  const [displayedImageIndexRight, setDisplayedImageIndexRight] = useState(0);
  const [autoScrollEnabledLeft, setAutoScrollEnabledLeft] = useState(true);
  const [autoScrollEnabledRight, setAutoScrollEnabledRight] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  const DELAY_LEFT = 3000;
  const DELAY_RIGHT = 4000;
  const ANIMATION_START_DELAY = 100;

  const handleImageClick = (side) => {
    if (side === "left") {
      setDisplayedImageIndexLeft(
        (prevIndex) => (prevIndex + 1) % scrollingImagesLeft.length
      );
      setAutoScrollEnabledLeft(false);
      setTimeout(() => setAutoScrollEnabledLeft(true), DELAY_LEFT);
    } else if (side === "right") {
      setDisplayedImageIndexRight(
        (prevIndex) => (prevIndex + 1) % scrollingImagesRight.length
      );
      setAutoScrollEnabledRight(false);
      setTimeout(() => setAutoScrollEnabledRight(true), DELAY_RIGHT);
    }
  };

  useEffect(() => {
    let intervalLeft;
    if (autoScrollEnabledLeft) {
      intervalLeft = setInterval(() => {
        setDisplayedImageIndexLeft(
          (prevIndex) => (prevIndex + 1) % scrollingImagesLeft.length
        );
      }, DELAY_LEFT);
    }

    let intervalRight;
    if (autoScrollEnabledRight) {
      intervalRight = setInterval(() => {
        setDisplayedImageIndexRight(
          (prevIndex) => (prevIndex + 1) % scrollingImagesRight.length
        );
      }, DELAY_RIGHT);
    }

    // Add a small delay before setting the animationComplete to true to allow the animations to start on initial render
    setTimeout(() => {
      setAnimationComplete(true);
    }, ANIMATION_START_DELAY);

    return () => {
      clearInterval(intervalLeft);
      clearInterval(intervalRight);
    };
  }, [autoScrollEnabledLeft, autoScrollEnabledRight]);

  const renderImages = () => {
    return (
      <div
        className={`img-scroll ${animationComplete ? "animate-opacity" : ""}`}
      >
        <img
          src={scrollingImagesLeft[displayedImageIndexLeft]}
          alt=""
          onClick={() => handleImageClick("left")}
          style={{ cursor: "pointer" }}
        />
        <img
          src={scrollingImagesRight[displayedImageIndexRight]}
          alt=""
          onClick={() => handleImageClick("right")}
          style={{ cursor: "pointer" }}
        />
      </div>
    );
  };

  const renderIntroduction = () => {
    return (
      <div className={`intro ${animationComplete ? "animate-opacity" : ""}`}>
        <p>PHOTOGRAPHER & VISUAL ARTIST</p>
        <p>FROM PARIS, FRANCE.</p>
        <p>NOW BASED IN LONDON</p>
      </div>
    );
  };

  return (
    <div className={`main ${animationComplete ? "animation-complete" : ""}`}>
      <h1 className={`${animationComplete ? "animate-opacity" : ""}`}>
        TALIA ZANGER
      </h1>
      <span>タリア・ザンガー</span>
      {renderIntroduction()}
      <p
        className={`main-paragraph ${
          animationComplete ? "animate-opacity" : ""
        }`}
      >
        PHOTOGRAPHY FOR ME IS THE PART BETWEEN CONFLICT AND DECISION, THE
        EMOTIONS
        <br />
        YOU WANT TO HIDE, THE EMOTIONS YOU DON'T WANT TO SHOW, AND THE EMOTIONS
        YOU
        <br />
        CAN'T SHOW. IT’S ALL ABOUT CONCEALMENT OF EMOTIONS.
      </p>
      {renderImages()}
    </div>
  );
};

export default Main;
