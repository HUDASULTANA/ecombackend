import { useState } from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

const Sign_up = () => {
    const [udata,setUdata]= useState({
        fname:"",
        email:"",
        mobile:"",
        password:"",
        cpassword:""
    });
   
    const history = useNavigate("");
    const adddata =(e)=>{
        const{name,value}=e.target;
         setUdata(()=>{
        return{
            ...udata,
            [name]:value
        }
    })
    };
    
    const senddata = async(e)=>{
        e.preventDefault();
        const{fname,email,mobile,password,cpassword} = udata;

    







 if (!fname || !email || !mobile || !password || !cpassword) {
    toast.error("All fields are required", {
      position: "top-center"
    });
    return; // Exit the function early if validation fails
  }









        const res = await fetch ("/register",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"},
                body: JSON.stringify({
                    fname,email,mobile,password,cpassword
                })
            });
            const data = await res.json();
            //  console.log(data);
             if(
                res.status === 422 ||
                 !data){
            //    alert("no data")
             toast.warn("Oops, Invalid details",{
                     position:"top-center"
            })
            //     //     toast.error("invalid details",{
            //     //     position:"top-center"
            //     // });
             }
            else{
            //    alert("data successfully added");
            //     
             toast.success("data successfully added",{
                     position:"top-center"
            })
               setUdata({...udata,fname:"",email:"",mobile:"",password:"",cpassword:""});
                history("/login");
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
                    <form method ='POST'>
                        <h1>Register</h1>

                        <div className="form_data">
                        <label htmlFor="fname">Username</label>
                            <input required type="text" 
                            onChange={adddata}
                            value={udata.fname} name="fname"
                               placeholder='Username'
                                id="fname" /></div>
                                 <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input  required type="email"
                             onChange={adddata} 
                              value={udata.email} name="email"
                               placeholder='Email'
                                id="email" /></div>
                                 <div className="form_data">
                                <label htmlFor="mobile">Contact number</label>
                            <input  required type="text" 
                             onChange={adddata} 
                              value={udata.mobile}
                            name="mobile"
                               placeholder='Phone number'
                                id="mobile" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input  required type="password"
                             onChange={adddata} 
                              value={udata.password}
                           name="password"
                               
                                id="password" placeholder="use strong password " />
                        </div>
                        <div className="form_data">
                            <label htmlFor="cpassword">Confirm password</label>
                            <input  required type="password" 
                             onChange={adddata} 
                              value={udata.cpassword}
                              name="cpassword"
                               
                                id="cpassword" placeholder="re-enter password " />
                        </div>
                        <button type="submit" className="signin_btn"   onClick={senddata}>SignUp</button>
                        <div className='signin_info'>
                            <p>Already a User?</p>
                            <NavLink to="/login">Sign in</NavLink>
                        </div>
                    </form>
        </div>
    <ToastContainer />
        </div>
    </section> 
    </>
  )
}

export default Sign_up;
