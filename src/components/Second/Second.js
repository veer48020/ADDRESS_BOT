import React from "react";
import "./Second.css";


const Second = () => {

  return(

  <section class="second">
    <nav>
      <a href=""><i class="fa fa-map-marker logo"></i></a>
      <a href="index.html" class="page">UK ADDRESS BOT</a>
      <div class="nav-links">
        <ul>
          <li><a href="">HOW IT WORKS</a></li>
          <li><a href="">SUPPORT</a></li>
          <li><a href="">CONTACT</a></li>
        </ul>

      </div>
    </nav>
    <div class="white-box">
       <img style="align-items: center; margin:500px;" src="./Home - Location.svg" alt="logo" height="100px" width="100px"/> 
      <h3>Results</h3>
      <div >
      <table class="Table-elements">
        <tbody>
          <thead >
            <tr>
              <th scope="col">Name</th>
              <td> : Canterbiry Cathedral</td>
            </tr>
            <tr>
              <th scope="col">Address 1</th>
              <td> : Cathedrl House,</td>
            </tr>
            <tr>
              <th scope="col">Address 2</th>
              <td> : 11 The Precints,</td>
            </tr>
            <tr>
              <th scope="col">Address 3</th>
              <td> : Canterbury CT1 2EH,</td>
            </tr>
            <tr>
              <th scope="col">Town/City</th>
              <td> : Ash</td>
            </tr>
            <tr>
              <th scope="col">State</th>
              <td> : Canterbury</td>
            </tr>
            <tr>
              <th scope="col">Country</th>
              <td> : United Kingdom</td>
            </tr>
            <tr>
              <th scope="col">Zip</th>
              <td> : CT3</td>
            </tr>

          </thead>

        </tbody>
      </table>

      <div class="score">
          <span><p> Confidence scoring</p></span>
          <div class="green-box1"> <p> 98% </p> </div>
        
          <p>Remarks</p>
          <div class="green-box2"><p> No Remark </p></div>

      </div>








  </div>

      <div class="buttons" align= " center">

        <button type="button" class="btn btn-outline-primary"><i class="fa-solid fa-copy"></i> Copy </button>
        <button type="button" class="btn btn-outline-primary"><i class="fa-solid fa-envelope"></i> Mail </button>
        <button type="button" class="btn btn-outline-primary"><i class="fa-solid fa-share"></i> Share </button>
         
    </div>

    </div>


  </section>
  )

}

export default Second
