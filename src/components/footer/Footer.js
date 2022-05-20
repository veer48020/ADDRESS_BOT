import React from "react";
import "./Footer.css";
import { MdLocationOn } from "react-icons/md";
import { MdFacebook } from "react-icons/md";


const Footer = () => {
  return (
    <footer id="footer">
      <div className="container footer">
        <div className="footer-last">
        <div className= "logo">
         <MdLocationOn color="white" size={66}/>
         <p className="logo-text-one">
           UK ADDRESS BOT
         </p>
      </div>
         <p className="two">Powered By Mobius Knowledge Services</p>
          
        </div>
          
      </div>

      <div className="footer-links">
      <a href="#">About Us</a>
      <a href="#">Careers</a>
      <a href="#">Our Customers</a>
      <a href="#">Contact </a>
      <a href="#">Privacy policy</a>
      </div>

     <hr>

      

     </hr>

     <p className="four"> © 2022 Mobius Knowledge Services.All Rights Reserved</p>

     <div className="logos_one">
       <MdFacebook color="white" size={33}/>
     </div>
    
    </footer>
  )
}

export default Footer