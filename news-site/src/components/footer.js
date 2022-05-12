import react from "react";
import image from './images/logo_light.png'

const Footer = () => {
    return (
        <div>
            <footer>
        <div>
           <a><img src={image} alt="logo_image" /></a>
           <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea impedit libero, beatae animi provident nesciunt molestias ipsam nemo ad. </p>
        </div>
        <div>
            <h3>Sign-up for our Newsletter</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea impedit libero, beatae animi provident nesciunt molestias ipsam nemo ad. </p>
            {/* <input type="email" name="" placeholder="enter your email" id=""><span><button class="footer-button" >Subscribe</button></span> */}
        </div>
        <div className="footer-items">
            <h3>Connect with Us!</h3>
            <ul>
                <a><li>Contact</li></a>
                <a><li>Careers</li></a>
                <a><li>Subscriptions</li></a>
                <a><li>Help</li></a>
            </ul>
        </div>
    </footer>
        </div>
    )
}

export default Footer;