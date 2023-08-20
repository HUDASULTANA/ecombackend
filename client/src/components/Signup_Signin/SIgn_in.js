import React from 'react';
import { useState ,useContext} from 'react';
import './Signup.css';
import {  useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 import { Logincontext } from '../context/Contextprovider';
const SIgn_in = () => {
     const[logdata,setData]=useState({
email:"",
password:""
    });
    const history = useNavigate("");

    const{account, setAccount} = useContext(Logincontext);
    const adddata =(e)=>{
        const{name,value}=e.target;
        setData(()=>{
            return{
                ...logdata,
                [name]:value
            }
        })
    };
    const senddata = async(e)=>{
        e.preventDefault();
        const{ email, password } = logdata;









        if ( !email ||  !password ) {
    toast.error("All fields are required", {
      position: "top-center"
    });
    return; // Exit the function early if validation fails
  }


        const res = await fetch("/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
email, password
            })

        });
        const data = await res.json();
        console.log(data);
        if(res.status == 400 || !data){
            console.log("invalid details");
            toast.warn("Oops, Invalid details",{
                     position:"top-center"
            })
        }
        else{
            console.log("data valid");
            setAccount(data)
            toast.success(
                // "valid user"
            
           <h4> Welcome , {data.fname} </h4>
        
            
            ,{
                     position:"top-center"
            })
            setData({...logdata,email:"",password:""});
            history("/");
        }
    }
  return (
   <>
    <section>
        <div className='sign_container'>
<div className='sign_header'>
    <img src="http://localhost:3000/dsfulllogo.png"/>
</div>
 <div className="sign_form">
                    <form method='POST'>
                        <h1>Login</h1>

                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input  required type="email" 
                             onChange ={adddata}
                             value={logdata.email}
                             name="email"
                               placeholder='Email'
                                id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input  required type="password" 
                             onChange ={adddata}
                              value={logdata.password}
                             name="password"
                               
                                id="password" placeholder=" password " />
                        </div>
                        <button type="submit" className="signin_btn" onClick={senddata}
                        >Login</button>
                    </form>
        </div>
        <div className='create_accountinfo'>
        <p>New User</p>
        <NavLink to="/register"><button>Register now</button></NavLink>
        </div>
        
        </div>

        <ToastContainer />
    </section>
   </>
  )
}

export default SIgn_in
