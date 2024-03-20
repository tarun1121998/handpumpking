import React from "react";
import "./HowWorks.css";

const HowWorks = () => {
  return (
    <div>
      <div className="work-head">
        <h3>How It Works</h3>
        <p>Aliquam lorem ante, dapibus in, viverra quis</p>
      </div>
      <div className="work-box-area">
        {/* --- First --- */}
        
        <div className="work-box">
        <i class="fa-solid fa-hand-point-up"></i>
        <h4>Choose What to do</h4>
        <p>Lorem ipsum dolor amet, consectetur adipiscing tempor labore et dolore magna aliqua.</p>
        </div>
        {/* --- Second --- */}

        <div className="work-box">
        <i class="fa-solid fa-magnifying-glass"></i>
        <h4>Find What you want </h4>
        <p>Lorem ipsum dolor amet, consectetur adipiscing tempor labore et dolore magna aliqua.</p>
        </div>
        {/* --- Third --- */}

        <div className="work-box">
        <i class="fa-solid fa-location-crosshairs"></i>
        <h4>Amazing Places</h4>
        <p>Lorem ipsum dolor amet, consectetur adipiscing tempor labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
