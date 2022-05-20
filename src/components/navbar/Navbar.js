import React from "react";
import "./Navbar.css";
import { MdLocationOn } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="container navbar">
      <div className= "logo">
         <MdLocationOn color="#6C63FF" size={66}/>
         <p className="logo-text">
           UK ADDRESS BOT
         </p>
      </div>
      <menu>
          <ul className="nav-links">
            <li><a href="#">HOW IT WORKS</a></li>
            <li><a href="#">SUPPORT</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
      </menu>
    </nav>
  )
}

export default Navbar