import React from 'react';
import Banner from './Banner';
import './maincom.css';
import Slide from './Slide';
import Footer from '../foooter/Footer';
import { useEffect } from 'react';
import {getProducts} from '../redux/actions/Action';
import {useDispatch ,useSelector} from "react-redux";

const Maincom = () => {

  const {products} = useSelector(state => state.getproductsdata);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch]);
  return (
    <div className="home_section">
      <div className='banner_part'>
        <Banner/>
      </div>
      <div className='slide_part'>
        <div className='left_slide'>
       <Slide title="Deal of the day" products={products}/>
        </div>
        <div className='right_slide'>
          <h4>Latest Launches</h4>
          <img src= "http://localhost:3000/latestlaunch.png"/>
          <a href="">See more</a>
        </div>
      </div>
      <Slide title="Today's Deal" products={products}/>
      <div className='center_img'>
        <img src="https://png.pngtree.com/template/20221212/ourmid/pngtree-happy-raksha-bandhan-sale-and-discount-banner-image_1919981.jpg"/>
      </div>
      <Slide title="best-seller" products={products}/>
      <Slide title="95 % discount" products={products}/>
      <Footer/>
      
    </div>
  )
}

export default Maincom;
