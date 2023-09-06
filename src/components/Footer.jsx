import React from 'react';
import "./footer.css" ;
import google from "../assets/G.jpg"
import pay from "../assets/pay.png"
import logo from "../assets/log2.png"
import './subfooter.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
    return (
        <div className="tab">
            <div className="S1">
                <img className="LOG1" src={logo} alt="l" height="50px" width="80px" />
                <h3>Contact</h3>
                <p>
                    <span className=' text-[gold]'>Address:</span>562 wellington Road,Street32,San Fancisco <br />
                    <span className=' text-[gold]'>Phone:</span>+01222538/(+91)01256983 <br />
                    <span className=' text-[gold]'>Hours:</span>10:00-18:00, Mon-Sat
                </p>
                <h5>Follow Us</h5>
                <div className="icon">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                </div>
            </div>
            <div className="S2">
                <ul>
                    <h3>About</h3>
                    <li><a href="i.html">About Us</a></li>
                    <li><a href="#">Delivery Information</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & conditions</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div className="S3">
                <ul>
                    <h3>My Account</h3>
                    <li><a href="#">Sign In</a></li>
                    <li><a href="#">View Cart</a></li>
                    <li><a href="#">My Wishlist</a></li>
                    <li><a href="#">Track my order</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </div>
            <div className="S4">
                <h3 className=' mt-4'>Install App</h3>
                <p className=' mt-3'>From App store or Google Play</p>
                <img src={google} alt="" height="60px" width="200px" />
                <p className=' mt-3'>Secured Payment Gateway</p>
                <img src={pay} alt="" height="60px" width="200px" />
            </div>
        </div>
    );
}

export default Footer;


export const SubFooter = () => {
    return (
      <div className="wrapper">
      <div className="SEC">
        <div className="SEC1">
          <h2>Sign Up For Newsletters</h2>
          <p>
            Get E-mail Updates for our latest shop and <span>Special Offers.</span>
          </p>
        </div>
        <div className="SEC2">
          <div className="SEC3">
            <input
              type="email"
              name=""
              id="EMAIL"
              placeholder="Your email address"
              style={{
                width: '350px',
                height: '51px',
                borderRadius: '25px 0px 0px 25px',
                border: '1px solid white',
                textIndent: '20px',
              }}
            />
            <div className="BUTTON">
              <a href="#" onClick={()=>toast.success('email Updated Succesfully for Special Offers.', {
                position : toast.POSITION.TOP_RIGHT
              })}>Sign Up</a>
            </div>
           
          </div>
        </div>
      </div>
        </div>
    );
  };

