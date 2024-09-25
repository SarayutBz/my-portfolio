import "../css/Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
function Header() {
  return (
    <div className="head flex justify-between m-[30px] border-b-2 border-black fade-in">
      <h3 className="text-[34px] font-bold">Sarayut</h3>

      <div className="menu flex">
        <Link to="/">
          <h4 className="mx-2.5 text-[24px]">Home</h4>
        </Link>
        <Link to="/about">
          <h4 className="mx-2.5 text-[24px] cursor-pointer">About me</h4>
        </Link>
        <Link to="/projects">
          <h4 className="mx-2.5 text-[24px]">Projects</h4>
        </Link>
      </div>

      <div className="icon text-[24px]">
        <a
          href="https://www.instagram.com/sayu.ball/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="mx-2.5" icon={faInstagram} />
        </a>
        <a
          href="https://www.linkedin.com/in/sarayut-aiamaurai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="mx-2.5" icon={faLinkedin} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61559806212197" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="mx-2.5" icon={faFacebook} />
        </a>
      </div>
    </div>
  );
}

export default Header;
