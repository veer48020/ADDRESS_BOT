import React from "react";
import "./Header.css";
import First from "../../Assets/First.png"





const Header = () => {

  

  return (
    <section id="header">

<div className="wrapper">
       
     

       <div className="container header">
   
           <div className="header-left">
           <h1>
             <span>Address Curation And Parsing</span>
           </h1>
           <p>Paste the website URL</p>
   
           <input type="text" />
           <button>Search </button>
           
           <h3>
             (Only Supports UK Address)
           </h3>
           </div>

           
   
           <div className="header-right">
             <img src={First}></img>
           </div>
   
   
       </div>
   
       </div>

    <div>
      <h2>
       --Or--
      </h2>
    </div>

    </section>

    
        
    
  )
}

export default Header