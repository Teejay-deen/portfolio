import React from "react";
import "./About.css";
import profile from "../../assets/Me.jpg";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img className="img" src={profile} alt="" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about_discription">
              I am Jimoh Tajudeen, web developer from Lagos, Nigeria. I have
              rich experience in websites design, building and customization.
            </p>
            <a href="" className="btn">
              {" "}
              Download CV
            </a>
          </div>

          <div className="about__skill grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number development">90%</span>
              </div>

              <div className="skills__bars">
                <span className="skills__percentage"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UIUX Design</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bars">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Photography</h3>
                <span className="skills__number">60%</span>
              </div>

              <div className="skills__bars">
                <span className="skills__percentage"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
