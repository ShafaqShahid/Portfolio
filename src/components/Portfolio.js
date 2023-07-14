import React from 'react';
import project3 from "./images/project3.png";
import project4 from "./images/project4.png";
import myVideo from "./images/BM.mp4";
import Zamin from "./images/Zamin.mp4";
import quranInsights from "./images/QuranInsight.mp4";
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="project-cards">
      <div className="project-card">
        <div className="video-container">
          <video autoPlay muted loop id="video-background">
            <source src={myVideo} type="video/mp4" />
          </video>
          <div className="play-button" id="play-button">
            <i className="fas fa-play"></i>
          </div>
        </div>
        <h3>Bakhtwar Mehmood Website</h3>
        <p>
        Introducing Bakhtawar Mehmood's personal website, developed using a combination of HTML, CSS, JavaScript, jQuery, PHP, and MySQL. This website serves as a platform for showcasing her details and achievements. With an intuitive admin side, Bakhtawar can easily modify the website's content to her preference. Additionally, the website incorporates SEO feature."       
         </p>
      </div>
      
      <div className="project-card">
        <div className="video-container">
          <video autoPlay muted loop id="video-background-zamin">
            <source src={Zamin} type="video/mp4" />
          </video>
          <div className="play-button" id="play-button-zamin">
            <i className="fas fa-play"></i>
          </div>
        </div>
        <h3>Zamin Women Safety App</h3>
        <p>
          I'm thrilled to showcase my recent semester project of the Android app Zamin, a women safety app that I've developed. Zamin goes beyond emergency situations and serves as a proactive safety measure. With just one click, users can establish immediate communication, preventing mistreatment and providing assistance.
        </p>
      </div>
      <div className="project-card">
        <div className="video-container">
          <video autoPlay muted loop id="video-background-quranInsights">
            <source src={quranInsights} type="video/mp4" />
          </video>
          <div className="play-button" id="play-button-quranInsights">
            <i className="fas fa-play"></i>
          </div>
        </div>
        <h3>Quran Insights</h3>
        <p>
        This video showcases my recent semester project developed using Spring Boot. Quran Insights is a comprehensive collection of Quranic ayat and hadith, providing users with the ability to search for their desired ayah or hadith. The project allows the admin to efficiently manage the addition, updating, and deletion of ayat and hadith entries.        </p>
      </div>
      <div className="project-card">
        <img src={project3} alt="Project 3" />
        <h3>Mehman Web Prototype</h3>
        <p>
          Introducing Mehmaan, an updated virtual hotel management system. Streamlined bookings, improved communication, and advanced features like Virtual Room Tours and a Refer & Earn program enhance the user experience. Mehmaan aims to regain business success by providing a reliable, user-friendly platform that maximizes efficiency and customer satisfaction.
        </p>
      </div>
      <div className="project-card">
        <img src={project4} alt="Project 3" />
        <h3>Mehman Mobile App Prototype</h3>
        <p>
          Introducing Mehmaan, an updated virtual hotel management system. Streamlined bookings, improved communication, and advanced features like Virtual Room Tours and a Refer & Earn program enhance the user experience. Mehmaan aims to regain business success by providing a reliable, user-friendly platform that maximizes efficiency and customer satisfaction.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Portfolio;
