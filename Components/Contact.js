import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"

function Contact() {
    useEffect(() => {
        Aos.init({duration :2000 });
        
      }, []);
  return (
    <section
    id="contact"
    className="paralax-mf footer-paralax bg-image-quote sect-mt4 route"
    style={{ backgroundImage: "url(/Images/sky.jpeg)" }}
    data-aos = "zoom-in-down"
  >
    <div className="overlay-mf" />
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="contact-mf">
            <div id="contact" className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="title-box-2">
                    <h5 className="title-left">Reach me</h5>
                  </div>
                  <div>
                    <form
                    name='Contact'
                      method='POST'
                      data-netlify = "true"
                      action="/success"
                      onSubmit="submit"
                      role="form"
                      className="php-email-form"
                    >
                      <input type="hidden" name="form-name" value="contact-form" />

                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              id="name"
                              placeholder="Your Name"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder="Your Email"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              id="subject"
                              placeholder="Subject"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              name="message"
                              rows={5}
                              placeholder="Message"
                              required
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-md-12 text-center my-3">
                          <div className="loading">Loading</div>
                          <div className="error-message" />
                          <div className="sent-message">
                            Your message has been sent. Thank you!
                          </div>
                        </div>
                        <div className="col-md-12 text-center">
                          <button
                            type="submit"
                            value="Submit"
                            className="button button-a button-big button-rouded"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="title-box-2 pt-4 pt-md-0">
                    <h5 className="title-left">Get in Touch</h5>
                  </div>
                  <div className="more-info">
                    <p className="lead">
                  
                    </p>
                    <ul className="list-ico">
                      <li>
                        <span className="bi bi-geo-alt" /> Kampala, Uganda
                    
                      </li>
                      <li>
                        <span className="bi bi-phone" /> +256 750189443
                      </li>
                      <li>
                        <span className="bi bi-envelope" /> tuhirirwemaria@gmail.com
                      </li>
                    </ul>
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

export default Contact;
