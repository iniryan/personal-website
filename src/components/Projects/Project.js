import React, { useState, useEffect, useRef } from "react";
import "./Project.css";

import frame1 from "../../assets/petbud.png";
import frame2 from "../../assets/eatapp.png";
import frame3 from "../../assets/thecatalogue.png";
import frame4 from "../../assets/totebag.png";
import frame5 from "../../assets/appspp.png";
import frame6 from "../../assets/chatbotpage.png";
import frame7 from "../../assets/mejapintarpage.png";

import { projectss } from "../ScrolltriggerGsap";

function Project() {
  const [title] = useState({
    title: "Projects",
  });
  const [project] = useState([
    {
      id: 1,
      img: <img src={frame1} alt="project1" />,
      titles: "PetBuddy. Landing Page",
      desc:
        "PetBuddy. is a website concept exploration that helps abandoned pets find new homes for them.",
      used: (
        <ul className="used-items">
          <li className="used-item">Figma</li>
        </ul>
      ),
    },
    {
      id: 2,
      img: <img src={frame2} alt="project2" />,
      titles: "Let's Eat App",
      desc:
        "Let's Eat App is a website concept exploration for Mobile Apps that help people to get their food and beverages.",
      used: (
        <ul className="used-items">
          <li className="used-item">Figma</li>
        </ul>
      ),
    },
    {
      id: 3,
      img: <img src={frame3} alt="project3" />,
      titles: "TheCatalogue. Landing Page",
      desc:
        "TheCatalogue. is a website concept exploration for Mobile Apps that brings concept of fashion e-commerce.",
      used: (
        <ul className="used-items">
          <li className="used-item">Figma</li>
        </ul>
      ),
    },
    {
      id: 4,
      img: <img src={frame4} alt="project4" />,
      titles: "Totebag. Landing Page",
      desc:
        "Totebag. is a website concept exploration that brings new brand products of recycle bag to spread eco friendly mission.",
      used: (
        <ul className="used-items">
          <li className="used-item">Figma</li>
        </ul>
      ),
    },
    {
      id: 5,
      img: <img src={frame5} alt="project2" />,
      titles: "Aplikasi Pembayaran SPP",
      desc:
        "This website is used for the purpose of paying tuition fees and student activities for both public and private schools.",
      used: (
        <ul className="used-items">
          <li className="used-item">PHP</li>
          <li className="used-item">MYSQL</li>
          <li className="used-item">JQuery</li>
        </ul>
      ),
    },
    {
      id: 6,
      img: <img src={frame6} alt="project3" />,
      titles: "Chatbot Prototype",
      desc:
        "Chatbot Prototype is a prototype feature for E-learning website named mejakita.com. This prototype provide chat between user and bot, which help user to get answer for lesson in common.",
      used: (
        <ul className="used-items">
          <li className="used-item">ReactJS</li>
        </ul>
      ),
    },
    {
      id: 7,
      img: <img src={frame7} alt="project1" />,
      titles: "Mejapintar",
      desc:
        "Mejapintar is a E-learning website for student. Which helps student learning through material, video, quiz, and discussion with other student.",
      used: (
        <ul className="used-items">
          <li className="used-item">PHP</li>
          <li className="used-item">Mysql</li>
        </ul>
      ),
    },
  ]);

  let projectcs = useRef(null);
  useEffect(() => {
    projectss(projectcs);
  });

  return (
    <div className="container" id="project" ref={(el) => (projectcs = el)}>
      <div className="wrapper">
        <div className="common">
          <h3 className="title">
            {title.title}
            <span>.</span>
          </h3>
        </div>
        <div className="featured-projects">
          {project.map((info) => (
            <div key={info.id} className="">
              <div className="project">
                <figure className="project-pict">{info.img}</figure>

                <figcaption className="project-caption">
                  <div className="project-name">{info.titles}</div>
                  <p>{info.desc}</p>
                  <div className="used">{info.used}</div>
                </figcaption>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
