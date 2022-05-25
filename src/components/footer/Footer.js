import React from "react";
import "./Footer.css";
import { MdLocationOn } from "react-icons/md";
import { MdFacebook } from "react-icons/md";


const Footer = () => {
  return (
    <footer id="footer">
      <div className="container footer">
        <div className="footer-last">
        <div className= "logo_two">
         <MdLocationOn color="white" size={66}/>
         </div>
         <p className="logo-text-one">
            ADDRESS BOT
         </p>
      
         <p className="two">Powered By Mobius Knowledge Services</p>
          
        </div>
          
      </div>

      <div className="footer-links">
      <a>About Us</a>
      <a>Careers</a>
      <a>Our Customers</a>
      <a>Contact </a>
      <a>Privacy policy</a>
      </div>
    <div className="hori">
       <hr>

      </hr>
    </div>
    

     <p className="four"> © 2022 Mobius Knowledge Services.All Rights Reserved</p>

     <div className="logos_one">
       <MdFacebook color="white" size={33}/>
     </div>
    
    </footer>
  )
}

export default Footer