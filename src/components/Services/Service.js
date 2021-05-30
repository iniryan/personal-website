import React, { useEffect, useRef, useState } from "react";
import "./Service.css";

import {
  FaRegWindowMaximize,
  FaRegCreditCard,
  FaMobileAlt,
} from "react-icons/fa";

import { servicess } from "../ScrolltriggerGsap";

function Service() {
  const [title] = useState({
    title: "Services",
  });
  const [state] = useState([
    {
      id: 1,
      icon: <FaRegWindowMaximize className="commonIcons" />,
      heading: "Web Development",
      text:
        "I'm able to develop website in any role, either frontend or backend.",
    },
    {
      id: 2,
      icon: <FaRegCreditCard className="commonIcons" />,
      heading: "Web Design",
      text:
        "I'm able to create web design and use it to empower people accomplish their goals.",
    },
    {
      id: 3,
      icon: <FaMobileAlt className="commonIcons" />,
      heading: "Mobile UI Design",
      text:
        "I'm also able to create mobile design too because design is interesting.",
    },
  ]);

  let servicecs = useRef(null);
  useEffect(() => {
    servicess(servicecs);
  });
  
  return (
    <div className="container" id="services" ref={(el) => (servicecs = el)}>
      <div className="wrapper">
        <div className="common">
        <h3 className="title">{title.title}<span>.</span></h3>
        </div>
        <div className="services">
          {state.map((info) => (
            <div key={info.id} className="col-4">
              <div className="services-content">
                {info.icon}
                <div className="services-content-title">{info.heading}</div>
                <div className="services-content-p">{info.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
