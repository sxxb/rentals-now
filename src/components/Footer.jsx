import { Link } from "react-router-dom";
import React from "react";

export default function Footer() {
    return (
        <footer id="footer" className="footer">
            <section className="footer-top">
                <div className="footer-top-quarter">
                    <div className="footer-logo-container">
                        <img src="/public/img/logo/rentals-now-alt-1-logo-text-only.svg" alt="Rentals Now" />
                    </div> 
                </div>
                <div className="footer-top-quarter">
                    <nav>
                        <h4>Contact Us</h4>
                        <ul>
                            <li>
                                <Link to="/Contact">Contact Form</Link>
                            </li>
                            <li>
                                <a href="https://maps.app.goo.gl/b7qPSEQZRnftQnNYA" target="_blank">
                                    257 Grange Road,<br /> Findon, SA 5023
                                </a>
                            </li>
                            <li>
                                <a href="tel:+61882433500" target="_blank">
                                    08 8243 3500
                                </a>
                            </li>
                            <li>
                                <a href="mailto:sales@rentals-now.com.au" target="_blank">
                                    sales@rentals-now.com.au
                                </a>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
                <div className="footer-top-quarter">
                    <nav>
                        <h4>Rentals</h4>
                        <ul>
                            <li>
                                <Link to="/products">Products</Link>
                            </li>
                            <li>
                                <Link to="/agreement">Rental Agreement</Link>
                            </li>
                            <li>
                                <Link to="/How-It-Works">How It Works</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="footer-top-quarter">
                    <nav>
                        <h4>Terms & Conditions</h4>
                        <ul>
                            <li>
                                <Link to="/disclaimer">Disclaimer</Link>
                            </li>
                            <li>
                                <Link to="/returns">Returns & Refunds</Link>
                            </li>
                            <li>
                                <Link to="/shipping">Shipping Policy</Link>
                            </li>
                            <li>
                                <Link to="/terms">Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link to="/privacy">Privacy Statement</Link>
                            </li>
                        </ul>
                    </nav>
                </div> 
            </section>
            <section className="footer-bottom">
                <ul>
                    <li id="footer-bottom-wavecom">
                        <a href="https://www.wavecom.com.au" target="_blank">Wavecom</a>
                    </li>
                    <li id="footer-bottom-winpats">
                        <a href="https://www.winpats.app" target="_blank">WinPATS</a>
                    </li>
                    <li id="footer-bottom-copyright">
                        <h5>&copy; {new Date().getFullYear()} Wavecom Pty. Ltd.</h5>
                    </li>
                    <li id="footer-bottom-calibrations">
                        <a href="https://www.wavecom.com.au/calibrations.php" target="_blank">Calibrations</a>
                    </li>
                    <li id="footer-bottom-rentals">
                        <Link to="/">Rentals Now</Link>
                    </li>
                </ul>
            </section>
        </footer>
    )
}