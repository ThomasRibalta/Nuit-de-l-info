import React from "react";
import "../menu.css";
import "../coconfor.css";
import logo from "../image/logo.webp";

const Header = () => {
  const openHamb = () => {
    console.log("Hamburger menu clicked");
  };

  return (
    <header className="top">
      <h1>COCONFOR</h1>
      <img src={logo} alt="Logo COCONFOR" className="logo" />
      <div className="hamburger" id="hamburger" onClick={openHamb}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h2>
        <a className="connexion" href="/login">
          CONNEXION
        </a>
      </h2>
      <div className="profil">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          aria-hidden="true"
        >
          <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" />
        </svg>
      </div>
    </header>
  );
};

export default Header;