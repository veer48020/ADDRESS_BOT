import React from "react";
import "./Upload.css";
import second from "../../Assets/second.png"

const Upload = () => {
  return (
    <section id="upload">

    <div className="wrapper">

    <div className="container upload">

<div className="upload-left">
<h1>
  <span>Upload File</span>
</h1>

<div>
    <p class="name">Upload multiple website URL in '.xls' or '.csv' format for faster results.</p>
    <input type="file" multiple className= "multipleFiles" />


</div>


</div>




<div className="upload-right">
  <img src={second}></img>
</div>


</div>


    </div>



    </section>
  )
}

export default Upload