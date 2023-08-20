import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Divider} from '@mui/material';
// import {products} from './productdata';
import "./slide.css";
import {NavLink} from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
   
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  
  }
};

const Slide = ({title , products}) => {
  return (
   <div className='products_section'>
    <div className='products_deal'>
    <h3>{title}</h3>
    <button className='view_btn'>view all</button>

    </div>
 <Divider/>
   <Carousel 
   responsive={responsive}
    infinite={true}
    draggable={false}
    swipeable={true}
    showDots={false}
    centerMode={true}
    autoPlay={true}
    autoPlaySpeed={4000}
    keyBoardControl={true}
    containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
   dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px" >

    {
        products.map((e)=>{
            return(
            <NavLink to= {`/getproductsone/${e.id}`}>

           
                <div className='products_items'>
                    <div className='products_img'>
                        <img src={e.url} alt="prouctitem"/>

                    </div>
                    <p className='products_name'><FavoriteIcon style={{width:"12px",color:" #954389"}}/>{e.title.shortTitle}<FavoriteIcon style={{width:"12px",color:" #954389"}}/></p>
                    <p className='products_offer'>{e.discount}</p>
                    <p className='products_explore'>{e.tagline}</p>
                </div> </NavLink>
            )
        })
        
    }


   </Carousel>
   <Divider style={{
   border:"1px solid purple",
   borderRadius:"3px"
   }}/>
   </div>
  )
}

export default Slide;
