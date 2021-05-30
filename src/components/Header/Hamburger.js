import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import { Dribbble, Instagram, Facebook, Linkedin } from "../../assets/social-icons";

import {
  staggerReveal,
  staggerRevealClose,
  fadeInUp,
  staggerText,
  handleHover,
  handleHoverExit,
} from "./AnimatedMenu";

const Hamburger = ({state}) => {
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let line0 = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  const handleClick = () => {
    document.documentElement.style.overflow = 'auto';
    // document.documentElement.style.opacity=1;
  }
  
  useEffect(() => {
    if (state.clicked === false) {
      staggerRevealClose(reveal2, reveal1);

      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });

      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });

      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line0, line1, line2, line3);
    }
  }, [state]);

  return (
    <div ref={(el) => (menuLayer = el)} className="hamburger-menu">
      <div
        ref={(el) => (reveal1 = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el) => (reveal2 = el)} className="menu-layer">
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <a
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      onClick={handleClick}
                      ref={(el) => (line0 = el)}
                      href="#services"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      onClick={handleClick}
                      ref={(el) => (line1 = el)}
                      href="#project"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      onClick={handleClick}
                      ref={(el) => (line2 = el)}
                      href="#about"
                    >
                      About me
                    </a>
                  </li>
                  <li>
                    <a
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      onClick={handleClick}
                      ref={(el) => (line3 = el)}
                      href="#contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
              <div ref={(el) => (info = el)} className="info">
                <h3>Social Media</h3>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
