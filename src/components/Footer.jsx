import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="bg-dark text-light fixed">
    <div className="container">
      <div className="row border-top text-center pt-5">
          {/* Quick Links */}
          <div className="col-md-3 mb-5">
          <h5 className="text-capitalize">Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="/" className="text-light text-decoration-none">About Us</a></li>
            <li><a href="/" className="text-light text-decoration-none">Terms & Conditions</a></li>
            <li><a href="/" className="text-light text-decoration-none">Privacy Policy</a></li>
            <li><a href="/" className="text-light text-decoration-none">Help</a></li>
            <li><a href="/" className="text-light text-decoration-none">Rooms</a></li>
          </ul>
        </div>

            {/* Support Section*/}
            <div className="col-md-3 mb-5">
          <h5 className="text-capitalize">Support</h5>
          <ul className="list-unstyled">
            <li><a href="/" className="text-light text-decoration-none">Our Loctaion</a></li>
            <li><a href="/" className="text-light text-decoration-none">The Hosts</a></li>
            <li><a href="/" className="text-light text-decoration-none">About</a></li>
            <li><a href="/" className="text-light text-decoration-none">Contact</a></li>
            <li><a href="/" className="text-light text-decoration-none">Restaurant</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-md-3 mb-5 pr-md-5 contact-info">
          <h5 className="text-capitalize">Contact Info</h5>
          <h6 className="text-capitalize">Address:<p className="text-light">98 West 21th Street, Suite 721 New York NY 10016</p></h6>
          <h6 className="text-capitalize">Phone:<p className="text-light">(+1) 435 3533</p></h6>
          <h6 className="text-capitalize">Email:<p className="text-light">info@yourdomain.com</p></h6>
        </div>

        {/* Subscribe */}
        <div className="col-md-3 mb-5">
          <h5 className="text-capitalize">Subscribe</h5>
          <p className="text-light">
          Sign up for our newsletter
          </p>
          <form>
            <div className="mb-3 mb-5">
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
          </form>
        </div>
      </div>
     <hr></hr>
      {/* Footer Bottom */}
      <div className="row bordertop text-center pt-5">
        <div className="col-12 text-center mt-4">
          <p className="text-light mb-0">
            &copy; Copyright © 2024 All rights reserved | This template is made with <i className="fas fa-heart text-light"></i> by Colorlib
          </p>
          <ul className="list-unstyled d-flex justify-content-center">
            <li className="me-3">
              <a href="/" className="text-light text-decoration-none">
              <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li className="me-3">
              <a href="/" className="text-light text-decoration-none">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="me-3">
              <a href="/" className="text-light text-decoration-none">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="me-3">
              <a href="/" className="text-light text-decoration-none">
              <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li className="me-3">
              <a href="/" className="text-light text-decoration-none">
              <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
 
  );
};

export default Footer;
