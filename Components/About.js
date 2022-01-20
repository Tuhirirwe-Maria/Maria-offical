import React from 'react';

export const About = () => {
  return (
    <section id="about" className="about-mf sect-pt4 route">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="box-shadow-full">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className=" col-1 " style={{width:"200px", height:"200px" }}>
                  {/* <div class="col-sm-6 col-md-5 border" > */}
                      <div className="about-img h-100" >
                        <img src="/Images/maria.png" className="img-fluid rounded b-shadow-a " alt="Maria's picture" style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:"20% 30%"}}/>
                      {/* </div>. */}
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-7 pt-4">
                    <div className="about-info">
                      <p>
                        <span className="title-s">Name: </span>{" "}
                        <span>Maria Tuhirirwe</span>
                      </p>
                      <p>
                        <span className="title-s">Profile: </span>{" "}
                        <span>Front-end developer</span>
                      </p>
                      <p>
                        <span className="title-s">Email: </span>{" "}
                        <span>tuhirirwemaria@gmail.com</span>
                      </p>
                      <p>
                        <span className="title-s">Phone: </span>{" "}
                        <span>+256 750189443</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="skill-mf d-flex justify-content-between w-50 pt-4">
                  <div className=''>
                  <p className="title-s fs-3 ">Skill</p>
                  <p>React JS</p> 
                  <p>Next JS</p> 
                  <p>Bootsrap</p> 
                  <p>JAVASCRIPT</p>
                  <p>HTML</p>
                  
                  </div>
                  <div className=''>
                  <p className="title-s fs-3 ">Tools</p>
                  <p>Git</p> 
                  <p>Trello</p> 
                  <p>Jira</p> 
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-me pt-4 pt-md-0">
                  <div className="title-box-2">
                    <h5 className="title-left">About me</h5>
                  </div>
                  <p className="lead">
                  I am a Ugandan Front-end software developer. I love to build and work with teams to 
                  establish virtual platforms and systems that provide user satisfaction.
                  </p>
                  <p className="lead">
                  The language I most frequently use is JavaScript for now. 
                  I am also very comfortable with version control systems such as GIT as well 
                  as project tracking tools such as Jira and Trello.
                  </p>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
};
