import { Link } from 'react-router-dom';
import Data from './Data'

export default function Products() {
    return(
        <main className="products">
            <h1>Products</h1>
            <div>
                {
                Data.map(product => (
                    <div key={product.id} id={product.productcode} className="product-listing">
                        <Link to={product.link}>
                            <div className="product-listing-image">
                                <img
                                key={product.imageurl}
                                src={`/img/products/${product.imageurl}` || null}
                                />
                            </div>
                            <div className="product-listing-description">
                                <h1>
                                    {product.name}
                                </h1>
                                <h3>
                                    {product.category}
                                </h3>
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
        </main>
    );
}