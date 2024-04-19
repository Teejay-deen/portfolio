import React from "react";
import "./Home.css";
import profile from "../../assets/Me.jpg";
import HeaderSocial from "./HeaderSocial";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={profile} alt="" className="home__img" />
        <h1 className="home__name">Jimoh Tajudeen Olanrewaju</h1>
        <span className="home__education">I am a Frontend Developer</span>
        <HeaderSocial />

        <a href="#contact" className="btn">
          Hire Me
        </a>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
