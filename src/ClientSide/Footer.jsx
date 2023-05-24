import React from 'react';
import './Footer.css'




const Footer = () => {
    return (
        <div>
            <footer className="mainfooter" role="contentinfo">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                {/* <!--Column1--> */}
                                <div className="footer-pad">
                                    <h4>More Informations</h4>
                                    <ul className="list-unstyled">
                                        <li>Location:Tunis,L'aouina</li>
                                        <li>Number:28 754 647</li>
                                        <li>Email:gamebox@email.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                {/* <!--Column1--> */}
                                <div className="footer-pad">
                                    <h4>Contact Us</h4>
                                    <ul className="list-unstyled">
                                        <li>Fill the form to send us your feedback.</li>
                                        <li><a href="/">Click here.</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                {/* <!--Column1--> */}
                                <div className="footer-pad">
                                    <h4>Categories</h4>
                                    <ul className="list-unstyled">
                                        <li><a href="/">Add Category from the db.</a></li>
                                        <li><a href="/">Add Category from the db.</a></li>
                                        <li><a href="/">Add Category from the db.</a></li>
                                        <li><a href="/">Add Category from the db.</a></li>
                                        <li><a href="/">Add Category from the db.</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h4>Follow Us</h4>
                                <ul className="social-network social-circle">
                                    <li><a href="/" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="/" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 copy">
                                <p className="text-center">&copy; Copyright 2023 - GameBox.  All rights reserved.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer