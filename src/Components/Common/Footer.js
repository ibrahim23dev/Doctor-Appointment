import React from 'react';
import "./image/newsletter-64.png";
import {Link} from "react-router-dom";
import {BsSearch,BsLinkedin,BsYoutube,BsInstagram,BsFacebook,BsDisc} from "react-icons/bs";
function Footer() {
    return (
        <>
            <footer className="py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-7 align-content-end">
                            <div className="footer-top-data d-flex gap-30 align-items-center">
                                <div className="text-white"><BsDisc/></div>
                                <h4 className="mb-0 text-white text-primary">Sing Up For Newslatter &nbsp;</h4>
                                <div className="col-7">

                                    <div className="input-group d-flex display-4 py-3 col-md-4">
                                        <input type="text" className="form-control" placeholder="Search"
                                               aria-label="Search" aria-describedby="basic-addon2"/>
                                        <span className="input-group-text" id="basic-addon2"> <BsSearch className="fs-3"/>
                                    </span>

                                    </div>

                                </div>

                            </div>
                        </div>
                            <div className="col-7"></div>
                </div>
                </div>
            </footer>
            <footer className="py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h5 className="text-white">Contact Us</h5>
                            <div className="footer-links4">
                                <ol>
                                    <Link className="text-white">Mirpur-1/1216<br/> Section-A Road No.4/House-5</Link>
                                </ol>
                                <ol>
                                    <Link className="text-white">Dhaka, Bangladesh</Link>
                                </ol>
                                <ol>
                                    <Link className="text-white">Email: ibrahim35-640@diu.edu.bd</Link>
                                </ol>
                                <ol>
                                    <Link className="text-white">Tel: +088 01315974775</Link>
                                </ol>
                                <div className="social_icon d-flex align-items-center gap-15">
                                    <a className="gap-4" href=""><BsLinkedin /></a>
                                    <a className="gap-4" href=""><BsInstagram/></a>
                                    <a href=""><BsYoutube/></a>
                                    <a href=""><BsFacebook/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h5 className="text-white">Information</h5>
                            <div className="footer-links4">
                                <ol>
                                    <Link className="text-white">Privacy Policy</Link>
                                </ol>
                                <ol>
                                    <Link className="text-white">Refund Policy</Link>
                                </ol>
                                <ol>
                                    <Link className="text-white">Shipping policy</Link>
                                </ol>
                                <ol>
                                    <Link className="text-white">Terms and Conditions</Link>
                                </ol>
                            </div>
                        </div>
                        <div className="col-3">
                            <h5 className="text-white">Account</h5>
                            <div className="footer-links3">
                                <ol>
                                    <Link className="text-white">Medicine</Link>
                                </ol>
                                <ol>
                                    <Link className="text-white">Emergency</Link>
                                </ol>
                                <ol>
                                    <Link className="text-white">ICU</Link>
                                </ol>
                                <ol>
                                    <Link  className="text-white">CCU</Link>
                                </ol>
                            </div>
                        </div>
                        <div className="col-2">
                            <h5 className="text-white">Quick Links</h5>
                            <div className="footer-links4">
                                <ol>
                                <Link to="/Medicien">Medicine</Link>
                                </ol>
                                <ol>
                                <Link to="/emergency">Emergency</Link>
                                </ol>
                                <ol>
                                <Link to="/icu">ICU</Link>
                                </ol>
                                <ol>
                                <Link to="/ccu">CCU</Link>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-3">
           <div className="container-xxl">
               <div className="row">
                   <div className="col-12">
          <p className="text-center mb-0 text-white">
              &copy;{new Date().getFullYear()}; Powered by Mohammad Ibrahim
          </p>
                   </div>
               </div>
           </div>
            </footer>

        </>
    )
}

export default Footer;