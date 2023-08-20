import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper1">
      <div className="work-section-top1">
        <p className="primary-subheading1">Feedback</p>
        <h1 className="primary-heading1">How was your experience</h1>
        <p className="primary-text1">
         
        </p>
      </div>
      <div className="testimonial-section-bottom1">
        <img src={ProfilePic} alt="" />
        <p>
      Thankyou for your Precious time, it would be great to hear about your first impressions.So please leave us a review:
        </p>
        <div className="testimonials-stars-container1">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Thankyou</h2>
      </div>
    </div>
  );
};

export default Testimonial;