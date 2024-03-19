import { Link } from "react-router-dom";
import ContactForm from "./Contactform";
import Data from './Data';
import { Suspense } from 'react';
import VideoHeader from "./Videoheader";
import Loading from "./Loading";


export default function Home() {
    return (
        <>
        <main id="home" className="home">
            <section className="video-header">
                <Suspense fallback={<Loading />}>
                    <VideoHeader />
                </Suspense>
                <p>TODO: replace this video with one relevant to Wavecom Rentals</p>
            </section>
            <section className="about-rentals-now">
                <h2>About Us</h2>
                <div className="about-line-images">
                    <img src="/img/other/rn-tnt-lines.svg" alt="+" />
                    <img src="/img/other/rn-noise-lines.svg" alt="+" />
                    <img src="/img/other/rn-thermo-lines.svg" alt="+" />
                    <img src="/img/other/rn-noise2-lines.svg" alt="+" />
                </div>
                <p>
                    Rentals Now is coming soon to provide you with affordable and reliable solutions for your test and measurement rental needs.
                </p>
                <p>
                    Wavecom’s renowned range of portable appliance testers will be available for lease for AS/NZS 3760 testing, with a greater range of measurement equipment coming in the near future.
                </p>
                <p>
                    With flexible terms, expert support, and competitive prices, Rentals Now will be your one stop shop for test and measurement solutions.
                </p>
            </section>
            <section className="products-list">
                <div><h2>Our Products</h2></div>
                <div className="products-list-container">
                {
                Data.map(product => (
                    <div key={product.id} id={product.productcode} className="product-listing">
                        <Link to={`/products/${product.link}`}>
                            <div className="product-listing-description">
                                <h3>
                                    {product.name}
                                </h3>
                                <h4>
                                    {product.descriptionS}
                                </h4>
                            </div>
                            <div className="product-listing-image">
                                <img
                                key={product.imageurl}
                                src={`/img/products/${product.imageurl}` || null}
                                />
                            </div>
   
                            <div className="product-listing-price">
                                <h5>
                                    Available From 
                                </h5>
                                <h3>
                                    ${product.dailyprice}<sup>+GST</sup>
                                </h3>
                            </div>
                        </Link>
                    </div>
                ))}
                </div>
            </section>
            {/* <section className="productCategories">Product Categories</section> */}
            <section className="why-rentals-now">
                <h2>Why Rent With Rentals Now?</h2>
                <ul>
                    <li>
                        <h3>Top Quality Products</h3>
                        We offer only the best products that are regularly serviced and calibrated to ensure they operate to the highest standards.
                    </li>
                    <li>
                        <h3>Competitive Prices</h3>
                        Our prices are extremely competitive, offering you the opportunity to use the highest quality test and measurement equipment without the price tag.
                    </li>
                    <li>
                        <h3>Expert Support</h3>
                        We can offer expert support and advice about all our products, to ensure you have the know-how to get your job done. 
                    </li>
                    <li>
                        <h3></h3>
                    </li>
                </ul>
            </section>
            <section className="contact-us">
                <h2>Contact Us</h2>
                <ContactForm />
            </section>
        </main>
        </>
        );
}