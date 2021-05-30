import React, { useState, useRef, useEffect } from "react";
import "./Contact.css";

import { contactss } from "../ScrolltriggerGsap";

function Contact({map}) {
  const [title] = useState({
    title: "Get In Touch",
  });

  let contactcs = useRef(null);
  useEffect(() => {
    contactss(contactcs);
  });
  
  return (
    <div className="container" id="contact" ref={(el) => (contactcs = el)}>
      <div className="wrapper">
        <div className="common">
          <h3 className="title">
            {title.title}
            <span>.</span>
          </h3>
        </div>
        <div className="contacts">
          <p>
            Let's work together to get new experience and be better to approach
            your goals.
          </p>
          <div className="emailme">
            <a href="mailto:riyanadi552gmail.com">Email Me</a>
          </div>
          <div className="col-12">
            <div className="map">
              <img src={map} alt="javaisland" />
              <div className="big-tooltip">
                <span>Malang, East Java, Indonesia</span>
              </div>
              <div className="location-dot"></div>
              <div className="location-ring"></div>
              <div className="java">java island</div>
              <div className="circle"></div>
              <div className="circle-inside">
                <a href="mailto:riyanadi552@gmail.com">Work with me.</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
