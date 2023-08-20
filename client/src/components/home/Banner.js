import { colors } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import "./banner.css";
const data=[
    "http://localhost:3000/image1.png",
    "http://localhost:3000/image2.png",
    "http://localhost:3000/image3.png",
    "http://localhost:3000/image4.png"
]
const Banner = () =>{
    return(
        < Carousel className='carasousel'
        style={{objectFit:"contain",maxWidth:"1000px"}}
        
        autoPlay={true}
        animation='slide'
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps={{
            style:{
                backgroundColor:"white",
                color:"black"
            }
        }}>{
            data.map((imag,i)=>{
                return(
                    <>
                        <img src={imag} className='banner_img'
                            style={{
                            display:"flex",
                         width:"100%",
                       
                           height:"calc(100vh - 100px)"
                            }}
                        />
                    </>
                )
            })
        }
        </Carousel>
    )
}
export default Banner;
