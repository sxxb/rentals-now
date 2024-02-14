import React from 'react'
import { Link } from "react-router-dom";
import Data from './Data';
import { useParams } from 'react-router-dom';
import ContactForm from "./Contactform";



export default function Product() {

    const {link} = useParams();
    const productDisplay = Data.find((Data) => Data.link === link)

    if (!productDisplay) {
        return (
            <main>
                <h1>Oops</h1>
                <p>{link} could not be found.</p>
                <Link to=".." relative="path">Click here to go back.</Link>
            </main>
        )
    }
    return (
        <main id={productDisplay.productcode} className='product-view'>
            <div className="product-view-back">
                <Link to=".." relative="path">Back</Link>
            </div>
            <div className="product-view-details">                
                <h1>
                    {productDisplay.name}
                </h1>
                <h2>
                    {productDisplay.descriptionS}
                </h2>
                <h3>
                    {productDisplay.productcode} - {productDisplay.category}
                </h3>
                <div className="contact-link button-link">
                    <a href="#contact-form">Enquire Now</a>
                </div>
            </div>
            <div className="product-view-img">
                <img
                key={productDisplay.imageurl}
                src={productDisplay.imageurl || null}
                className="productImage"
                />
            </div>
            <div className="product-view-price">
                <h2>
                    Available From ${productDisplay.dailyprice}<sup>+GST</sup>
                </h2>
                <h4>Daily Rate - Discounts available for longer terms.</h4>
                <table>
                    <thead>
                        <tr>
                            <th>${productDisplay.dailyprice}<sup>+GST</sup></th>
                            <th>${productDisplay.weeklyprice}<sup>+GST</sup></th>
                            <th>${productDisplay.fortnightlyprice}<sup>+GST</sup></th>
                            <th>${productDisplay.monthlyprice}<sup>+GST</sup></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Same Day</td>
                            <td>Weekly</td>
                            <td>Fortnightly</td>
                            <td>Monthly</td>
                        </tr>
                    </tbody>
                </table>
                <div className="contact-link button-link">
                    <a href="#contact-form">Enquire Now</a>
                </div>
                <h6>
                    <a className="wavecom-link" href={productDisplay.wavecomlink}>Looking to buy instead?</a>
                </h6>
            </div>
            <div className="product-view-desc-l">
                {productDisplay.descriptionL && <p>{productDisplay.descriptionL}</p>}
            </div>
            <div className="product-view-features">
                <h5>Features</h5>
                <ul>
                    {productDisplay.features.map(feature => <li key={feature}>{feature}</li>)}
                </ul>
            </div>
            <div className="product-view-downloads">
                <h5>Downloads</h5>
                {productDisplay.usermanual ? (
                    <>
                    <a href={productDisplay.usermanual}>User Manual</a>
                    </>
                ) : (
                    <></>
                )}

                {productDisplay.datasheet ? (
                    <>
                    <a href={productDisplay.datasheet}>Data Sheet</a>
                    </>
                ) : (
                    <></>
                )}
            </div>
            <div className="product-view-contact-form" id="contact-form">
                <h5>Enquire about renting the {productDisplay.name}</h5>
                <ContactForm product={productDisplay.name}/>
            </div>
        </main>
    );
}