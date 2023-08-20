import React from 'react';
import './footer.css';


const Footer = () => {
  return (
    <footer>
      <div className='footer_container'>
        <div className='footr_details_one'>
            <h3>Get to know us</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>Events</p>
            <p>Press Release</p>
        </div>
        <div className='footr_details_one'>
            <h3>Connect with us</h3>
           <a href='https://www.bing.com/ck/a?!&&p=6e1395324fe080a9JmltdHM9MTY5MjA1NzYwMCZpZ3VpZD0zNDlmZGQ1YS1lMGQzLTY4OTgtMjY1MC1jZjFhZTE3ZTY5MDcmaW5zaWQ9NTIxOA&ptn=3&hsh=3&fclid=349fdd5a-e0d3-6898-2650-cf1ae17e6907&psq=huda+sultana+iit+roorkee&u=a1aHR0cHM6Ly9pbi5saW5rZWRpbi5jb20vaW4vaHVkYS1zdWx0YW5hLWtoYW4tOTkyNDk3MjYw&ntb=1'> <p>Linkedin</p></a>
            <p>Facebook</p>
            <p>Instagram</p>
        </div>
        <div className='footr_details_one forres'>
            <h3>Be our business partner</h3>
            <p>Seller</p>
            <p>Trader</p>
            <p>Developer</p>
            <p>Operations</p>
        </div>
        <div className='footr_details_one forres'>
            <h3>Head Office Address</h3>
            <p>Sac Building</p>
            <p>IIT ROORKEE</p>
            <p>Roorkee(247001)</p>
            <p>Uttarakhand</p>
        </div>
      </div>
      <div className='lastdetails'>
        <img src="http://localhost:3000/dsfulllogo.png"/>
        <p>All rights reserved   &copy;2023
         Huda_Sultana</p>
      </div>
    </footer>
  )
};

export default Footer;
