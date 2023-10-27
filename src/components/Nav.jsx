import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/navStyles.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Link,

  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import Home from "./Home";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const handleClose = () => setClick(false);
  const screenWidth = window.innerWidth;
  console.log("🚀 ~ file: Nav.jsx:15 ~ useEffect ~ screenWidth:", screenWidth);

  useEffect(() => {}, [screenWidth]);
  return (
    <>
      <div className="navbar">
        <span className="myName">Nagendra</span>

        <ul className="nav-list">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              onSetActive={handleClose}
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={handleClose}
            >
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              onSetActive={handleClose}
            >
              Education
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              onSetActive={handleClose}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="side-by-side">
        <nav className="side-nav">
          <ul>
            <li>
              <Button className="btn">
                <LinkedInIcon
                  color="primary"
                  sx={{ fontSize: 40 }}
                  className="btn1"
                />
              </Button>
            </li>
            <li>
              {" "}
              <Button className="btn">
                <FacebookIcon
                  color="primary"
                  sx={{ fontSize: 40 }}
                  className="btn1"
                />
              </Button>
            </li>
            <li>
              {" "}
              <Button className="btn">
                <ContactMailIcon
                  color="primary"
                  sx={{ fontSize: 40 }}
                  className="btn1"
                />
              </Button>
            </li>
            <li>
              {" "}
              <Button className="btn">
                <GitHubIcon
                  color="primary"
                  sx={{ fontSize: 40 }}
                  className="btn1"
                />
              </Button>
            </li>
          </ul>
        </nav>

        <main className="main">
          <Home />

          <Experience />

          <Education />
          <Contact />
        </main>
      </div>
    </>
  );
};

export default Nav;
