import React, { useState } from "react";
import "./profil.css";

const Profil = () => {
  const [animationClass, setAnimationClass] = useState("");

  return (
    <div className={`profil ${animationClass}`}>
      <div className={`profil-container-left ${animationClass}`}>
        <div className={`presentation ${animationClass}`}>
          <h3>Talia Zanger</h3>
          <span>タリア・ザンガー</span>
          <p>PHOTOGRAPHER & VISUAL ARTIST</p>
          <p>BASED IN LONDON</p>
        </div>
        <div className={`experience ${animationClass}`}>
          <h4>2021 - 2023</h4>
          <p>FREE LANCE PHOTOGRAPHER</p>
        </div>
      </div>

      <img
        src="./IMG/11.webp"
        alt=""
        className={`animate-opacity ${animationClass}`}
      />

      <div className={`profil-container-right ${animationClass}`}>
        <div className={`available ${animationClass}`}>
          <h4>AVAILABLE FOR</h4>
          <p>EDITORIAL</p>
          <p>FASHION WEEK</p>
          <p>COLLABORATION</p>
        </div>
        <div className={`contact ${animationClass}`}>
          <h4>Contact me</h4>
          <p>06 48 39 54 78</p>
          <p>@taliazanger</p>
          <p>taliazanger@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Profil;
