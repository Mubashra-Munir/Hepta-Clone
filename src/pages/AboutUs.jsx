import React from 'react';
import image from '../assets/images/about1.jpg';
import './About.css';
const AboutUs = () => {
  return (
    <>
   {/* Hero Section */}
       <section className="hero-section-about justify-content-center allign-items-center text-center" >
       <div className="container">
         <h1 className="display-4">AboutUs</h1>
         <p className="lead">A free template by 
         <a href="/" className="text-light text-decoration-underline">Colorlib.</a>
           Download and share!</p>
       </div>
     </section>
   {/* About Section */}
  
  <section className="about-section py-5">
  <div className="container">
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
        <a href="https://vimeo.com/channels/staffpicks/93951774" data-fancybox className=" btn-play d-flex">
        <span className="icon align-self-center mr-3"></span>
        <span className="icon align-self-center">Watch the video</span>
        </a>
        </p>
       </div>
    </div>
    </div>
    </section>
    </>
  );
};

export default AboutUs;