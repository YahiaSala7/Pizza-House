import React, { Component } from "react";
import ph from "../imgs/Landing/pizza22.jpg";
import './Contact.css';
import '../general.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";
import Header from "../HomePage/Header/Header";
import Footer from "../HomePage/Footer/Footer";
import ScrollUp from "../ScrollUp/ScrollUp";


class Contactus extends Component {
  render() {
    return (
      <div>
        <Header  />
        <div className="headerr">
          <h1>Contact us </h1>
        </div>
        <div className="contenet">
          <div className="formhidding">
            <h1>GetInTouch</h1>
          </div>
          <form>
            <div className="form">
              <input
                type={text}
                name="Name"
                placeholder="Your Name"
                className="form-input"
              />
              <input
                type={text}
                name="Email"
                placeholder="Your Email"
                className="form-input"
              />
              <input
                type={text}
                name="Address"
                placeholder="Your Address"
                className="form-input"
              />
              <input
                type={text}
                name="Phone"
                placeholder="Your Phone"
                className="form-input"
              />
              <textarea
                name="Message"
                placeholder="Message"
                className="message"
              />
              <button className="button">Contact Us</button>
            </div>
          </form>

          <div className="sidebarr">
            <div className="boxes">
              <div className="box">
                <h3>Get social</h3>
                <div className="icons">
                  <ul>
                    <li>
                      <a href="#">
                        {" "}
                        <FontAwesomeIcon icon={faFacebook} className="icon" />{" "}
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        <FontAwesomeIcon icon={faGooglePlusG}   className="icon"/>{" "}
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        <FontAwesomeIcon icon={faTwitter}  className="icon" />{" "}
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        <FontAwesomeIcon icon={faInstagram}  className="icon"/>{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="box">
                <h3>Phone</h3>
                <div className="paragraph">
                  <FontAwesomeIcon icon={faPhone} className="sideico" />
                  <p>01148956841</p>
                </div>
                <div className="box">
                  <h3>Email</h3>
                  <div className="paragraph">
                    <FontAwesomeIcon icon={faEnvelope} className="sideico" />
                    <p>mz@yahoo.com</p>
                  </div>
                  <div className="box">
                    <h3>Address</h3>
                    <div className="paragraph">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="sideico"
                      />
                      <p>6036 Richmond hwy., Alexandria, VA, 2230</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollUp/>
        <Footer  />
        </div>
    );
  }
}

export default Contactus;
