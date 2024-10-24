import React from 'react'
import './NavBar.css'
import logohead from './images/logohead.png'
import Marquee from 'react-fast-marquee';



export default function NavBar() {
   const item={
   gap:'10px',
   fontFamily:'Noto Sans, sans-Serif',
fontSize: '13px'
   }
   const activeNav={
    backgroundColor:'#445d93',
    color:'white'
   }
  


  
  return (
    <div>
        <div className="head-top">
            <div className="head-top1">
            More than 5 Million Happy Customers
            </div>
        </div>

        <nav class="navbar navbar-expand-lg" >
  <div class="container-fluid">
   <img src={logohead}height="60px" width="210px" className="logo"></img>
    <Marquee  speed={50} className="marquee_tag" direction="left">Important Notice : Visa processing times may be delayed due to high demand. Please apply early to avoid any inconvenience. Visit our website for more details.</Marquee>
  </div>
</nav>





    </div>
  )
}
