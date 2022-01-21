import Link from 'next/link';
import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"


function Portforlio() {
  useEffect(() => {
    Aos.init({duration :3000 });
    
  }, []);
  return (
    <section id="work" className="portfolio-mf sect-pt4 route" data-aos = "fade-right">
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
            <a href="https://jumia-clone-4fdfe.web.app/" target="_blank" data-gallery="portfolioGallery" className="portfolio-lightbox">
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
            <a href="https://onlineshop-maria.netlify.app/" target="_blank" data-gallery="portfolioGallery" className="portfolio-lightbox">
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
            <a href="https://kakati.netlify.app/index.html" target="_blank" data-gallery="portfolioGallery" className="portfolio-lightbox">
              <div className="work-img">
                <img src="/Images/kakati.png" alt="" className="img-fluid"/>
              </div>
            </a>
            <div className="work-content">
              <div className="row">
                <div className="col-sm-8">
                  <h2 className="w-title">Kakati</h2>
                  <div className="w-more">
                    <span className="w-ctegory">Next JS</span> - <span className="w-date">Bussiness website</span>
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
