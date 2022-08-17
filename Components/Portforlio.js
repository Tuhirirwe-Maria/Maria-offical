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
            <a href="https://client-photo.vercel.app/" target="_blank" data-gallery="portfolioGallery" className="portfolio-lightbox">
              <div className="work-img">
                <img src="/Images/photo.png" alt="" className="img-fluid"/>
              </div>
            </a>
            <div className="work-content">
              <div className="row">
                <div className="col-sm-8">
                  <h2 className="w-title">Photography</h2>
                  <div className="w-more">
                    <span className="w-ctegory">Next JS</span> - <span className="w-date">Photo website that displays photos </span>
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

        <div className="col-md-4">
          <div className="work-box">
            <a href="https://food-seller-resturant.vercel.app/" target="_blank" data-gallery="portfolioGallery" className="portfolio-lightbox">
              <div className="work-img">
                <img src="https://res.cloudinary.com/awesomeone-maria/image/upload/v1660752968/Screenshot_2022-08-17_at_19.15.07_tzimav.png" alt="image" className="img-fluid"/>
              </div>
            </a>
            <div className="work-content">
              <div className="row">
                <div className="col-sm-8">
                  <h2 className="w-title">Foodii</h2>
                  <div className="w-more">
                    <span className="w-ctegory">Next JS</span> - <span className="w-date">Resturant site</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
   
    </div>
  </section>
    );
}

export default Portforlio;
