import React ,{useContext, useEffect, useState} from 'react';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import './navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
  import { Logincontext } from '../context/Contextprovider';
  import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Rightheader from './Rightheader';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 import {useSelector} from 'react-redux';
 import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const Navbaar = () => {

    const{account, setAccount} = useContext(Logincontext);

    const history = useNavigate();

     const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  const[text,setText] = useState("");
  console.log(text);
  const[liopen,setLiopen]= useState(true);

   const {products} = useSelector(state => state.getproductsdata);

    const [dropen, setDRopen] = useState(false);

   
  console.log(account);
  console.log(account.carts);

  const getdetailvaliduser = async()=>{
    const res= await fetch("/validuser",{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
    });
    const data = await res.json();
    console.log(data);

    if(res.status !== 201){
      console.log("error");
    }else{
      console.log("data valid");
      setAccount(data);
    }
  };

  const handleopen= ()=>{
    setDRopen(true)
  }

  const handledrclose =()=>{
    setDRopen(false)
  }




 const logoutuser= async()=>{
    const res2= await fetch("/logout",{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
    });
    const data2 = await res2.json();
    console.log(data2);

    if(res2.status !== 201){
      console.log("error");
    }else{
      console.log("data valid");
      // alert("logout");
      toast.success("logout successful",{
                     position:"top-center"
            })
      history("/");
      setAccount(false);
      
    }
  };

  const getText = (items)=>{
    setText(items)
    setLiopen(false)
  }

  useEffect(()=>
  {
   getdetailvaliduser()
  },[])
  // console.log(account.carts.length);


  return (
   <header>
    <nav>
      <div className="left">

<IconButton className='hamburgur' onClick={handleopen}>

            <MenuIcon style={{color:"white"}}/>
          </IconButton>
          <Drawer open={dropen} onClose={handledrclose}>

<Rightheader logclose={handledrclose}/>
          </Drawer>

<div className="navlogo">
 <NavLink to="/"> <img src="http://localhost:3000/navlogo.png"/></NavLink>
</div>
<div className="nav_searchbaar">
  <input type="text" name="" id=""
    onChange={(e)=>getText(e.target.value)}
    placeholder='Explore your interest'
  />
  <div className ="search_icon">
  <SearchIcon id="search" />
  </div>

  {/*search filter */}
  {
    text && < List className='extrasearch' hidden={liopen}>
    
    {
      products.filter(product =>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
        <ListItem>
        <NavLink to={`/getproductsone/${product.id}`} onClick={()=> setLiopen(true)}>
           {product.title.longTitle}
        </NavLink>
         
        </ListItem>
      ))
    }
    </List>
  }
</div>
      </div>
      <div className="right">
<div className="nav_btn">









{
  account ?  <NavLink to="/login" style={{display:"none"}}>signin</NavLink>:
   <NavLink to="/login">signin</NavLink>
}



  
</div>
{
  account ? <NavLink to="/buynow"><div className="cart_btn">
<Badge badgeContent={account.carts.length} color="primary">

<ShoppingCartIcon id ="icon"/>
</Badge><p>Cart</p></div> </NavLink>
: 
<NavLink to="/login">
<div className="cart_btn">
  <Badge badgeContent={0} color="primary">
    <ShoppingCartIcon id="icon"/>
  </Badge>
 
  <p>cart</p>
  </div>
</NavLink>
} <ToastContainer/>

{
  account ?<Avatar className='avtar2' 
      id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
  >{account.fname[0].toUpperCase()}</Avatar>:<Avatar className='avtar'
      id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
  ></Avatar>
}

 
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       
        <MenuItem onClick={handleClose}>My account</MenuItem>

        {
          account?  <MenuItem onClick={handleClose} style={{ margin: 10 }} onClick={logoutuser}
          ><LogoutIcon/>Logout</MenuItem>:""
        }
       
      </Menu>


      </div>
    </nav>
   </header>
  )
}

export default Navbaar
