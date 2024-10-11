import React from 'react';
import per1 from '../assets/images/person_1.jpg.webp';
import per2 from '../assets/images/person_2.jpg.webp';
import per3 from '../assets/images/person_3.jpg.webp';
import './Contact.css';
const Contact = () => {
  return (
    <>
    {/* Hero Section */}
    <section className="hero-section-contact justify-content-center allign-items-center text-center" >
    <div className="container">
      <h1 className="display-4">Contact</h1>
      <p className="lead">A free template by 
      <a href="/" className="text-light text-decoration-underline">Colorlib.</a>
        Download and share!</p>
    </div>
  </section>
  {/* Contact */}
  <section className="contact-section">
      <div className="container ">
        <div className="row block-9 ">
          {/* Contact Form on the Left Side */}
          <div className="col-md-6 d-flex  ">
            <form action="#" className="bg-white contact-form w-100 p-4">
            <div>
            <label htmlFor="name" className="mt-3">Name</label>
            <input type="text" className="form-control contact"/>
            
              </div>
              <div className="form-group">
              <label htmlFor="phone" className="mt-3">Phone</label>
              <input type="tel" id="phone" name="phone" className="form-control" placeholder="Your Phone"
              />
              </div>
              <div className="form-group">
               <label htmlFor="email" className="mt-3">Email</label>
                <input type="email" className="form-control"/>
              </div>
              <div className="form-group">
              <label htmlFor="email" className="mt-3">Write Message</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="7"
                  className="form-control mt-2"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-group">
                <input type="submit" value="Send Message" className="btn btn-primary  mt-3 py-3 px-5" />
              </div>
            </form>
          </div>

          {/* Address Information on the Right Side */}
          <div className="col-md-6 d-flex ">
            <div className="row w-100">
              <div className="col-md-12 d-flex">
                <div className="info bg-white  address">
                  <p>
                    <span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016
                  </p>
                  <p>
                    <span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a>
                  </p>
                  <p>
                    <span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                  </p>
                  <p>
                    <span>Website:</span> <a href="/">yoursite.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </>
  );
};

export default Contact;
