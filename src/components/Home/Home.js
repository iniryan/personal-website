import React, { useRef, useEffect }from "react";
import "./Home.css";

import { Fluid } from "../../assets/social-icons";
import { homess } from "../ScrolltriggerGsap";

function Home({me}) {

  let homecs = useRef(null);
  useEffect(() => {
    homess(homecs);
  });
  
  return (
    <div className="container" id="home" ref={(el) => (homecs = el)}>
      <div className="wrapper">
        <div className="home">
          <div className="text-role">UI/UX Designer.</div>
          <div className="content">
            <h6 id="name">Hi, my name is Ryan Adi Saputra</h6>
            <h3>
              <div className="content-line">
                <div className="">
                  I create <span>design</span> that can help your{" "}
                  <span>business</span> grow.
                </div>
              </div>
            </h3>
            <p className="p">
              I have a passion for creating user experience and user interface
              that are efficient, meaningful, impactful, and creative.
            </p>
            <div className="intro-contact">
              <span>GET IN TOUCH</span>
              <span>
                <a
                  href="mailto:riyanadi552@gmail.com"
                  className="highlight-link"
                >
                  riyanadi552@gmail.com
                </a>
              </span>
            </div>
            <div className="fluid">
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <Fluid />
                <div className="loader"></div>
              </div>
          </div>
          <div className="hero-images">
            <img src={me} alt="me" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
