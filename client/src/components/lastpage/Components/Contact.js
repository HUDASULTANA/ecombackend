import React from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-page-wrapper1">
      <h1 className="primary-heading1">Submit Your Reviews</h1>
      <h1 className="primary-heading1"></h1>
      <div className="contact-form-container1">
        <input type="text" placeholder="huda_s@me.iitr.ac.in" />
        <NavLink to='/' 
        style={{textDecoration:"none"}}><button className="secondary-button1">Return Home</button></NavLink>
      </div>
    </div>
  );
};

export default Contact;