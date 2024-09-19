import React from 'react';
import './AboutMe.css'; 
import './button.css';

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="about-me-text">
        <h1>About Me</h1>
        <p>
        Hello! I'm Anass, a soon-to-be graduate in Software Engineering. Throughout my academic journey, I've garnered valuable work experience and completed a number of impactful projects. My passion for coding and innovative problem-solving drives me to develop cutting-edge solutions. Whether it's creating robust applications or exploring the latest in automotive technology, I am always eager to learn and grow in the tech world.
        </p>
        <div class="d-grid gap-5 d-md-flex justify-content-md-center">
        <a href="./assets/images/english_software_anass.pdf" download="Anass Mrizig's Resume.pdf" target='blank'>
          <button type="button" class="glowing-btn">Download Resume</button>
      </a>
      <a href="https://wa.me/+212605177940" target='blank'> <button href="" class="glowing-btn " type="button">Hire Me</button></a>
        </div>
      </div>
      <div >
        <img className='img' src={require("./assets/images/photo_2024-06-29_08-08-57.jpg")} alt=''/>
      </div>
      
    </div>
  );
};

export default AboutMe;
