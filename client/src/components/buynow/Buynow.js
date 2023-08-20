import React, { useEffect, useState } from 'react';
import './Buynow.css';
import Footer from '../foooter/Footer';
import{Divider} from '@mui/material';
import Option from './Option';
import Subtotal from './Subtotal';
import Right from './Right';


const Buynow = () => {

  const [cartdata, setCartdata]= useState("");
  // console.log(cartdata.carts);

  const getdatabuy = async()=>{
    const res= await fetch("/cartdetails",{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
    });
    const data = await res.json();
    if(res.status !== 201){
      console.log("error");
    }else{
      setCartdata(data.carts);
    }
  };
  useEffect(()=>{
    getdatabuy();
  },[]);
  return (
  
  <>{
    cartdata.length ? <div className='buynow_section'>
    <div className='buynow_container'>
        <div className='left_buy'>
<h1>Your Designeries</h1>
<p>Select all item</p>
<span className='leftbuyprice'>Price</span>
<Divider/>
{
  cartdata.map((e,k)=>{
    return(
      <>

        <div className='item_containert'>
    <img src={e.url}/>
    <div className='item_details'>
        <h3>{e.title.longTitle}</h3>
        <h3>{e.title.shortTitle}</h3>
        <h3 className='diffrentprice'>RS.{e.price.cost}</h3>
        <p className='unusuall'>Usualyy Dispatched in 8 days.</p>
        <p>Eligible for free shipping </p>
        <img src="https://tse4.mm.bing.net/th?id=OIP.rnigC4MkdAeWxYjkc8UXEwHaCS&pid=Api&P=0&h=180"/>
        <Option deletedata={e.id} get={getdatabuy} />
    </div>
    <h3 className='item_price'> Rs.{e.price.cost}</h3>
</div><Divider/>
      </>
    )
  })
}


<Subtotal item={cartdata}/>
        </div>
        <div className='right_buy'>
<Right item={cartdata}/>
        </div>
    </div>
   <Footer/>
    </div> : ""
  }
    

       </>
  )
}

export default Buynow
