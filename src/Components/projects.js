import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
const Projects = () => {
    const [activeSection, setActiveSection] = useState("section1");
    const [focusedDiv, setFocusedDiv] = useState(null);
  
    const handleLinkClick = (sectionId) => {
      setActiveSection(sectionId);
    };
  
    return (
      <div id="projects" className="app2" style={{ backgroundColor: "black" }}>
        <div style={{ width: "80%", margin: "auto", textAlign: "center", paddingTop: "100px" }}>
          <h1 style={{ color: "white", paddingBottom: "20px", fontSize: "50px" }}>My Project</h1>
          <div className='hello1'>My name is Amani, I live in Nablus, Palestine, This is the first project in react Dev.</div>
          <div>
            <nav className="nav2">
              <div
                className={`nav-item1 ${(focusedDiv === "section2" ? "" : "focused1")&&(focusedDiv === "section3" ? "" : "focused1")}`}
                tabIndex="0"
                onFocus={() => {
                  handleLinkClick("section1");
                  setFocusedDiv("section1");
                }}
              >
                <Link>1st Section</Link>
              </div>
              <div
                className={`nav-item2 ${focusedDiv === "section2" ? "focused2" : ""}`}
                tabIndex="0"
                onFocus={() => {
                  handleLinkClick("section2");
                  setFocusedDiv("section2");
                }}
              >
                <Link>2nd Section</Link>
              </div>
              <div
                className={`nav-item3 ${focusedDiv === "section3" ? "focused3" : ""}`}
                tabIndex="0"
                onFocus={() => {
                  handleLinkClick("section3");
                  setFocusedDiv("section3");
                }}
              >
                <Link>3rd Section</Link>
              </div>
            </nav>
            <Outlet />
            <div style={{paddingTop:"60px"}}>
              {activeSection === "section1" && <Section1 />}
              {activeSection === "section2" && <Section2 />}
              {activeSection === "section3" && <Section3 />}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;
  