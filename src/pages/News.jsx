import React from 'react';
import './News.css';
import image from '../assets/images/top1.jpg';
import top4 from '../assets/images/top4.jpg';
import slider3 from '../assets/images/slider-3.jpg';
import slider4 from '../assets/images/slider-2.jpg';
const News= () => {
  return (
    <>
    {/* Hero Section */}
    <section className="hero-section-news justify-content-center allign-items-center text-center" >
    <div className="container">
      <h1 className="display-4">Blog</h1>
      <p className="lead">A free template by 
      <a href="/" className="text-light text-decoration-underline">Colorlib.</a>
        Download and share!</p>
    </div>
  </section>
  <section>
  <div className="container mt-5 blog-page">
      <div className="row">
        {/* Left Section (Blog Posts) */}
        <div className="col-md-8">
          <div className="row">
            {/* Blog Post 1 */}
            <div className="col-md-6">
              <div className="blog-entry">
                <a href="#" className="block-20">
                  <img
                    src={image}
                    className="img-fluid"
                    alt="Blog 1"
                  />
                </a>
                <div className="text p-4">
                  <div className="meta mb-3">
                    <div>
                      <a href="#">October 9, 2024</a>
                    </div>
                  </div>
                  <h1 className="heading">
                    <a href="#">Free Template by Colorlib</a>
                  </h1>
                </div>
              </div>
            </div>
            {/* Blog Post 2 */}
            <div className="col-md-6">
              <div className="blog-entry">
                <a href="#" className="block-20">
                  <img
                    src={top4}
                    className="img-fluid"
                    alt="Blog 1"
                  />
                </a>
                <div className="text p-4">
                  <div className="meta mb-3">
                    <div>
                      <a href="#">October 9, 2024</a>
                    </div>
                  </div>
                  <h1 className="heading">
                    <a href="#">Free Template by Colorlib</a>
                  </h1>
                </div>
              </div>
            </div>
             {/* Blog Post 3 */}
            <div className="col-md-6">
              <div className="blog-entry">
                <a href="#" className="block-20">
                  <img
                    src={slider3}
                    className="img-fluid"
                    alt="Blog 1"
                  />
                </a>
                <div className="text p-4">
                  <div className="meta mb-3">
                    <div>
                      <a href="#">October 9, 2024</a>
                    </div>
                  </div>
                  <h1 className="heading">
                    <a href="#">Free Template by Colorlib</a>
                  </h1>
                </div>
              </div>
            </div>

               {/* Blog Post 4 */}
              <div className="col-md-6">
              <div className="blog-entry">
                <a href="#" className="block-20">
                  <img
                    src={image}
                    className="img-fluid"
                    alt="Blog 1"
                  />
                </a>
                <div className="text p-4">
                  <div className="meta mb-3">
                    <div>
                      <a href="#">October 9, 2024</a>
                    </div>
                  </div>
                  <h1 className="heading">
                    <a href="#">Free Template by Colorlib</a>
                  </h1>
                </div>
              </div>
            </div>

              {/* Blog Post 5 */}
              <div className="col-md-6">
              <div className="blog-entry">
                <a href="#" className="block-20">
                  <img
                    src={top4}
                    className="img-fluid"
                    alt="Blog 1"
                  />
                </a>
                <div className="text p-4">
                  <div className="meta mb-3">
                    <div>
                      <a href="#">October 9, 2024</a>
                    </div>
                  </div>
                  <h1 className="heading">
                    <a href="#">Free Template by Colorlib</a>
                  </h1>
                </div>
              </div>
            </div>

            {/* Blog Post 6*/}
            <div className="col-md-6">
              <div className="blog-entry">
                <a href="#" className="block-20">
                  <img
                    src={image}
                    className="img-fluid"
                    alt="Blog 2"
                  />
                </a>
                <div className="text p-4">
                  <div className="meta mb-3">
                    <div>
                      <a href="#">October 19, 2024</a>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="#">Free Template by Colorlib</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Popular Posts) */}
        <div className="col-md-4">
          <div className="sidebar-box">
            <h3 className="sidebar-title">Popular Posts</h3>

            {/* Popular Post 1 */}
            <div className="popular-post d-flex">
              <a href="#" className="popular-img">
                <img
                  src={slider3}
                  className="img-fluid"
                  alt="Popular Post 1"
                />
              </a>
              
              <div className="popular-text">
                <h4>
                  <a href="#">Free Template by Colorlib</a>
                </h4>
                <div className="meta">
                <span>August 12, 2020</span>
                </div>
              </div>
            </div>

            {/* Popular Post 2 */}
            <div className="popular-post d-flex">
              <a href="#" className="popular-img">
                <img
                  src={top4}
                  className="img-fluid"
                  alt="Popular Post 2"
                />
              </a>
              <div className="popular-text">
                <h4>
                  <a href="#">Free Template by Colorlib</a>
                </h4>
                <div className="meta">
                  <span>August 12, 2020</span>
                </div>
              </div>
            </div>
  
          {/* Popular Post 2 */}
           <div className="popular-post d-flex">
              <a href="#" className="popular-img">
                <img
                  src={top4}
                  className="img-fluid"
                  alt="Popular Post 2"
                />
              </a>
              <div className="popular-text">
                <h4>
                  <a href="#">Free Template by Colorlib</a>
                </h4>
                <div className="meta">
                  <span>August 12, 2020</span>
                </div>
              </div>
            </div>

            {/* Popular Post 1 */}
            <div className="popular-post d-flex">
              <a href="#" className="popular-img">
                <img
                  src={image}
                  className="img-fluid"
                  alt="Popular Post 1"
                />
              </a>
              
              <div className="popular-text">
                <h4>
                  <a href="#">Free Template by Colorlib</a>
                </h4>
                <div className="meta">
                <span>August 12, 2020</span>
                </div>
              </div>
            </div>

            {/* Popular Post 2 */}
           <div className="popular-post d-flex">
              <a href="#" className="popular-img">
                <img
                  src={top4}
                  className="img-fluid"
                  alt="Popular Post 2"
                />
              </a>
              <div className="popular-text">
                <h4>
                  <a href="#">Free Template by Colorlib</a>
                </h4>
                <div className="meta">
                  <span>August 12, 2020</span>
                </div>
              </div>
            </div>

            {/* Popular Post 2 */}
           <div className="popular-post d-flex">
              <a href="#" className="popular-img">
                <img
                  src={slider3}
                  className="img-fluid"
                  alt="Popular Post 2"
                />
              </a>
              <div className="popular-text">
                <h4>
                  <a href="#">Free Template by Colorlib</a>
                </h4>
                <div className="meta">
                  <span>August 12, 2020</span>
                </div>
              </div>
            </div>

            {/* Popular Post 2 */}
           <div className="popular-post d-flex">
              <a href="#" className="popular-img">
                <img
                  src={top4}
                  className="img-fluid"
                  alt="Popular Post 2"
                />
              </a>
              <div className="popular-text">
                <h4>
                  <a href="#">Free Template by Colorlib</a>
                </h4>
                <div className="meta">
                  <span>August 12, 2020</span>
                </div>
              </div>
            </div>

            {/* Popular Post 2 */}
           <div className="popular-post d-flex">
              <a href="#" className="popular-img">
                <img
                  src={slider3}
                  className="img-fluid"
                  alt="Popular Post 2"
                />
              </a>
              <div className="popular-text">
                <h4>
                  <a href="#">Free Template by Colorlib</a>
                </h4>
                <div className="meta">
                  <span>August 12, 2020</span>
                </div>
              </div>
            </div>
            {/* Popular Post 2 */}
           <div className="popular-post d-flex">
              <a href="#" className="popular-img">
                <img
                  src={top4}
                  className="img-fluid"
                  alt="Popular Post 2"
                />
              </a>
              <div className="popular-text">
                <h4>
                  <a href="#">Free Template by Colorlib</a>
                </h4>
                <div className="meta">
                  <span>August 12, 2020</span>
                </div>
              </div>
            </div>

            {/* Popular Post 3 */}
            <div className="popular-post d-flex">
              <a href="#" className="popular-img">
                <img
                  src={slider4}
                  className="img-fluid"
                  alt="Popular Post 3"
                />
              </a>
              <div className="popular-text">
                <h4>
                  <a href="#">Behind the word mountains</a>
                </h4>
                <div className="meta">
                  <span>August 12, 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  );
};

export default News;