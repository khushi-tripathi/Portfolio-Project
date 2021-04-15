import React from 'react'
import schl from "../School.jpg";
import clg from "../clg.jpg";


const Education = () => {
    return (
         
<div className=" education" id="education">
<h1 className="heading">Education...</h1>
<div className="edu">
<div>
  <h2 className=" blackbg classh2">School</h2>
<div class=" cd card">
  
  
  <img class="card-img-top i" src={schl} alt="Card image cap"/>
  <div class="card-body">
    <h4 class="card-text">Elite Higher Secondary School, Bhopal</h4><br/>
    <h5 class="card-text">10th : 84%  (2016) </h5>
    <h5 class="card-text">12th : 85.4%  (2018) </h5>
    
  </div>
</div>
</div>





<div>
  <h2 className="blackbg classh2">College</h2>
<div class=" cd card">
  <img class="card-img-top i" src={clg} alt="Card image cap"/>
  <div class="card-body">
 
  <h4 class="card-text">Sagar Institution of Science and Technology (SISTec), Bhopal</h4>
    <h5 class="card-text">Sgpa : 8.76  (Currently) </h5>
    <h5 class="card-text">Cgpa : 9.6  (Fourth Semester) </h5>

 
 
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
</div>
         </div>




</div>
</div>

)
}

export default Education

{/* <h2>Education!!!!</h2> */}
            {/* <h1 >Education..</h1>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    {/* <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> /}
  </ol>

  <div className=" eduH carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={schl} alt="First slide"/>
      <div className="carousel-caption d-none d-md-block">
    <h5>School</h5>
    <p>Elite Higher Secondary School</p>
  </div>

    </div>
    {/* <div class="carousel-item">
  <img src="..." alt="..."/>
  <div class="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
</div> }


    <div className="carousel-item">
      <img className="d-block w-100" src={clg} alt="Second slide"/>
      <div className="carousel-item">
  <img src="..." alt="..."/>
  <div className="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
</div>
    
    </div>
    {/* <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide">
    </div> }
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div> */}