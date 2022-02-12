import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"

function More() {
    useEffect(() => {
        Aos.init({duration :1000 });
        
      }, []);
  return (
    <section id="more" >
    <div className="container pt-5">
      <div className="row">
        <div className="col-sm-12">
          <div className="title-box text-center">
            <h3 className="title-a">
              More about me
            </h3>
           
            <div className="line-mf"></div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-evenly">
        <div className="col-md-4" data-aos = "flip-right">
          <div className="work-box">
            <a href="https://tuhirirwemaria.medium.com/" target="_blank" data-gallery="portfolioGallery" className="portfolio-lightbox">
              <div className="work-img">
                <img src="/Images/Medium.jpeg" alt="medium logo"  className="img-fluid"/>
              </div>
            </a>
            
          </div>
        </div>
       
        <div className="col-md-4" data-aos = "flip-left">
          <div className="work-box">
            <a href="https://github.com/Tuhirirwe-Maria" target="_blank" data-gallery="portfolioGallery" className="portfolio-lightbox">
              <div className="work-img">
                <img src="/Images/Github.jpeg" alt="github logo"className="img-fluid"/>
              </div>
            </a>
          
          </div>
        </div>
        <div className="col-md-4" data-aos = "flip-left">
          <div className="work-box">
            <a href="https://dev.to/tuhirirwemaria" target="_blank" data-gallery="portfolioGallery" className="portfolio-lightbox">
              <div className="work-img">
                <img src="/Images/dev.png" alt="github logo"className="img-fluid"/>
              </div>
            </a>
          
          </div>
        </div>


      </div>
 
    </div>
  </section>
  )
}

export default More;
