import React from 'react';
import { useContext } from 'react';
import Avatar  from '@mui/material/Avatar';
import { Logincontext } from '../context/Contextprovider';
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';
import './rightheader.css';
import { toUnitless } from '@mui/material/styles/cssUtils';


const Rightheader = ({logclose}) => {

const{account, setAccount} = useContext(Logincontext);

  return (
    <>
    <div className='rightheader'>
        <div className='right_nav'>
            {
                account ?<Avatar className='avtar2'>{account.fname[0].toUpperCase()}</Avatar>:<Avatar className='avtar'></Avatar>
            }
            {
            account ? <h3>Hello, {account.fname.toUpperCase()} </h3> :""
            }
        </div>
        <div className='nav_btn' onClick={()=>logclose()}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">shop By Category</NavLink>
            <Divider style={{width:"100%",marginLeft:"-20px"}}/>
            <NavLink to="/">Today's Deal</NavLink>
            {
                account ? <NavLink to ="/buynow">Your Orders</NavLink> :
                <NavLink to="/login">Your Orders</NavLink>
            }
            <Divider style={{width:"100%",marginLeft:"-20px"}}/>
            <div className='flag'>
                <NavLink to='/'>Settings</NavLink>
                <img src="" />
            </div>
        </div>
    </div>  
    </>
  )
}

export default Rightheader
