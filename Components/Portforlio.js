import Link from 'next/link';
import React from 'react';

function Portforlio() {
  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="title-box text-center">
            <h3 className="title-a">
              Projects
            </h3>
           
            <div className="line-mf"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="work-box">
            <a href="assets/img/work-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
              <div className="work-img">
                <img src="/Images/jumia.png" alt="" className="img-fluid"/>
              </div>
            </a>
            <div className="work-content">
              <div className="row">
                <div className="col-sm-8">
                  <h2 className="w-title">Jumia clone</h2>
                  <div className="w-more">
                    <span className="w-ctegory">HTML and CSS</span> - <span className="w-date">Cloned ecomerce store from the original Jumia website </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="work-box">
            <a href="/Images/shop.png" data-gallery="portfolioGallery" className="portfolio-lightbox">
              <div className="work-img">
                <img src="/Images/shop.png" alt="" className="img-fluid"/>
              </div>
            </a>
            <div className="work-content">
              <div className="row">
                <div className="col-sm-8">
                  <h2 className="w-title">Online store</h2>
                  <div className="w-more">
                    <span className="w-ctegory">React JS</span> - <span className="w-date">Ecomerce store for gadgets</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="work-box">
            <a href="assets/img/work-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
              <div className="work-img">
                <img src="/Images/Bikes.png" alt="" className="img-fluid"/>
              </div>
            </a>
            <div className="work-content">
              <div className="row">
                <div className="col-sm-8">
                  <h2 className="w-title">Mbikes</h2>
                  <div className="w-more">
                    <span className="w-ctegory">Next JS</span> - <span className="w-date">Website for bikes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      <div className='d-flex justify-contect-center pb-4'>
          <Link href = "">
      <button className='btn btn-primary m-auto'> <a> View More</a> </button>
      </Link>
      </div>
    </div>
  </section>
    );
}

export default Portforlio;
