import React from "react";
import '../App.css'; 

const positionSection = () => {
    return (
        <div className="gradient-background2" style={{ position: 'absolute', top: '58%', left: '10%',zIndex:"20" }}>
            <div className="content-container">
                <div className="positiontext" >See My Projects At Once & leave Here Your E-mail Address.</div>
                <div><form style={{ position: 'relative' }}>
                    <input type="email" placeholder="Email Address"  />
                    <button type="submit" style={{ position: 'absolute', top: '6px', right: '6px' }}>Submit</button>
                </form></div>
            </div>
        </div>
    );
};

export default positionSection;
