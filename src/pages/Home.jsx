import React from 'react';
import './Home.css';
import image from '../assets/images/about1.jpg';
import food from '../assets/images/food.svg';
import travel from '../assets/images/travel.svg';
import plane from '../assets/images/plane.svg';
import beach from '../assets/images/beach.svg';
import mountain from '../assets/images/mountain.svg';
import balloon from '../assets/images/balloon.svg';
import slider1 from '../assets/images/slider-1.jpg';
import slider2 from '../assets/images/slider-2.jpg';
import slider3 from '../assets/images/slider-3.jpg';
import top1 from '../assets/images/top1.jpg';
import top2 from '../assets/images/top2.jpg';
import top4 from '../assets/images/top4.jpg';
import top3 from '../assets/images/top3.jpg';
import per1 from '../assets/images/person_1.jpg.webp';
import per2 from '../assets/images/person_2.jpg.webp';
import per3 from '../assets/images/person_3.jpg.webp';

const Home = () => {
  return (
    // Hero Section
    <>
      <section className="hero-section justify-content-center allign-items-center text-center" >
        <div className="container">
          <h1 className="display-4">Travel & Tours</h1>
          <p className="lead">A free template by
            <a href="/" className="text-light text-decoration-underline">Colorlib.</a>
            Download and share!</p>
          <a href="#" className="btn btn-outline-light btn-lg">
            VISIT COLORLIB
          </a>
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
                className="img-fluid  about-image"
              />
            </div>
            <div className="col-lg-6 text">
              <h2>Welcome To Our Website</h2>
              <p className="mt-5">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.<br></br>
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
      {/* Services Section */}
      <section className="services-section py-5 bg-light service-container">
        <div className="container">
          <div className="top-text">
            <h2 className="text-center justify-center-center mb-2 heading">Experience Once In Your Life Time</h2>
            <p className="text-center justify-center-center  ">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          </div>
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
      {/* Slider */}
      <section>
      <div id="carouselExampleAutoplaying" className="carousel slide " data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slider1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slider2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={slider3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2" class="active"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={slider1} alt="First slide" />
            </div>
            <div class="carousel-item active">
              <img class="d-block w-100" src={slider2} alt="Second slide" />
            </div>
            <div class="carousel-item active">
              <img class="d-block w-100" src={slider3} alt="Third slide" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div> */}
      </section>

      {/* Testimonials */}
      <section className="testimonials-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Happy Customers</h2>
          <div className="row">
            <div className="col-lg-4">
              <blockquote className="blockquote">
                <img
                  src={per1}
                  className="follower"
                  alt="Course 2"
                />
                <p className="mb-0">
                  “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
                </p><br></br>
                <footer className="blockquote-footer follower-name">Clare Gupta</footer>
              </blockquote>
            </div>
            <div className="col-lg-4">
              <blockquote className="blockquote">
                <img
                  src={per2}
                  className="follower "
                  alt="Course 2"
                />
                <p className="mb-0">
                  “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                </p><br></br>
                <footer className="blockquote-footer follower-name">Rogie Slater</footer>
              </blockquote>
            </div>
            <div className="col-lg-4">
              <blockquote className="blockquote">
                <img
                  src={per3}
                  className="follower"
                  alt="Course 2"
                />
                <p className="mb-0">
                  “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”              </p><br></br>
                <footer className="blockquote-footer follower-name">John Doe</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      {/* Top Destination */}
      <section className="courses-section pt-2 py-5">
        <div className="container">
          <div>
            <h2 className="text-center justify-center-center mb-5 top-text1 ">Top Destination
            </h2>
            <p className="text-center justify-center-center destination-heading">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.</p>
          </div>
          <div className="row">
            {/* Course 1 */}
            <div className="col-lg-3 mb-4">
              <div className="card">
                <img
                  src={top1}
                  className="card-img-top "
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
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
