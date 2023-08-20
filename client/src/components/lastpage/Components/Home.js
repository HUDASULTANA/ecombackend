import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";

import { FiArrowRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container1">
   
      <div className="home-banner-container1">
        <div className="home-bannerImage-container1">
          
        </div>
        <div className="home-text-section1">
          <h1 className="primary-heading1">
           Hello,Users
          </h1>
          <p className="primary-text1">
          You Cant Make Payment here,
            This isn't Official store of Design Studio its just a prototype which I tried to make as my Dev-task
          </p>
          <NavLink to='https://linktr.ee/DesignStudioIITR' style={{textDecoration:"none"}}><button className="secondary-button1">
            Linktr.ee Website <FiArrowRight />{" "}
          </button></NavLink>
        </div>
        <div className="home-image-section1">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;