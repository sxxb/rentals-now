import { Link } from "react-router-dom";

export default function VideoHeader() {
    return(
        <>
            <video 
                id="backgroundVideo" 
                autoplay="true" 
                loop="true" 
                muted="true" 
            >
                <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4" />
                Your browser does not support this video - sorry!
            </video>
            <div className="lazy-loader-cover">

            </div>
            <div className="content">
                <h1>Rentals Now</h1>
                <h2>Test & Measurement Solutions</h2>
                <Link className="button-link" to="Contact">Get A Quote</Link>
            </div>
        </>
    )
}