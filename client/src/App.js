import Navbaar from './components/header/Navbaar';
import { useState } from 'react';
import './App.css';
import Newnav from './components/newnavbar/Newnav';
import Maincom from './components/home/Maincom';
import SIgn_in from './components/Signup_Signin/SIgn_in';
import Sign_up from './components/Signup_Signin/Sign_up';
import{Routes,Route} from 'react-router-dom';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';

import CircularProgress from '@mui/material/CircularProgress';
import { useEffect} from 'react';
import Lastpage from './components/lastpage/Lastpage';

function App() {
  const [data , setData] = useState(false);

useEffect(()=>{
  setTimeout(()=>{
    setData(true)},2000)
  },[])



  return (
    <>
{
  data ? (<>
    <Navbaar />
    <Newnav/>
    <Routes>
      <Route path="/" element={<Maincom/>}/>
      <Route path="/login" element={<SIgn_in/>}/>
      <Route path="/register" element={<Sign_up/>}/>
       <Route path="/getproductsone/:id" element={<Cart/>}/>
       <Route path="/buynow" element={<Buynow/>}/>
       <Route path="/lastpage" element={<Lastpage/>}/>
    </Routes>
       </>
  ):( <div className='circle'>

  <CircularProgress/>
  <h2>Loading.....</h2>
</div>
)
}</>
    
    
  );
}

export default App;
