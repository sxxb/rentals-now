import { Link } from "react-router-dom";
import ContactForm from "./Contactform";
import Data from './Data'

export default function Home() {
    return (
        <>
        <main id="home" className="home">
            <section className="video-header">
                <i>video background</i>
                <h1>Rentals Now</h1>
                <h2>Test & Measurement Solutions</h2>
                <Link className="button-link" to="Contact">Get A Quote</Link>
            </section>
            <section className="products-list">
                <div><h2>Our Products</h2></div>
                <div>
                {
                Data.map(product => (
                    <div key={product.id} id={product.productcode} className="product-listing">
                        <Link to={product.link}>
                            <div className="product-listing-image">
                                <img
                                key={product.imageurl}
                                src={product.imageurl || null}
                                />
                            </div>
                            <div className="product-listing-description">
                                <h1>
                                    {product.name}
                                </h1>
                                <h2>
                                    {product.descriptionS}
                                </h2>
                            </div>
                            <div className="product-listing-price">
                                <h2>
                                    Available From 
                                </h2>
                                <h1>
                                    ${product.dailyprice}<sup>+GST</sup>
                                </h1>
                            </div>
                        </Link>
                    </div>
                ))}
                </div>
            </section>
            {/* <section className="productCategories">Product Categories</section> */}
            <section className="why-rentals-now">
                <h2>Why Rent With Rentals Now?</h2>
                <div>
                    <p>We guarantee our products work.</p>
                    <p>We have great prices.</p>
                    <p>We will support you.</p>
                </div>
            </section>
            <section className="contact-us">
                <h2>Contact Us</h2>
                <ContactForm />
            </section>
        </main>
        </>
        );
}