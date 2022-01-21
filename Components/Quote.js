import React from 'react';

function Quote() {
  return (
<div
  className="testimonials paralax-mf bg-image-quote"
  style={{ backgroundImage: "url(/Images/sky.jpeg)", width:"100%" }}
>
  <div className="overlay-mf" />
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div
          className="testimonials-slider swiper"
          data-aos="fade-up"
          data-aos-delay={100}
        >
                <div className="content-test  testimonial-box">
                <div className="author-test">
                      <span className="author">Favorite Quote</span>
                    </div>
                  <p className="description lead">
                  I'm better than I was yesterday but not as good as I ill be tomorrow.
                  </p>
                </div>
              </div>
            </div>
          
        </div>
       
      </div>
    </div>


  )
}

export default Quote;
