import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="about-section-container1">
      <div className="about-background-image-container1">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container1">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container1">
        <p className="primary-subheading1">About Studio</p>
        <h1 className="primary-heading1">
          Design Studio IIT Roorkee
        </h1>
        <p className="primary-text1">
         We are budding researchers, designers, engineers and architects at IITR working together to combine
        </p>
        <p className="primary-text1">
         
        </p>
        <div className="about-buttons-container1">
          <NavLink to='https://expectations.iitr.ac.in/co-curricular/technical-groups/design-studio' 
          style={{textDecoration:"none"}}><button className="secondary-button1">Know More</button></NavLink>
          <NavLink to='https://www.facebook.com/designstudio.iitr/videos/recruitment-2020/1074174602974782/' 
          style={{textDecoration:"none"}}><button className="watch-video-button1">
            <BsFillPlayCircleFill /> Watch Video
          </button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default About;