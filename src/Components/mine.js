import React from "react" ;
import Home from "./home.js";
import Skills from "./skills.js";
import Contect from "./contect.js";
import Projects from "./projects.js";
import LastSection from "./Lastsection.js";
import PositionSection from "./positionSection.js"
const Mine = () => {
    return (
        <>
        <Home/>
        <Skills/>
        <Projects/>
        <div style={{position:"relative"}}>
        <Contect/>
        <PositionSection/>
        <LastSection/>
        </div>
        
        </>
    )
};

export default Mine;