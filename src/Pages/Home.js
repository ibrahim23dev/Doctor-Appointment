import React from 'react';
import "../Asset/Css/home.css";
import img1 from "./images/main_banner1.jpg"
import img2 from "./images/main_banner_2.png";
import img3 from "./images/main_banner_3.jpg";
import {Link, NavLink} from "react-router-dom";





const Home =()=> {
    return (
        <>
          <div>
              <section>
                  <div className="container-xxl">
                      <div className='row'>
                      <div className="col-12">
                          <div>
                          <img src={img1} className="banner-1"/>
                          </div>
                                  <div className="main-banner-content position-absolute  ">
                                      <NavLink className="text-white" to="/vform"> <button className="d-flex space-left2 btn btn-primary">Video consultation</button><br/></NavLink>

                                      <NavLink className="text-white" to="/oform"> <button className="d-flex btn btn-secondary">Get a Second Opinion</button></NavLink>
                                  </div>

                      </div>


                      </div>
                  </div>

              </section>

              <section>
                  <h3 className="Overview text-center  text-primary">Overview</h3>
                  <p className="para container-xxl">Thousands of International patients visit Manipal Hospitals
                      in India for medical treatment every year. The patients travel to our hospitals for
                      sophisticated heart surgery, cancer treatment, organ transplantation, treatment for infertility,
                      orthopaedic surgery, neurology, treatment for kidney diseases, and general health check-up. Book an appointment for
                      the best treatment.<br/><br/>

                      Manipal Hospitals is at the forefront of medical tourism in India. We provide world-class treatment by qualified surgeons and specialists at less than half the cost of that in developed nations. With a network of more than 28 hospitals across 15+ cities in India, we are the first choice for International patients. We offer full support and assistance at every step of the treatment right from enquiry to visa assistance and accommodation
                      for patients from outside India so that they can get quality treatment without any worries</p>
              </section>
              <section className="section-3">
                  <h3 className=" manipal-experience text-center text-white "> <b>The Manipal Experience </b></h3>
                  <div className="container-xxl">
                      <div className="row">
                          <div className="home-padding">
                              <div className="row old-row justify-content-center">
                                  <div className="col-md-12 col-lg-12">
                                      <div
                                           className="btn-group nav nav-tabs border-0 justify-content-center align-items-center">
                                          <a href="/" data-toggle="tab" className="experience-tabs text-center active">Success
                                              Stories</a> <a href="/" data-toggle="tab"
                                                             className="experience-tabs text-center ">Doctor’s Speak</a> <a
                                          href="/" data-toggle="tab" className="experience-tabs text-center ">Blogs</a>
                                          <a href="/" data-toggle="tab" className="experience-tabs text-center  ">Social
                                              media</a></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div>

                  </div>

                  <div className="vedio container-xxl ">
                      <div className="row">
                          <div className="col-4">
                              <video width="320" height="240" controls/>
                              <source src="" type="video/mp4"/>
                              <source src="" type="video/ogg"/>

                          </div>
                          <div className="col-3">
                              <video width="320" height="240" controls/>
                              <source src="" type="video/mp4"/>
                              <source src="" type="video/ogg"/>
                          </div>
                          <div className="col-2">
                              <video width="320" height="240" controls/>
                              <source src="" type="video/mp4"/>
                              <source src="" type="video/ogg"/>

                          </div>

                      </div>
                  </div>

                      <div className="text-center pt-4">
                          <a className="home-see-all-btn"
                             href="">View All</a>
                      </div>

              </section>
<section>
    <h4 className="section-4 text-center "> <b>Centre of Excellence</b></h4>
    <div className="container">
        <div className='row'>
            <div className='col-4'>
            <h1>hello</h1>
            </div>
        </div>

        </div>
        <div className="container">
            <div className='row'>
                <div className='col-4'>
                    <h1>hello</h1>
                </div>


            </div>
            <div className="container">
                <div className='row'>
                    <div className='col-4'>
                        <h1>hello</h1>
                    </div>
                </div>
            </div>

        </div>

</section>

          </div>
        </>
    );
};
export default Home;