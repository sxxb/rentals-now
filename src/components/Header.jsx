import { Link } from "react-router-dom";
import rentalsNowLogoAlt2 from '/public/img/logo/rentals-now-alt-2-logo.svg';

export default function Header() {
    return (
        <header id="header" className="header">
            <nav>
                <Link to="/" id="headerLogo">
                    <img src={rentalsNowLogoAlt2} alt="Rentals Now" />
                </Link>
                <ul>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/Howitworks">How It Works</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}