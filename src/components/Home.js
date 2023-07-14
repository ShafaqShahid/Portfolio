import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import hero from "./images/hero.mp4";
import ContactForm from "./ContactForm.js";
import Portfolio from "./Portfolio.js";

const Home = () => {
  
  return (
    <div>
      <Navbar />
      <div id="home">
      <video autoPlay muted loop id="video-background">
          <source src={hero} type="video/mp4" />
        </video>
        <div id="portfolio">
        <div className="project-cards">
      <Portfolio/>
      </div>
        </div>
        <div id="contact">
          <div className="contact">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
