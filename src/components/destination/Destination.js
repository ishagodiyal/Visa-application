import React from 'react';
import './Destination.css';
import { Link } from 'react-router-dom';
import bodyImg from './desti_image/32545.jpg'

export default function Destination() {
  return (
    <div>


   {/* body image */}
<div className="bodyImg">
<img src={bodyImg} className="img"></img>
<div className="heading">
 We make the world better,<br/> together
</div>
<div className="searchBar">
 <div className="innerBar">
    <input placeholder='search for a country' type="text" className='inner' autocomplete="off"></input>
 </div>

<button type="button" class="btn btn-Dark" ><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
</svg></button>
</div>

</div>





      <div className="heading2">Popular Visa Assistance Destinations</div>

      <div className="card">
      <Link to="/dubai" className="card-body">
          <h4>Dubai</h4>
          <p>Asia</p>
          <h2>₹ 2,499/-</h2>
        </Link>

        <Link to="/turkey" className="card-body">
          <h4>Turkey</h4>
          <p>Asia</p>
          <h2>₹ 1,999/-</h2>
        </Link>

        <Link to="/singapore" className="card-body">
          <h4>China</h4>
          <p>Asia</p>
          <h2>₹ 1,800/-</h2>
        </Link>

        <Link to="/srilanka" className="card-body">
          <h4>Srilanka</h4>
          <p>Asia</p>
          <h2>₹ 1,999/-</h2>
        </Link>

        <Link to="/thailand" className="card-body">
          <h4>Georgia</h4>
          <p>Asia</p>
          <h2>₹ 1,999/-</h2>
        </Link>

     
          </div>
        
      </div>
    
  );
}   
