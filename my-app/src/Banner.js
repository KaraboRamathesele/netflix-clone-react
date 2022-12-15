import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://occ-0-34-32.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABetr-B2Dv47ohLycEbEyx5PIe-sdPZW4iATGQnsJ1zOeCTrb-OHrsx4oLnBwbnhWQTuTd35xjIgbwE2WmobNSH_z1s4eLLgKLuNf.webp?r=109')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
        </div>
        <h1 className="banner__description">This is a test description</h1>
      </div>

      <div className="banner--fadeButton" />
    </header>
  );
}

export default Banner;
