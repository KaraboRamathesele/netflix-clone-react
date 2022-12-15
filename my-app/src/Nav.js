import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="netflix logo"
        />

        <img
          className="nav__avatar"
          src="https://occ-0-34-32.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQ1dcB2h5seWi_VxDdEMQWUGVzz9MJg7qldqWlva91-QmXxsfD5lcg77M2S45VodVtyN1MI6mhFvGDT2yeNGNs8JcKStifM.png?r=145"
          alt="avatar icon"
        />
      </div>
    </div>
  );
}

export default Nav;
