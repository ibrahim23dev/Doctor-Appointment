import React from 'react';

import {Link, NavLink} from "react-router-dom";
import {BsSearch } from "react-icons/bs";
const Header = () => {
    return (
        <>
            <header className="header-top-strip py-1">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-5">
                            <p className="text-white mb-0">
                                <h3>Doctor</h3>
                            </p>
                        </div>
                        <div className="col-6">
                            <p className="text-white mb-0">
                                <h6 className="text-end">
                                Hotline:  <a href="+880 1315974775">+880 1315974775</a>
                                </h6>
                            </p>
                        </div>
                    </div>
                </div>

            </header>

            <header className="header-upper py-0">
                <div className="container-xxl">
                    <div className="row">
                        <div className='col-2'>
                            <h3 className="text-white text-end">
                                <Link to="/">Hospital.</Link>
                            </h3>
                        </div>
                        <div className="col-5">

                            <div className="input-group  py-1">
                                <input type="text" className="form-control" placeholder="Search"
                                       aria-label="Search" aria-describedby="basic-addon2"/>
                                    <span className="input-group-text" id="basic-addon2"> <BsSearch className="fs-3"/>
                                    </span>
                            </div>

                        </div>
                    </div>
                </div>

            </header>
            <header className="header-uapper-link py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-links ">
                                <div className="menu-buttom d-flex align-items-center gap-4">
                                    <NavLink className="text-white" to="/home">Home</NavLink>
                                    <NavLink className="text-white" to="/patients">Patients</NavLink>
                                    <NavLink className="text-white" to="/meet">Appointments</NavLink>
                                    <NavLink className="text-white" to="/doctor">Doctors</NavLink>
                                    <NavLink className="text-white" to="/">Reports</NavLink>
                                    <NavLink className="text-white" to="/room/:roomId">Contact</NavLink>
                                    <NavLink className=" text1 text-end text-white " to="/login">Login</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
export default Header;
