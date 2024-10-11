import React from 'react';
import './Hotels.css';
import food from '../assets/images/food.svg';
import travel from '../assets/images/travel.svg';
import plane from '../assets/images/plane.svg';
import beach from '../assets/images/beach.svg';
import mountain from '../assets/images/mountain.svg';
import balloon from '../assets/images/balloon.svg';
import image from '../assets/images/about1.jpg';
import bg2 from '../assets/images/bg-2.jpg';

const Hotels = () => {
  return (
       // Hero Section
       <>
       <section className="hero-section-hotels justify-content-center allign-items-center text-center" >
       <div className="container">
         <h1 className="display-4">Our Hotel</h1>
         <p className="lead">A free template by 
         <a href="/" className="text-light text-decoration-underline">Colorlib.</a>
           Download and share!</p>
       </div>
     </section>
     {/* Services Section */}
      <section className="services-section py-5 bg-light service-container">
      <div className="container">
        <div className="row">
          {/* Service 1 */}
          <div className="col-lg-4">
            <div className="text-center">
              <h3>Good Foods</h3>
             
              <img
                src={food}
                className="card-img-top image"
                alt="Course 2"
              />
              <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          {/* Service 2 */}
          <div className="col-lg-4">
            <div className="text-center">
              <h3>Travel Anywhere</h3>
              <img
                src={travel}
                className="card-img-top image"
                alt="Course 2"
              />
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
            {/* Service 3 */}
            <div className="col-lg-4">
            <div className="text-center">
              <h3>Airplane</h3>
              <img
                src={plane}
                className="card-img-top image"
                alt="Course 2"
              />
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
            {/* Service 4*/}
            <div className="col-lg-4">
            <div className="text-center">
              <h3>Beach Resort</h3>
              <img
                src={beach}
                className="card-img-top image"
                alt="Course 2"
              />
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
            {/* Service 5 */}
            <div className="col-lg-4">
            <div className="text-center">
              <h3>Mountain Climbing</h3>
              <img
                src={mountain}
                className="card-img-top image"
                alt="Course 2"
              />
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
          {/* Service 6 */}
          <div className="col-lg-4">
            <div className="text-center">
              <h3>Hot Air Balloon</h3>
              <img
                src={balloon}
                className="card-img-top image"
                alt="Course 2"
              />
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
    {/* About Section */}
  <section className="about-section ">
  <div className="container d-block">
    <div className="row">
       <div className="col-lg-6"> 
         <img 
           src={image}
           alt="About" 
           className="img-fluid" 
         /> 
         </div>
      <div className="col-lg-6">
      <h2>Welcome To Our Website</h2>
        <p>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.<br></br><br></br>
        A small river named Duden flows by their place and supplies it with the necessary regelialia.
        </p>
        <p className="pt-4">
        <a href="#" className="btn btn-outline-primary btn-lg">
        Learn More
       </a>
        </p>
       </div>
    </div>
    </div>
    </section>

    {/* About Section */}
  <section className="about-section ">
  <div className="container d-block">
    <div className="row">
      
      <div className="col-lg-6">
      <h2>Welcome To Our Website</h2>
        <p>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.<br></br><br></br>
        A small river named Duden flows by their place and supplies it with the necessary regelialia.
        </p>
        <p className="pt-4">
        <a href="#" className="btn btn-outline-primary btn-lg">
        Learn More
       </a>
        </p>
       </div>

       <div className="col-lg-6"> 
         <img 
           src={bg2}
           alt="About" 
           className="img-fluid" 
         /> 
         </div>
    </div>
    </div>
    </section>
     </>
  );
};

export default Hotels;
