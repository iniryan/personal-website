import React, { useState, useRef, useEffect } from "react";
import "./About.css";
import pdf from "../../assets/Portfolio-RyanAdiSaputraNew.pdf";

import { aboutss } from "../ScrolltriggerGsap";

function About({ aboutme }) {
  const [title] = useState({
    title: "About me",
    subtitle: "Skills",
    download: "DOWNLOAD MY CV HERE",
  });

  let aboutcs = useRef(null);
  useEffect(() => {
    aboutss(aboutcs);
  });

  return (
    <div className="container" id="about" ref={(el) => (aboutcs = el)}>
      <div className="wrapper">
        <div className="common" id="about">
          <h3 className="title">
            {title.title}
            <span>.</span>
          </h3>
        </div>
        <div className="about">
          <div className="col-12 col-lg-6">
            <img className="person" src={aboutme} alt="img-me" />
          </div>
          <div className="col-12 col-lg-6">
            <p className="aboutme-p">
              Hi, My name is<strong> Ryan</strong>, I am a college student majoring in software engineering.
              I am very enthusiastic about software development and UI / UX design. Gradually gaining experience and structuring my knowledge.
              I always feel challenged to work on new projects and I am highly dedicated to my work.
              I have a passion for creating user experience that are efficient, meaningful, and impactful.
              Understanding the human experience is essential for creating
              useful and effective products. I enjoy using my ability to empower
              people to accomplish their goals. I like create user interface and
              user experience that make life easier.
            </p>
            <p className="aboutme-p">
              My experience in UI/UX Designer & Website Developer started when I
              decided to take software engineering as my competency when entered{" "}
              <strong>Vocational High School 4 Malang</strong>. I learn about
              UI/UX Designer & Website Developer for at least 2 years. I was
              intern at <strong>Ministry Of State Secretariat RI</strong> as a graphic designer. And after that, I'm was intern at{" "}
              <strong>PT. MejaKita Edunusa Mandiri</strong> as UI/UX Designer.
            </p>
            <p className="aboutme-p">
              I enjoy watching Youtube when learn about UI/UX Designer & Website
              Developer. My favorite channels are{" "}
              <i>Wrong Akram, Online Tutorials, Mas KukuhAldy,</i> and many
              more. In my spare time, I enjoy watching movies, read comics, and
              listening music.
            </p>
          </div>
          <div className="btn-cv">
            <div className="interest">
              <div className="title">Interested working with me?</div>{" "}
              <a href={pdf}>{title.download}</a>
            </div>
          </div>
          <div className="col-12 top">
            <div className="common" id="skill">
              <h3 className="title">
                <span>.</span>{title.subtitle}
              </h3>
            </div>
            <div className="skills">
              <button className="skill btn-skill btn-pill" id="html">
                HTML
              </button>
              <button className="skill btn-skill btn-pill" id="css">
                CSS
              </button>
              <button
                className="skill btn-skill btn-pill"
                id="javascript"
              >
                Javascript
              </button>
              <button className="skill btn-skill btn-pill" id="php">
                PHP
              </button>
              <button className="skill btn-skill btn-pill" id="sql">
                MySQL
              </button>
              <button className="skill btn-skill btn-pill" id="react">
                React js
              </button>
              <button
                className="skill btn-skill btn-pill"
                id="photoshop"
              >
                Photoshop
              </button>
              <button className="skill btn-skill btn-pill" id="figma">
                Figma
              </button>
              <button
                className="skill btn-skill btn-pill"
                id="illustrator"
              >
                Illustrator
              </button>
              <button className="skill btn-skill btn-pill" id="corel">
                CorelDraw
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
