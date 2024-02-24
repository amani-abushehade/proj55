import React from "react";

const Section1 = () => {
    const imageUrl1 = "/team-work_1x.png";
    const imageUrl2 = "/Screenshot 2024-02-22 191845.png";
    const imageUrl3 = "/R.jpeg";

    return (
        <div>
            <div className="responsive-container">
                <div className="responsive-item">
                    <img style={{ width: "100%", height: "100%", borderRadius: "30px" }} src={imageUrl1} alt="Description" />
                    <div className="alin">
                        <h1 className="alintext">Business Startup</h1>
                        <h5 className="alintext">Design & Development</h5>
                    </div>
                </div>
                <div className="responsive-item">
                    <img style={{ width: "100%", height: "100%", borderRadius: "30px" }} src={imageUrl2} alt="Description" />
                    <div className="alin">
                        <h1 className="alintext">Business Startup</h1>
                        <h5 className="alintext">Design & Development</h5>
                    </div>
                </div>
                <div className="responsive-item">
                    <img style={{ width: "100%", height: "100%", borderRadius: "30px" }} src={imageUrl3} alt="Description" />
                    <div className="alin">
                        <h1 className="alintext">Business Startup</h1>
                        <h5 className="alintext">Design & Development</h5>
                    </div>
                </div>
                <div className="responsive-item">
                    <img style={{ width: "100%", height: "100%", borderRadius: "30px" }} src={imageUrl1} alt="Description" />
                    <div className="alin2">
                        <h1 className="alintext">Business Startup</h1>
                        <h5 className="alintext">Design & Development</h5>
                    </div>
                </div>
                <div className="responsive-item">
                    <img style={{ width: "100%", height: "100%", borderRadius: "30px" }} src={imageUrl2} alt="Description" />
                    <div className="alin2">
                        <h1 className="alintext">Business Startup</h1>
                        <h5 className="alintext">Design & Development</h5>
                    </div>
                </div>
                <div className="responsive-item">
                    <img style={{ width: "100%", height: "100%", borderRadius: "30px" }} src={imageUrl3} alt="Description" />
                    <div className="alin2">
                        <h1 className="alintext">Business Startup</h1>
                        <h5 className="alintext">Design & Development</h5>
                    </div>
                </div> 
            </div>
            
        </div>
    );
};

export default Section1;

