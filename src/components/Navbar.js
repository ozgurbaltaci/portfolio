import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaNodeJs } from "react-icons/fa";
import { CgClose, CgMenuRight } from "react-icons/cg";
import "./Navbar.css";

export default function Navbar({}) {
  const [navCollapse, setNavCollapse] = useState(true);
  const [scroll, setScroll] = useState(false);

  const navs = ["About", "Skills&Experiences", "Projects", "Contact"];

  return (
    <header className={`navbar ${scroll ? "navbar-scroll" : ""}`}>
      <nav className="navbar-container">
        <a href="/" className="logo">
          ozgurbaltaci
        </a>

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
