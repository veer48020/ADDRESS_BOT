import React from "react";
import  "./Work.css";
import globe from "../../Assets/globe.png";
import settings from "../../Assets/settings.png";
import last from "../../Assets/last.png";


const Work = () => {
  return (
    <section id="work">
      <div className="container work">
      <div className="title">
       <h1>
         <span>How it works</span>
       </h1>

      </div>

      <div className="image123">
        <div className="imageContainer">
          
          <img className="image1" src={globe}></img>
          <p className="one">Share Website</p>
          
          <p>Paste a valid website URL</p>
          <p>www.websitename/contact</p>
        </div>
        <div className="imageContainer">
          <img className="skt" src={settings}></img>
          <p className="one">Extract Details</p>
          <p>Our system will extract details with given URL</p>
        </div>
        <div className="imageContainer">
          <img className="pic" src={last}></img>
          <p className="one">Get Address</p>
          <p>Address and Contact details are ready to use</p>

        </div>
      </div>

      
</div>

    </section>
  )
}

export default Work