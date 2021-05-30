import React, { useRef, useEffect} from "react";
import "./Footer.css";

import {
  Dribbble,
  Instagram,
  Facebook,
  Linkedin,
} from "../../assets/social-icons";

import { footerss } from "../ScrolltriggerGsap";

function Footer() {

  let footercs = useRef(null);
  useEffect(() => {
    footerss(footercs);
  });
  
  return (
    <div className="container" id="footer" ref={(el) => (footercs = el)}>
      <div className="wrapper">
        <div className="foot">
          <div className="contactme">
            <div className="social">
                  <a href="https://instagram.com/iniryanaja" aria-label="instagram">
                    <Instagram />
                  </a>
                  <a href="https://www.facebook.com/ryan.adi.7906" aria-label="facebook">
                    <Facebook />
                  </a>
                  <a href="https://www.linkedin.com/in/ryan-adi-0b058b1b3" aria-label="linkedin">
                    <Linkedin />
                  </a>
                  <a href="https://dribbble.com/iniryan" aria-label="dribbble">
                    <Dribbble />
                  </a>
            </div>
            <div className="social-text">
              <ul>
                <li>
                  <a href="https://instagram.com/iniryanaja">Instagram</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/ryan.adi.7906">Facebook</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ryan-adi-0b058b1b3">Linkedin</a>
                </li>
                <li>
                    <a href="https://dribbble.com/iniryan">Dribbble</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer">
            <div className="copy">Ryan Adi Saputra &copy; 2020 </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
