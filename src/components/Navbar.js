import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaNodeJs } from "react-icons/fa";
import { CgClose, CgMenuRight } from "react-icons/cg";
import "./Navbar.css";
import profilePicture from "../pp.png";
import blobPic from "../blob-haikei.png";


export default function Navbar({ }) {
  const [navCollapse, setNavCollapse] = useState(true);
  const [scroll, setScroll] = useState(false);

  const navs = ["About", "Skills&Experiences", "Projects", "Contact"];

  return (
    <header className={`navbar ${scroll ? "navbar-scroll" : ""}`}>
      <nav className="navbar-container global_padding">
        <div style={{ position: "relative", display: "inline-block", cursor: "pointer", marginLeft: "-10px" }}>
          <img
            src={blobPic}
            alt="Background"
            style={{
              width: "52px",
              height: "auto",
              paddingTop: "8px",

            }}
          />
          <img
            alt="Profile Picture"
            src={profilePicture}
            className="avatar-picture"
            style={{
              width: "33px", // Set a fixed size for the avatar
              height: "30px", // Adjust to your desired size
              position: "absolute",
              top: "50%",
              left: "50%",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>

        <ul className="nav-links">
          {navs.map((e) => (
            <li key={e}>
              <ScrollLink
                className="nav-link"
                to={e}
                offset={-60}
                smooth={true}
                duration={500}
                onClick={() => setNavCollapse(true)}
              >
                {e}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <div className="menu-icon" onClick={() => setNavCollapse(false)}>
          <CgMenuRight size={20} />
        </div>
      </nav>

      <div className={`mobile-nav ${!navCollapse ? "open" : ""}`}>
        <div className="mobile-nav-menu">
          <CgClose
            className="close-icon"
            onClick={() => setNavCollapse(true)}
          />
          {navs.map((e) => (
            <ScrollLink
              key={e}
              className="mobile-nav-link"
              to={e}
              offset={-60}
              smooth={true}
              duration={500}
              onClick={() => setNavCollapse(true)}
            >
              {e}
            </ScrollLink>
          ))}
          <ScrollLink
            to="contact"
            offset={-60}
            smooth={true}
            duration={500}
            onClick={() => setNavCollapse(true)}
            className="contact-btn"
          >
            Contact
          </ScrollLink>
        </div>
      </div>
    </header>
  );
}
