import React from 'react';
import top1 from'../assets/images/top1.jpg';
import top2 from'../assets/images/top2.jpg';
import top4 from'../assets/images/top4.jpg';
import top3 from'../assets/images/top3.jpg';
import './Gallery.css';
const Gallery = () => {
  return (
    <>
     {/* Hero Section */}
     <section className="hero-section-gallery justify-content-center allign-items-center text-center" >
       <div className="container">
         <h1 className="display-4">Gallery</h1>
         <p className="lead">A free template by 
         <a href="/" className="text-light text-decoration-underline">Colorlib.</a>
           Download and share!</p>
       </div>
     </section>
    {/* Top Destination */}
  <section className="courses-section py-5">
    <h1>Gallery</h1>
  <div className="container">
    <div className="row">
      {/* Course 1 */}
      <div className="col-lg-3 mb-4">
        <div className="card">
          <img
            src={top1}
            className="card-img-top"
            alt="Course 1"
          />
          <div className="card-body">
          <h4>Food & Wines</h4>
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Course 2 */}
      <div className="col-lg-3 mb-4">
        <div className="card">
          <img
            src={top2}
            className="card-img-top"
            alt="Course 2"
          />
          <div className="card-body">
          <h4>Resort & Spa</h4>
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>

         {/* Course 2 */}
         <div className="col-lg-3 mb-4">
        <div className="card">
          <img
            src={top4}
            className="card-img-top"
            alt="Course 2"
          />
          <div className="card-body">
          <h4>Hotel Rooms</h4>
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Course 3 */}
      <div className="col-lg-3 mb-4">
        <div className="card">
          <img
            src={top3}
            className="card-img-top"
            alt="Course 3"
          />
          <div className="card-body">
            <h4>Mountain Climbing</h4>
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Course 1 */}
      <div className="col-lg-3 mb-4">
        <div className="card">
          <img
            src={top1}
            className="card-img-top"
            alt="Course 1"
          />
          <div className="card-body">
          <h4>Food & Wines</h4>
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>

       {/* Course 2 */}
       <div className="col-lg-3 mb-4">
        <div className="card">
          <img
            src={top4}
            className="card-img-top"
            alt="Course 2"
          />
          <div className="card-body">
          <h4>Hotel Rooms</h4>
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Course 2 */}
      <div className="col-lg-3 mb-4">
        <div className="card">
          <img
            src={top4}
            className="card-img-top"
            alt="Course 2"
          />
          <div className="card-body">
          <h4>Hotel Rooms</h4>
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>


      {/* Course 3 */}
      <div className="col-lg-3 mb-4">
        <div className="card">
          <img
            src={top3}
            className="card-img-top"
            alt="Course 3"
          />
          <div className="card-body">
            <h4>Mountain Climbing</h4>
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  );
};

export default Gallery;