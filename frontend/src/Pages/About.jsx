import React from "react";
import Myimg from '../images/about.png';

function About() {
  return (
    <div className="About-Container">
      <div className="image-container">
        <img src={Myimg} alt='MYIMAGE' className="myimg" />
      </div>
      <div className="text-container">
        <p className="text">
          I was born in New Delhi, India, and later moved to Bhubaneswar for college. Studying Electronics and Telecommunication at Kalinga Institute of Technology, my passion for photography began at the young age of 10. Capturing moments and expressing creativity through the lens became a lifelong pursuit.<br></br> <br></br> I strive to tell stories, evoke emotions, and share my unique perspective through visually captivating narratives. Photography is not just a hobby but a way to explore the world and connect with others on a deeper level.
        </p>
      </div>
    </div>
  );
}

export default About;
