import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "React Components",
      text: "Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.",
    },
    {
      image: ChooseMeals,
      title: "APIs",
      text: "An API, or application programming interface, is a set of defined rules that enable different applications to communicate with each other.  ",
    },
    {
      image: DeliveryMeals,
      title: "Router",
      text: "Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application.",
    },
  ];
  return (
    <div className="work-section-wrapper1">
      <div className="work-section-top1">
        <p className="primary-subheading1">About Me</p>
        <h1 className="primary-heading1">Hello,I am Huda Sultana</h1>
        <p className="primary-text1">
         I am Developer at design studio , this website is my first Developement project after joining DS, Hope you like it. I mainly worked with these things in making of this site:-
        </p>
      </div>
      <div className="work-section-bottom1">
        {workInfoData.map((data) => (
          <div className="work-section-info1" key={data.title}>
            <div className="info-boxes-img-container1">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;